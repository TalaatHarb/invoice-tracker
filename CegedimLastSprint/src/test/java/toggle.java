import BrowserActions.BrowserActions;
import io.cucumber.java.After;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class toggle {
    static String browserType = "chrome";
    static String loginPage = "https://invoice-tracker-frontend.herokuapp.com/login";
    static String email = "boogado1@yahoo.com";
    static String password = "awad36148";
    //FINISHEd
    @BeforeTest
    public static void ToggleAllisntclicked() throws InterruptedException {
        BrowserActions.newDriver(browserType);
        BrowserActions.getDriver();
        BrowserActions.maximize();
        BrowserActions.navigate(loginPage);
        BrowserActions.search("name", "email", email);
        BrowserActions.searchWithEnter("name","password",password);
        Thread.sleep(2000);
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/hr/allEmployees");
        // click on settings button
        BrowserActions.click("id", "headlessui-popover-button-:r4:");
        // click on toggle all
        BrowserActions.click("xpath","/html/body/div/div[1]/div/div[3]/div[1]/div/div/div/div[1]/label/input");
    }

    @Test
    public static void clickOnAllCheckboxes() {

        //click on all checkboxes and assert that all the columns are shown in the table
        BrowserActions.click("id", "SelectionSelector");
        BrowserActions.click("id", "Employee IdSelector");
        BrowserActions.click("id", "National IdSelector");
        BrowserActions.click("id", "English nameSelector");
        BrowserActions.click("id", "Arabic nameSelector");
        BrowserActions.click("id", "English addressSelector");
        BrowserActions.click("id", "Arabic addressSelector");
        BrowserActions.click("id", "Job titleSelector");
        BrowserActions.click("id", "Joining dateSelector");
        BrowserActions.click("id", "End dateSelector");
        BrowserActions.click("id", "Allowed balanceSelector");
        BrowserActions.click("id", "Remaining balanceSelector");
        BrowserActions.click("id", "BillableSelector");
        BrowserActions.click("id", "Is disabledSelector");
        BrowserActions.click("id", "TeamsSelector");
        BrowserActions.click("id", "FulltimeSelector");
        BrowserActions.click("id", "View employeesSelector");

        Assert.assertEquals(BrowserActions.gettext("/html/body/div[1]/div[1]/div/div[3]/div[2]/table/thead/tr/th[2]/div"), "Employee Id");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[3]/div"), "National Id");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[4]/div"), "English name");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[5]/div"), "Arabic name");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[6]/div"), "English Address");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[7]/div"), "Arabic address");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[8]/div"), "Job title");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[9]/div"), "Joining date");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[10]/div"), "End date");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[11]/div"), "Allowed balance");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[12]/div"), "Remaining balance");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[13]/div"), "Billable");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[14]/div"), "Is disabled");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[15]/div"), "Team Name");
        Assert.assertEquals(BrowserActions.gettext("/html/body/div/div[1]/div/div[3]/div[2]/table/thead/tr/th[16]/div"), "Fulltime");

    }

    @AfterTest
    public static void close(){
        BrowserActions.closeBrowser();
    }

}
