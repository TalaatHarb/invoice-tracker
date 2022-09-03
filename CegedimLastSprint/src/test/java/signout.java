import BrowserActions.BrowserActions;
import org.testng.annotations.Test;

public class signout {
    @Test
    public static void signOut() throws InterruptedException {
        BrowserActions.newDriver("chrome");
        BrowserActions.getDriver();
        BrowserActions.maximize();
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/login");
        BrowserActions.search("name", "email", "boogado1@yahoo.com");
        BrowserActions.searchWithEnter("name","password","awad36148");
        Thread.sleep(2000);
        BrowserActions.navigate("https://invoice-tracker-frontend.herokuapp.com/hr/allEmployees");
        BrowserActions.click("xpath","/html/body/div/div[1]/nav/div/div/div/div/div[1]/button");
        BrowserActions.click("xpath","/html/body/div/div[1]/nav/div/div/div/div/div[2]/button");
    }
}
