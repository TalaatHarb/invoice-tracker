package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.User;
import org.mapstruct.control.MappingControl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FilterUserRepository extends JpaRepository<User,Long> {


    @Query(
            "SELECT e FROM User e WHERE " +
                    "e.englishName IN :name"

    )
    List<User> filterEmployeesByName(List<String>name);

    @Query(
            "SELECT e FROM User e WHERE " +
                    "e.arabicName IN :arabicName"

    )

    List<User> filterEmployeesByArabicName(List<String>arabicName );

    @Query(
            "SELECT e FROM User e WHERE " +
                    "e.jobTitle IN :jobTitle"

    )

    List<User> filterEmployeesByjobTitle(List<String>jobTitle );

}
