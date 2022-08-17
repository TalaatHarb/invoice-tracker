package net.talaatharb.invoicetracker.repositories;

import net.talaatharb.invoicetracker.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {


    @Query(
            "SELECT e FROM Employee e WHERE " +
                    "e.empName LIKE CONCAT('%',:name,'%')"

    )

    List<Employee> filterEmployeesByName(String name);
    @Query(
            "SELECT e FROM Employee e WHERE " +
                    "e.empArabicName LIKE CONCAT('%',:arabicName,'%')"

    )
    List<Employee> filterEmployeesByArabicName(String arabicName);
    @Query(
            "SELECT e FROM Employee e WHERE " +
                    "e.teamName LIKE CONCAT('%',:teamName,'%')"

    )
    List<Employee> filterEmployeesByTeamName(String teamName);
    @Query(
            "SELECT e FROM Employee e WHERE " +
                    "e.jobTitle LIKE CONCAT('%',:jobTitle,'%')"

    )
    List<Employee> filterEmployeesByJobTitle(String jobTitle);
    @Query(
            "SELECT e FROM Employee e WHERE " +
                    "e.joinDate LIKE CONCAT('%',:joinDate,'%')"

    )
    List<Employee> filterEmployeesByJoinDate(String joinDate);

    @Query(
            "SELECT e FROM Employee e WHERE " +
                    "e.endDate LIKE CONCAT('%',:endDate,'%')"

    )
    List<Employee> filterEmployeesByEndDate(String endDate);

    @Query(
            "SELECT e FROM Employee e WHERE e.id=:id"

    )
    List<Employee> filterEmployeesById(Long id);
    @Query(
            "SELECT e FROM Employee e WHERE e.balance=:balance"

    )
    List<Employee> filterEmployeesByBalance(int balance);
    @Query(
            "SELECT e FROM Employee e WHERE e.remainBalance=:remainBalance"

    )
    List<Employee> filterEmployeesByRemainBalance(int remainBalance);

    @Query(
            "SELECT e FROM Employee e WHERE e.billable=:billable"

    )
    List<Employee> filterEmployeesByBillable(boolean billable);

    @Query(
            "SELECT e FROM Employee e WHERE e.isDisabled=:isDisabled"

    )
    List<Employee> filterEmployeesByIsDisabled(boolean isDisabled);

    @Query(
            "SELECT e FROM Employee e WHERE e.fullTimeJob=:fullTimeJob"

    )
    List<Employee> filterEmployeesByIsFullTimeJob(boolean fullTimeJob);

}

