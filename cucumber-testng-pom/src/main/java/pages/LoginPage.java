package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by nththuy on 12/31/19.
 */
public class LoginPage {
    private WebDriver driver;

    @FindBy(name = "email")
    WebElement email;

    @FindBy(name = "password")
    WebElement password;


    //Constructor
    public LoginPage(WebDriver driver) {
        this.driver = driver;

        //Initialise Elements
        PageFactory.initElements(driver, this);
    }


    public void setUsername(String username) {
        this.email.clear();
        this.email.sendKeys(username);
    }


    public void setPassword(String password) {
        this.password.clear();
        this.password.sendKeys(password);
    }
}
