package InvoiceSettings;

import BrowserActions.BrowserActions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

//(unknown errors) run toggle file instead

public class MyStepdefs {
    @Given("browser navigates to Invoice Generator Website and login as HR and navigates to employeeList to check settings button")
    @BeforeTest
    public void browserNavigatesToInvoiceGeneratorWebsiteAndLoginAsHRAndNavigatesToEmployeeListToCheckSettingsButton() throws InterruptedException {
        BrowserActions.newDriver("chrome");
        BrowserActions.getDriver();
        BrowserActions.maximize();
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/login");
        BrowserActions.search("name", "email", "boogado1@yahoo.com");
        BrowserActions.searchWithEnter("name","password","awad36148");
        Thread.sleep(2000);
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/hr/allEmployees");
        BrowserActions.click("id", "headlessui-popover-button-:r4:");

    }
    @When("User clicks on settings button")
    @Test
    public void userClicksOnSettingsButton() {
        // click on settings button
        BrowserActions.click("id", "headlessui-popover-button-:r4:");

    }

    @Then("The settings list is shown to choose the columns you want to see")
    @Test
    public void theSettingsListIsShownToChooseTheColumnsYouWantToSee() {
        boolean flag = BrowserActions.isElementPresent("id","headlessui-popover-panel-:r5:");
        Assert.assertEquals(flag , true);
    }

    @When("user clicks on toggle all to deactivate it")
    @Test
    public void userClicksOnToggleAllToDeactivateIt() {
        // click on toggle all
        BrowserActions.click("xpath","/html/body/div[1]/div[1]/div/div[3]/div[1]/div/div/div/div[1]/label/input");
    }

    @Then("toggle all checkbox is not active")
    @Test
    public void ToggleAllCheckboxIsNotActive() {
        // assert that toggle all isn't clicked
        boolean flag=  BrowserActions.Isclick("xpath","/html/body/div[1]/div[1]/div/div[3]/div[1]/div/div/div/div[1]/label/input");
        Assert.assertEquals(flag,false);
    }

    @When("The user clicks on Selection")
    @Test
    public void theUserClicksOnSelection() {
        // Click on selection
        BrowserActions.click("id","Selection");
    }
    @Then("The Selection column is shown")
    @Test
    public void theSelectionColumnIsShown() {
        // Assert that selection column is shown
        boolean selection =  BrowserActions.isElementPresent("xpath","/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[2]/div");
        Assert.assertEquals(selection, true);

    }
    @When("The user clicks on Employee ID")
    @Test
    public void theUserClicksOnEmployeeID() {
        BrowserActions.click("id","Id");
    }

    @Then("The employee ID column is shown")
    @Test
    public void theEmployeeIDColumnIsShown() {
        boolean employeeID = BrowserActions.isElementPresent("xpath","/html/body/div[1]/div[1]/div/div[3]/div[2]/table/thead/tr/th[2]/div");
        Assert.assertEquals(employeeID, true);
        String employeeIdColumn = BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[2]/div");
        Assert.assertEquals(employeeIdColumn, "Id");
    }

    @When("The user clicks on National ID")
    @Test
    public void theUserClicksOnNationalID() {
        // click on national ID checkbox
        BrowserActions.click("id","National Id");
    }

    @Then("The National ID column is shown")
    @Test
    public void theNationalIDColumnIsShown() {
        // assert that national ID column is shown
        boolean nationalID = BrowserActions.isElementPresent("xpath","/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th/div");
        Assert.assertEquals(nationalID, true);
        // assert name of the column is national id
        String nationalIDColumn = BrowserActions.gettext("//html/body/div[1]/div[1]/div/div[3]/div[2]/table/thead/tr/th[3]/div");
        Assert.assertEquals(nationalIDColumn, "National Id");
    }

    @When("The user clicks on English Name")
    @Test
    public void theUserClicksOnEnglishName() {
        // click on englishname checkbox
        BrowserActions.click("id","English name");
    }

