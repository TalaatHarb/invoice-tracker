package Drivers;

import org.openqa.selenium.SessionNotCreatedException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;


public class DriverSingleton {
    public static String chromePath = "src/main/resources/chrome2.exe";
    public static String edgePath = "src/main/resources/msedgedriver.exe";
    public static String fireFoxPath = "src/main/resources/geckodriver.exe";
    public static WebDriver driver;

    public static WebDriver getDriver() {
        return driver;
    }

    public static void setDriver(String browserType) {
        switch (browserType.toLowerCase())
        {
            case "chrome":{
                try {
                    System.out.println("Quitting Chrome incase is already opened ");
                    driver.quit();
                }
                catch (Exception ignored) {
                }
                System.out.println("Opening Chrome");
                System.setProperty("webdriver.chrome.driver", chromePath);
                ChromeOptions options = new ChromeOptions();
                options.addArguments("ignore-certificate-errors");
                options.addArguments("--lang=en");
                driver = new ChromeDriver(options);
                break;
            }
            case "firefox":{
                try {
                    System.out.println("Quitting firefox incase is already opened ");
                    driver.quit();
                }
                catch (Exception ignored) {
                }
                System.out.println("Opening firefox ...");
                System.setProperty("webdriver.gecko.driver", fireFoxPath);
                FirefoxOptions options = new FirefoxOptions();
                options.addArguments("--lang=en");
                driver = new FirefoxDriver(options);
                break;
            }
            case "edge":{
                try {
                    System.out.println("Quitting edge incase is already opened ");
                    driver.quit();
                }
                catch (Exception ignored) {
                }
                try {
                    System.out.println("Opening edge ...");
                    System.setProperty("webdriver.edge.driver", edgePath);
                    EdgeOptions options = new EdgeOptions();
                    options.addArguments("use-fake-ui-for-media-stream");
                    options.addArguments("lang=en-GB");
                    driver = new EdgeDriver(options);
                } catch (SessionNotCreatedException ex) {
                    ex.printStackTrace();
                }
                break;
            }
        }

    }




}

