package InvoiceFilter;

import BrowserActions.BrowserActions;
import io.cucumber.java.After;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions
        (
                monochrome = true,
                features={"./src/test/java/InvoiceFilter/Filter.feature"}
        )

public class testRunner extends AbstractTestNGCucumberTests {
    @After
    public void endSession(){
        BrowserActions.closeBrowser();
    }
}
