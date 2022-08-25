package net.talaatharb.invoicetracker.services;

import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import net.talaatharb.invoicetracker.models.ResetTokenEntity;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.ResetTokenRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@ExtendWith(MockitoExtension.class)
class PasswordServiceTest {

	@InjectMocks
	private PasswordService passwordService;

	@Mock
	private UserRepository userRepo;
	
	@Mock
	private ResetTokenRepository resetTokenRepo;
	
	@Mock
	private MailService mailService;
	
	@Mock
	private PasswordEncoder passwordEncoder;

	@Test
	void testDeleteUserToken() {
		long id = 1L;
		
		passwordService.deleteUserToken(id);
		
		verify(resetTokenRepo).deleteById(id);
	}

	@Test
	void testSendResetLink() {
		String email = "a@a.com";
		when(userRepo.findByEmail(anyString())).thenReturn(Optional.of(new User()));
		
		passwordService.sendResetLink(email);
		
		verify(mailService).sendMail(anyString(), anyString(), anyString());
	}

	@Test
	void testResetPassword() {
		String resetToken = "token";
		String newPassword = "089765asdfgPOIUYT#";
		
		ResetTokenEntity restTokenEntity = new ResetTokenEntity();
		restTokenEntity.setResetToken(resetToken);
		restTokenEntity.setExpTimeStamp(System.currentTimeMillis() + 1000L);
		restTokenEntity.setUser(new User());
		
		when(resetTokenRepo.findByResetToken(resetToken)).thenReturn(Optional.of(restTokenEntity));
		
		when(passwordEncoder.encode(newPassword)).thenReturn(newPassword);		
		
		passwordService.resetPassword(resetToken, newPassword);
		
		verify(passwordEncoder).encode(newPassword);
		verify(userRepo).save(any(User.class));
	}

}
