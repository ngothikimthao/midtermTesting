package stepDefinitions;

import MyRunner.TestRunner;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

// Given Open select menu website https://demoqa.com/selectmenu/
//        When I select fast in the speed
//        Then I verify fast value is already selected in the speed
//        When I select Some unknown file in select file
//        Then I verify Some unknown file value is already selected in select file
//        When I select 4 in select a number
//        Then I verify 4 value is already selected in select a number
//        When I select Mrs. in select a title
//        Then I verify Mrs. value is already selected in select a title
public class selectMenuStepsDefinition extends TestRunner{
    @Given("^Open select menu website (.*)$")
    public void open_select_menu_website_https_demoqa_com_selectmenu(String website) {
        TestRunner.driver.get(website);
        TestRunner.driver.manage().window().maximize();
    }

    @When("^I select (.*)$ in the speed ")
    public void i_select_fast_in_the_speed(String speed) {
        Select speedDropdown = new Select(driver.findElement(By.id("speed")));

        speedDropdown.selectByVisibleText(speed);
    }

}
