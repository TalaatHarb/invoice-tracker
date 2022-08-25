package net.talaatharb.invoicetracker.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import net.bytebuddy.utility.RandomString;
import net.talaatharb.invoicetracker.exceptions.UserException;
import net.talaatharb.invoicetracker.models.ResetTokenEntity;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.ResetTokenRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;
import net.talaatharb.invoicetracker.utils.RegexHelper;

@Service
public class PasswordService {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private ResetTokenRepository resetTokenRepo;
    @Autowired
    private MailService mailService;

    @Value("${APPLICATION_URL:'http://localhost:300'}")
    private String appUrl;
    
    private static final int FIVE_MINUTES = 5 * 60 * 1000;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void sendResetLink(String email) {
        // email validation
        if(!RegexHelper.testWithPattern(RegexHelper.EMAIL_PATTERN, email)){
            return;
//            throw new UserException("Something went wrong");
        }

        String token = RandomString.make(45);
        String resetLink = appUrl + "/reset-password/" + token;

        String mailSubject = "Reset password request";
        String mailBody = "<h2>Reset Password Request</h2>" +
                          "<p>Please visit <a href=\"http://" + resetLink + "\"><bold>this link</bold> </a> to reset your password </p>";

        Optional<User> userReturnedOptional = userRepo.findByEmail(email);
        if(userReturnedOptional.isEmpty()) {
            return;
//            throw new UserException("No user found with email " + email);
        }

        User userReturned = userReturnedOptional.get();
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
        if(!RegexHelper.testWithPattern(RegexHelper.NO_SPECIAL_CHARS_PATTERN,resetToken) || !RegexHelper.testWithPattern(RegexHelper.PASSWORD_PATTERN, newPassword)){
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

        User userReturned = resetTokenReturned.getUser();

        // using Password encoder bean to hash the new password
        String hashedPassword = passwordEncoder.encode(newPassword);

        userReturned.setPassword(hashedPassword);
        userRepo.save(userReturned);

        userReturned.setResetToken(null);
        resetTokenRepo.deleteById(resetTokenReturned.getId());
    }
}
