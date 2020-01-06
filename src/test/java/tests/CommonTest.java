package tests;

import cucumber.api.java.en.When;
import runner.TestRunner;

public class CommonTest {

    @When("^Open website (.*)$")
    public void user_already_on_home_page(String website) throws InterruptedException {
        Thread.sleep(1000);
        TestRunner.driver.get(website);
        TestRunner.driver.manage().window().maximize();
    }

}
