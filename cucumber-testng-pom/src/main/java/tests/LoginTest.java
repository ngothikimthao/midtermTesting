package tests;

import runner.TestRunner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pages.LoginPage;

/**
 * Created by nththuy on 12/31/19.
 */
public class LoginTest extends TestRunner {


    @Given("Open website (.*)$")
    public void user_already_on_home_page(String website) {
        TestRunner.driver.get(website);
        TestRunner.driver.manage().window().maximize();

    }

    @When("^I input username as (.*) and password as (.*)$")
    public void select_first_item(String username, String password) {

        //     LoginPage loginPage = new LoginPage(TestRunner.driver);
        LoginPage loginPage = PageFactory.initElements(TestRunner.driver, LoginPage.class);
        loginPage.setUsername(username);
        loginPage.setPassword(password);
    }

    @Then("^I click submit$")
    public void select_second_item() {

    }

    @Then("^I verify system navigates to the dashboard page")
    public void add_new_item() {

    }


}
