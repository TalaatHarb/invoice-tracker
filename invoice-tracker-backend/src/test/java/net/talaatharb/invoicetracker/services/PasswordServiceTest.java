package net.talaatharb.invoicetracker.services;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import net.talaatharb.invoicetracker.exceptions.UserException;
import net.talaatharb.invoicetracker.repositories.ResetTokenRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository1;

@ExtendWith(MockitoExtension.class)
public class PasswordServiceTest {

    @InjectMocks
    private PasswordService passwordService;

    @Mock
    private UserRepository1 userRepository ;

    @Mock
    private ResetTokenRepository resetTokenRepository;


    @Test
    public void testSendResetLinkThrowsUserExceptionWhenPassingUnValidEmail(){
        Executable executable = ()->{
            passwordService.sendResetLink("some");
        };
        Assertions.assertThrows(UserException.class, executable);
    }

    @Test
    public void testSendResetLinkThrowsUserExceptionWhenUserReturnedIsEmpty(){
        String anyEmail = "some@someting.com";
        Mockito.when(userRepository.findByEmail(anyEmail)).thenReturn(Optional.empty());
        Executable executable = ()->{
            passwordService.sendResetLink(anyEmail);
        };
        Assertions.assertThrows(UserException.class, executable);
    }
}
