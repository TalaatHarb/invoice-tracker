package net.talaatharb.invoicetracker.ExcelPackege;
import java.util.ArrayList;
import java.util.List;

public class ExcelHelper {


    public static List<Employee> excelToTutorials(List<Employee> income_list) {

        try {
            List<Employee> employeeList = new ArrayList<>();

            for (int i = 0; i < income_list.size(); i++) {
                Employee employee = new Employee();

                employee.setJoining_date(income_list.get(i).getJoining_date());
                employee.setAnnual_balance(income_list.get(i).getAnnual_balance());
                employee.setEnglish_name(income_list.get(i).getEnglish_name());
                employee.setArabic_name(income_list.get(i).getArabic_name());
                employee.setEmployee_id(income_list.get(i).getEmployee_id());
                employee.setEmail(income_list.get(i).getEmail());
                employee.setBirth_date(income_list.get(i).getBirth_date());
                employee.setEmployee_adress_arabic(income_list.get(i).getEmployee_adress_arabic());
                employee.setEmployee_adress_english(income_list.get(i).getEmployee_adress_english());
                employee.setIs_disabiled(income_list.get(i).isIs_disabiled());
                employee.setIs_fullTime(income_list.get(i).isIs_fullTime());
                employee.setTeam_name(employee.getTeam_name());
                employee.setJop_title(income_list.get(i).getJop_title());
                employee.setBillable(income_list.get(i).isBillable());
                employee.setMobile_number(income_list.get(i).getMobile_number());
                employee.setMultible_team(income_list.get(i).isMultible_team());
                employee.setNational_id(income_list.get(i).getNational_id());
                employee.setPassword(income_list.get(i).getPassword());

                employeeList.add(employee);
            }

            return employeeList;

        } catch (Exception e) {
            throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
        }


    }
}

