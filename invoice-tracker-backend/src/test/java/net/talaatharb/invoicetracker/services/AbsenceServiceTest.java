package net.talaatharb.invoicetracker.services;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import net.talaatharb.invoicetracker.models.Request;
import net.talaatharb.invoicetracker.models.User;
import net.talaatharb.invoicetracker.repositories.RequestRepository;
import net.talaatharb.invoicetracker.repositories.UserRepository;

@ExtendWith(MockitoExtension.class)
public class AbsenceServiceTest {
    @InjectMocks
    private AbsenceService absenceService;

    @Mock
    private RequestRepository absenceRepository;

    @Mock
    private UserRepository userRepository;

    @Test
    public void testGetAllAbsenceByEmployeeId() throws ParseException {
        // Arrange
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        List<Request> absences = List.of(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
                new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
                new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
                new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2)
        );

        Mockito.when(absenceRepository.findAllByRequestedBy((long)1)).thenReturn(absences);
        // Act
        List<Request> result = absenceService.getAllAbsenceByEmployeeId((long)1);
        // Assert
        assertEquals(absences, result);
    }

    @Test
    public void testUpdateAllEmployeeAbsences() throws ParseException {
        // Arrange
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        List<Request> absences = List.of(new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
                new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
                new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2),
                new Request(simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-09"), simpleDateFormat.parse("2018-09-10"), (long)1, "Sick leave", true, "Pending", "", new ArrayList<>(), 2)
        );

        final User user = new User();
        user.setRequests(absences);

        Mockito.when(userRepository.findById((long)1)).thenReturn(Optional.of(user));
        Mockito.when(userRepository.saveAndFlush(user)).thenReturn(user);

        // Act
        List<Request> result = absenceService.updateAllEmployeeAbsences(absences);
        // Assert
        assertEquals(absences, result);
    }
}
