package net.talaatharb.invoicetracker.services;

import net.bytebuddy.utility.RandomString;
import net.talaatharb.invoicetracker.exceptions.UserException;
import net.talaatharb.invoicetracker.helper.RegexHelper;
import net.talaatharb.invoicetracker.models.ResetTokenEntity;
import net.talaatharb.invoicetracker.models.UserEntity;
import net.talaatharb.invoicetracker.repositories.ResetTokenRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PasswordService {

    @Autowired
    private UserRepository1 userRepo;
    @Autowired
    private ResetTokenRepository resetTokenRepo;
    @Autowired
    private MailService mailService;

    @Value("${APPLICATION_URL}")
    private String appUrl;
    private final int FIVE_MINUTES = 5 * 60 * 60 * 1000;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void sendResetLink(String email) {
        // email validation
        if(!RegexHelper.testWithPattern(RegexHelper.emailPattern, email)){
            throw new UserException("Something went wrong");
        }

        String token = RandomString.make(45);
        String resetLink = appUrl + "/reset-password/" + token;

        String mailSubject = "Reset password request";
        String mailBody = "<h2>Reset Password Request</h2>" +
                          "<p>Please visit <a href=\"http://" + resetLink + "\"><bold>this link</bold> </a> to reset your password </p>";

        Optional<UserEntity> userReturnedOptional = userRepo.findByEmail(email);
        if(userReturnedOptional.isEmpty()) {
            throw new UserException("No user found with email " + email);
        }

        UserEntity userReturned = userReturnedOptional.get();
        Optional<ResetTokenEntity> resetTokenReturnedOptional = resetTokenRepo.findByUserId(userReturned.getId());

        ResetTokenEntity resetToken = new ResetTokenEntity();
        resetToken.setResetToken(token);
        resetToken.setExpTimeStamp(System.currentTimeMillis() + FIVE_MINUTES);
        resetToken.setUser(userReturned);

        if(resetTokenReturnedOptional.isPresent()){
            userReturned.setResetToken(null);
            resetTokenRepo.deleteById(userReturned.getId());
        }

        resetTokenRepo.save(resetToken);
        mailService.sendMail(email, mailSubject, mailBody);
    }

    public void resetPassword(String resetToken, String newPassword) {

        // token and password validation
        if(!RegexHelper.testWithPattern(RegexHelper.noSpecialCharsRegex,resetToken) || !RegexHelper.testWithPattern(RegexHelper.passwordPattern, newPassword)){
            throw new UserException("Something went wrong");
        }

        Optional<ResetTokenEntity> resetTokenReturnedOptional = resetTokenRepo.findByResetToken(resetToken);

        if(resetTokenReturnedOptional.isEmpty()) {
            throw new UserException("You are not authorized to make this operation");
        }

        ResetTokenEntity resetTokenReturned = resetTokenReturnedOptional.get();

        if(System.currentTimeMillis() > resetTokenReturned.getExpTimeStamp()){
            throw new UserException("Enter Your Email Again");
        }

        UserEntity userReturned = resetTokenReturned.getUser();

        // using Password encoder bean to hash the new password
        String hashedPassword = passwordEncoder.encode(newPassword);

        userReturned.setPassword(hashedPassword);
        userRepo.save(userReturned);

        userReturned.setResetToken(null);
        resetTokenRepo.deleteById(resetTokenReturned.getId());
    }
}
