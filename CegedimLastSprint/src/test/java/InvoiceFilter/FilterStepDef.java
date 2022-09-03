package InvoiceFilter;

import BrowserActions.BrowserActions;
import io.cucumber.java.After;
import io.cucumber.java.AfterAll;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
// FINISHED
public class FilterStepDef {
    static String browserType = "chrome";
    static String loginPage = "https://invoice-tracker-frontend.herokuapp.com/login";
    static String email = "boogado1@yahoo.com";
    static String password = "awad36148";

    @Given("browser navigates to Invoice Generator Website and login as HR and navigates to employeeList")
    @BeforeTest
    public void browserNavigatesToInvoiceGeneratorWebsiteAndLoginAsHRAndNavigatesToEmployeeList() throws InterruptedException {
        BrowserActions.newDriver(browserType);
        BrowserActions.getDriver();
        BrowserActions.maximize();
        BrowserActions.navigate(loginPage);
        BrowserActions.search("name", "email", email);
        BrowserActions.searchWithEnter("name","password",password);
        Thread.sleep(2000);
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/hr/allEmployees");
        BrowserActions.click("id","billable");
        BrowserActions.click("id", "disabled");
        BrowserActions.click("id","fulltime");
    }

    @When("User clicks on employee ID from comBox and type employee ID in searchbox")
    @Test
    public void userClicksOnEmployeeIDFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");  //click on combox
        Thread.sleep(2000);
        BrowserActions.clickElement("id","id"); // click on the filer I want
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "1"); // write the value in searchbox
        BrowserActions.click("id","apply");   //press apply
    }

    @Then("Table contains the employee with the same ID")
    @Test
    public void tableContainsTheEmployeeWithTheSameID() throws InterruptedException {
        Thread.sleep(2000);
        String ID = BrowserActions.gettext("/html/body/div[1]/div[1]/div/div[3]/div[2]/table/tbody/tr/td[2]/div");
        Assert.assertEquals(ID,"1");
    }

    @When("User clicks on English Name from comBox and type employee Name in searchbox")
    @Test
    public void userClicksOnEnglishNameFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","englishName");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "Mohamed Zakaria");
        BrowserActions.click("id","apply");
    }

    @Then("Table contains the employee with the same Name")
    @Test
    public void tableContainsTheEmployeeWithTheSameName() throws InterruptedException {
        Thread.sleep(2000);
       String employeeNameTable = BrowserActions.gettext("/html/body/div[1]/div[1]/div/div[3]/div[2]/table/tbody/tr/td[4]/div");
        Assert.assertEquals(employeeNameTable,"Mohamed Zakaria");
    }

    @When("User clicks on job title from comBox and type job title in searchbox")
    @Test
    public void userClicksOnJobTitleFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","jobTitle");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "Developer");
        BrowserActions.click("id","apply");
        Thread.sleep(1000);

    }

    @Then("Table contains the employee with the same job title")
    @Test
    public void tableContainsTheEmployeeWithTheSameJobTitle() {
        String JobTitleTable = BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[8]/div");
        Assert.assertEquals(JobTitleTable,"Developer");
    }

    @When("User clicks on joining date from comBox and type joining Date in searchbox")
   @Test
    public void userClicksOnJoiningDateFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","joinDate");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "13-jul-2022");
        BrowserActions.click("id","apply");
    }

    @Then("Table contains the employee with the same joining Date")
   @Test
    public void tableContainsTheEmployeeWithTheSameJoiningDate() {
        String JoinDateTable = BrowserActions.gettext("/html/body/div[1]/div[1]/div/div[3]/div[2]/table/tbody/tr/td[9]/div");
        Assert.assertEquals(JoinDateTable,"Jul 13, 2022");
    }

    @When("User clicks on end date from comBox and type end Date in searchbox")
    @Test
    public void userClicksOnEndDateFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.click("id","clear");
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","endDate");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "25-aug-2022");
        BrowserActions.click("id","apply");
        Thread.sleep(1000);
    }

    @Then("Table contains the employee with the same end Date")
    @Test
    public void tableContainsTheEmployeeWithTheSameEndDate() throws InterruptedException {
        String EndDateTable = BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[10]/div");
        Assert.assertEquals(EndDateTable,"Aug 25, 2022");
    }

    @When("User clicks on allowed balance from comBox and type Allowed balance in searchbox")
    @Test
    public void userClicksOnAllowedBalanceFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","allowedBalance");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "21");
        BrowserActions.click("id","apply");
    }

    @Then("Table contains the employee with the same Allowed balance")
    @Test
    public void tableContainsTheEmployeeWithTheSameAllowedBalance() {
        String AllowedBalanceTable = BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[11]/div");
        Assert.assertEquals(AllowedBalanceTable,"21");
    }

    @When("User clicks on remaining balance from comBox and type remaining balance in searchbox")
    @Test
    public void userClicksOnRemainingBalanceFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","remainingBalance");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "15");
        BrowserActions.click("id","apply");
    }

    @Then("Table contains the employee with the same remaining balance")
    @Test
    public void tableContainsTheEmployeeWithTheSameRemainingBalance() {
        String RemainingBalanceTable = BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[12]/div");
        Assert.assertEquals(RemainingBalanceTable,"15");
    }

    @When("User clicks on Teams from comBox and type Teams in searchbox")

    public void userClicksOnTeamsFromComBoxAndTypeInSearchbox() throws InterruptedException {
        BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
        Thread.sleep(2000);
        BrowserActions.clickElement("id","teams");
        BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", "Team A");
        BrowserActions.click("id","apply");
    }

    @Then("Table contains the employee with the same Teams")
    public void tableContainsTheEmployeeWithTheSameTeams() {
        Boolean RemainingBalanceTable = BrowserActions.isElementPresent("xpath","/html/body/div/div[1]/div/div[3]/div[2]/table/tbody/tr/td[15]/div/a");
        Assert.assertEquals(RemainingBalanceTable,true);
        BrowserActions.quitBrowser();
    }
    @When("User clicks on team from table")
    @Test
    public void userClicksOnTeamFromTable() throws InterruptedException {
        BrowserActions.click("id","clear");
        BrowserActions.click("xpath","/html/body/div[1]/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[15]/div");
        Thread.sleep(1000);
    }

    @Then("Website opens contains employees working in that team")
    @Test
    public void websiteOpensContainsEmployeesWorkingInThatTeam() {
        String url =   BrowserActions.getUrl();
        Assert.assertEquals(url , "https://invoice-tracker-frontend.herokuapp.com/team/Team%20A");
    }

    @AfterTest
    public static void closeWindow(){
        BrowserActions.closeBrowser();
    }

}
