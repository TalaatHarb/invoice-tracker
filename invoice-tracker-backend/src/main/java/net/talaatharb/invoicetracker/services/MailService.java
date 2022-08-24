package net.talaatharb.invoicetracker.services;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import net.talaatharb.invoicetracker.exceptions.UserException;
import net.talaatharb.invoicetracker.interfaces.IMail;

@Service
public class MailService implements IMail {

    @Autowired
    private JavaMailSender mailSender;


    @Override
    public void sendMail(String to, String subject, String body) {
        MimeMessage mailMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mailMessage);

        // to-do : handle mail error
        try {
            helper.setFrom("CegeTeam");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(body, true);
            mailSender.send(mailMessage);
            System.out.println("Mail sent... ");
        }catch(Exception e) {
            e.printStackTrace();
            throw new UserException("Unexpected error");
        }
    }
}
