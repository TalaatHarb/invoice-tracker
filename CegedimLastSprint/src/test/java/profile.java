import BrowserActions.BrowserActions;
import io.cucumber.java.After;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class profile {
    static String browserType = "chrome";
    static String loginPage = "https://invoice-tracker-frontend.herokuapp.com/login";
    static String email = "boogado1@yahoo.com";
    static String password = "awad36148";

    static String employeeName = "Amr Essam";
     static String ID = "4";

@BeforeTest
    public static void searchForEmployee() throws InterruptedException {
        BrowserActions.newDriver(browserType);
        BrowserActions.getDriver();
        BrowserActions.maximize();
        BrowserActions.navigate(loginPage);
        BrowserActions.search("name", "email", email);
        BrowserActions.searchWithEnter("name","password",password);
        Thread.sleep(2000);
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/hr/allEmployees");

    BrowserActions.clickElement("id","headlessui-combobox-button-:r3:");
    Thread.sleep(2000);
    BrowserActions.clickElement("id","englishName");
    BrowserActions.search("xpath", "/html/body/div/div[1]/div/div[2]/input", employeeName);
    BrowserActions.click("id","apply");
    Thread.sleep(2000);
    }

@Test
    public static void navigateToEmployeeProfile() throws InterruptedException {
        BrowserActions.click("xpath","/html/body/div[1]/div[1]/div/div[3]/div[2]/table/tbody/tr/td[17]/div/a/button");
        Thread.sleep(2000);
        String url = BrowserActions.getUrl();
        Assert.assertEquals(url , "https://invoice-tracker-frontend.herokuapp.com/hr/employee/4");
}
    //@Test
    public static void AssertEmployeeIdInURL() throws InterruptedException {
    //FALSE
        Boolean idInUrl = BrowserActions.getUrl().contains(ID);
        Assert.assertEquals(idInUrl, true);
    }
    @Test
    public static void absenceHistory(){
        // show absence history box of the employee
    boolean request = BrowserActions.isElementPresent("className","shadow-lg");
    Assert.assertEquals(request, true);

    }

    @AfterTest
    public static void close(){
        BrowserActions.closeBrowser();
    }

}