    @Then("The English Name column is shown")
    @Test
    public void theEnglishNameColumnIsShown() {
        // assert name of the column is english name
        boolean englishName = BrowserActions.isElementPresent("xpath","/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th/div");
        Assert.assertEquals(englishName, true);
        String englishNameColumn = BrowserActions.gettext("/html/body/div[1]/div[1]/div/div[3]/div[2]/table/thead/tr/th[4]/div");
        Assert.assertEquals(englishNameColumn, "English name");

    }

    @When("The user clicks on Arabic Name")
    @Test
    public void theUserClicksOnArabicName() {
        BrowserActions.click("id","Arabic name");

    }

    @Then("The Arabic Name column is shown")
    @Test
    public void theArabicNameColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[5]/div"),"Arabic name");

    }

    @When("The user clicks on English Address")
    @Test
    public void theUserClicksOnEnglishAddress() {
        BrowserActions.click("id","English address");

    }

    @Then("The English Address column is shown")
    @Test
    public void theEnglishAddressColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[6]/div"),"English Address");
    }

    @When("The user clicks on Arabic Address")
    @Test
    public void theUserClicksOnArabicAddress() {
        BrowserActions.click("id","Arabic address");

    }

    @Then("The Arabic Address column is shown")
    @Test
    public void theArabicAddressColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[7]/div"),"Arabic address");

    }

    @When("The user clicks on Job Title")
    @Test
    public void theUserClicksOnJobTitle() {
        BrowserActions.click("id","Job title");

    }

    @Then("The Job Title column is shown")
    @Test
    public void theJobTitleColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[8]/div"),"Job title");

    }

    @When("The user clicks on Joining Date")
    @Test
    public void theUserClicksOnJoiningDate() {
        BrowserActions.click("id","Joining date");

    }

    @Then("The Joining Date column is shown")
    @Test
    public void theJoiningDateColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[9]/div"),"Joining date");

    }

    @When("The user clicks on End Date")
    @Test
    public void theUserClicksOnEndDate() {
        BrowserActions.click("id","End date");

    }

    @Then("The End Date column is shown")
    @Test
    public void theEndDateColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[10]/div"),"End date");

    }

    @When("The user clicks on Allowed balance")
    @Test
    public void theUserClicksOnAllowedBalance() {
        BrowserActions.click("id","Allowed balance");

    }

    @Then("The Allowed balance column is shown")
    @Test
    public void theAllowedBalanceColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[11]/div"),"Allowed balance");

    }

    @When("The user clicks on Remaining balance")
    @Test
    public void theUserClicksOnRemainingBalance() {
        BrowserActions.click("id","Remaining balance");

    }

    @Then("The Remaining balance column is shown")
    @Test
    public void theRemainingBalanceColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[12]/div"),"Remaining balance");

    }

    @When("The user clicks on Billable")
    @Test
    public void theUserClicksOnBillable() {
        BrowserActions.click("id","Billable");

    }

    @Then("The Billable column is shown")
    @Test
    public void theBillableColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[13]/div"),"Billable");

    }

    @When("The user clicks on isDisabled")
    @Test
    public void theUserClicksOnIsDisabled() {
        BrowserActions.click("id","Is disabled");

    }

    @Then("The isDisabled column is shown")
    @Test
    public void theIsDisabledColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[14]/div"),"Is disabled");

    }

    @When("The user clicks on Teams")
    @Test
    public void theUserClicksOnTeams() {
        BrowserActions.click("id","Teams");

    }

    @Then("The Teams column is shown")
    @Test
    public void theTeamsColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[15]/div"),"Team Name");

    }

    @When("The user clicks on FullTime")
    @Test
    public void theUserClicksOnFullTime() {
        BrowserActions.click("id","Fulltime");

    }

    @Then("The FullTime column is shown")
    @Test
    public void theFullTimeColumnIsShown() {
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[16]/div"),"Fulltime");

    }


    @When("The user clicks on View employess")
    @Test
    public void theUserClicksOnViewEmployess() {
        BrowserActions.click("id","View employees");

    }

    @Then("The View employess column is shown")
    @Test
    public void theViewEmployessColumnIsShown() {
        String viewButtonColumn=  BrowserActions.gettext("/html/body/div[1]/div[1]/div/div[3]/div[2]/table/tbody/tr[1]/td[17]/div");
        Assert.assertEquals(viewButtonColumn , "View");

    }
}
