package com.tutorialsninja.sw6.cucumber.steps;
import com.tutorialsninja.sw6.cucumber.pages.LaptopAndNotebookPage;
import com.tutorialsninja.sw6.cucumber.pages.HomePage;
import com.tutorialsninja.sw6.cucumber.pages.ProductPage;
import com.tutorialsninja.sw6.cucumber.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LaptopsAndNotebooksTestSteps {

    @When("^I mouse hover on 'Laptops and notebooks' link and click$")
    public void iMouseHoverOnLaptopsAndNotebooksLinkAndClick() {
        new HomePage().mouseHoverOnLaptopsAndNotebooksLinkAndClick();
    }


    @Then("^I verify products are arranged in reverse order$")
    public void iVerifyProductsAreArrangedInReverseOrder() {
        // Get all the products price and stored into array list
        List<Double> originalProductsPrice = new LaptopAndNotebookPage().getProductsPriceList();
        // Sort By Reverse order
        Collections.sort(originalProductsPrice, Collections.reverseOrder());
        // Select sort by Price (High > Low)
        new LaptopAndNotebookPage().selectSortByOption("Price (High > Low)");
        // After filter Price (High > Low) Get all the products name and stored into array list
        ArrayList<Double> afterSortByPrice =  new LaptopAndNotebookPage().getProductsPriceList();
        Assert.assertEquals(originalProductsPrice, afterSortByPrice, "Product not sorted by price High to Low");
    }

    @And("^I select product by name \"([^\"]*)\" on laptops and notebooks page$")
    public void iSelectProductByNameOnLaptopsAndNotebooksPage(String productName)  {
       new LaptopAndNotebookPage().selectProductByName(productName);
    }
    @Then("^I verify product success message$")
    public void iVerifyProductSuccessMessageAs( )  {
        String expectedMessage = "Success: You have added MacBook to your shopping cart!\n" +
                "×";
        String actualMessage = new ProductPage().getProductAddedSuccessMessage();
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @When("^I change the quantity as \"([^\"]*)\"$")
    public void iChangeTheQuantityAs(String qty)  {
        new ShoppingCartPage().changeQuantity(qty);
    }

    @And("^I click on 'Update button' for quantity button$")
    public void iClickOnUpdateButtonForQuantityButton() {
        new ShoppingCartPage().clickOnQtyUpdateButton();
    }

    @Then("^I verify the success modification message as \"([^\"]*)\"$")
    public void iVerifyTheSuccessModificationMessageAs(String expectedMessage)  {
        String actualMessage = new ShoppingCartPage().getSuccessModifiedMessage();
        Assert.assertTrue(actualMessage.contains(expectedMessage));
    }
}
