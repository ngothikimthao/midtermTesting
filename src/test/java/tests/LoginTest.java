package tests;


import cucumber.api.java.en.Then;

import static tests.PageProvider.getLoginPage;

public class LoginTest {

    @Then("^I input email as (.+) and password as (.+)")
    public void setUserInformation(String email, String password) throws InterruptedException {
        getLoginPage().setEmail(email);
        Thread.sleep(1000);
        getLoginPage().setPassword(password);
        Thread.sleep(1000);
    }

    @Then("^I click submit")
    public void clickLoginButton() throws InterruptedException {
        getLoginPage().clickLoginButton();
        Thread.sleep(1000);
    }

}
