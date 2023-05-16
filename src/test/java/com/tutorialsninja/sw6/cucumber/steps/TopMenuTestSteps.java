package com.tutorialsninja.sw6.cucumber.steps;

import com.tutorialsninja.sw6.cucumber.pages.ComponentsPage;
import com.tutorialsninja.sw6.cucumber.pages.DesktopPage;
import com.tutorialsninja.sw6.cucumber.pages.HomePage;
import com.tutorialsninja.sw6.cucumber.pages.LaptopAndNotebookPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TopMenuTestSteps {

    @Then("^I verify the title as \"([^\"]*)\" on desktops page$")
    public void iVerifyTheTitleAsOnDesktopsPage(String expectedTitle)  {
      String actualTitle =new DesktopPage().getDesktopsText();
        Assert.assertEquals(actualTitle,expectedTitle);
    }

    @Then("^I verify the title as \"([^\"]*)\" on laptops and notebooks page$")
    public void iVerifyTheTitleAsOnLaptopsAndNotebooksPage(String expectedTitle)  {
        String actualTitle =new LaptopAndNotebookPage().getLaptopsAndNotebooksText();
        Assert.assertEquals(actualTitle,expectedTitle);
    }

    @Then("^I verify the title as \"([^\"]*)\" on components page$")
    public void iVerifyTheTitleAsOnComponentsPage(String expectedTitle)  {
        String actualTitle =new ComponentsPage().getComponentsText();
        Assert.assertEquals(actualTitle,expectedTitle);
    }

    @When("^I mouse hover on 'Components' link and click$")
    public void iMouseHoverOnComponentsLinkAndClick() {
        new HomePage().mouseHoverOnComponentLinkAndClick();
    }
}
