$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accountloginpagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login Page",
  "description": "As a user I want to check Account login page functionality",
  "id": "account-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7505859300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to login page successfully",
  "description": "",
  "id": "account-login-page;verify-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027MyAccountTab\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Login\" option from my accounts dropdown list",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify \"Returning Customer\" text on account login page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 275638500,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnMyAccountTabLink()"
});
formatter.result({
  "duration": 154609600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iSelectOptionFromMyAccountsDropdownList(String)"
});
formatter.result({
  "duration": 658032500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iVerifyTextOnAccountLoginPage(String)"
});
formatter.result({
  "duration": 171058200,
  "status": "passed"
});
formatter.after({
  "duration": 811764400,
  "status": "passed"
});
formatter.before({
  "duration": 5159489800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that user should login and logout successfully",
  "description": "",
  "id": "account-login-page;verify-that-user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027MyAccountTab\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Login\" option from my accounts dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter email address as \"karan25johar@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password as \"9081811670@Dv\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027MyAccountTab\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select option from My account options as \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify \"Account Logout\" text on account page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 88800,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnMyAccountTabLink()"
});
formatter.result({
  "duration": 97308400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iSelectOptionFromMyAccountsDropdownList(String)"
});
formatter.result({
  "duration": 523182300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karan25johar@gmail.com",
      "offset": 26
    }
  ],
  "location": "AccountLoginTestSteps.iEnterEmailAddressAs(String)"
});
formatter.result({
  "duration": 188296000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 21
    }
  ],
  "location": "AccountLoginTestSteps.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 168306300,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1358902900,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnMyAccountTabLink()"
});
formatter.result({
  "duration": 71774300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 44
    }
  ],
  "location": "AccountLoginTestSteps.iSelectOptionFromMyAccountOptionsAs(String)"
});
formatter.result({
  "duration": 797968400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iVerifyTextOnAccountPage(String)"
});
formatter.result({
  "duration": 43956500,
  "status": "passed"
});
formatter.after({
  "duration": 743248400,
  "status": "passed"
});
formatter.uri("accountregisterpagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Account Register Page",
  "description": "As a user I want to check Account register page functionality",
  "id": "account-register-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5111362600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to login page successfully",
  "description": "",
  "id": "account-register-page;verify-user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027MyAccountTab\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select \"Register\" option from my accounts dropdown list",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify \"Register Account\" text on account register page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnMyAccountTabLink()"
});
formatter.result({
  "duration": 109812900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iSelectOptionFromMyAccountsDropdownList(String)"
});
formatter.result({
  "duration": 840396100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 10
    }
  ],
  "location": "AccountRegisterTestSteps.iVerifyTextOnAccountRegisterPage(String)"
});
formatter.result({
  "duration": 52874300,
  "status": "passed"
});
formatter.after({
  "duration": 812400100,
  "status": "passed"
});
formatter.before({
  "duration": 4928068900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that user should login and logout successfully",
  "description": "",
  "id": "account-register-page;verify-that-user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on \u0027MyAccountTab\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I select \"Register\" option from my accounts dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter first name as \"Karunaa\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter last name as \"Koradiya\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter email as \"karun28virani@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter telephone as \"07436252668\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter password as \"9081811670@Dv\" on account register page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter confirm password as \"9081811670@Dv\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select subscription as \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \u0027Privacy Policy\u0027 checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \u0027Continue\u0027 button on account register page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify account created text \"Your Account Has Been Created!\"  on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on \u0027Continue\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on \u0027MyAccountTab\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select option from My account options as \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify \"Account Logout\" text on account page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on \u0027Continue\u0027 button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnMyAccountTabLink()"
});
formatter.result({
  "duration": 91853200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iSelectOptionFromMyAccountsDropdownList(String)"
});
formatter.result({
  "duration": 805026100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karunaa",
      "offset": 23
    }
  ],
  "location": "AccountRegisterTestSteps.iEnterFirstNameAs(String)"
});
formatter.result({
  "duration": 137960100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Koradiya",
      "offset": 22
    }
  ],
  "location": "AccountRegisterTestSteps.iEnterLastNameAs(String)"
});
formatter.result({
  "duration": 142899100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karun28virani@gmail.com",
      "offset": 18
    }
  ],
  "location": "AccountRegisterTestSteps.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 168859200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07436252668",
      "offset": 22
    }
  ],
  "location": "AccountRegisterTestSteps.iEnterTelephoneAs(String)"
});
formatter.result({
  "duration": 129440400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 21
    }
  ],
  "location": "AccountRegisterTestSteps.iEnterPasswordAsOnAccountRegisterPage(String)"
});
formatter.result({
  "duration": 110929700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9081811670@Dv",
      "offset": 29
    }
  ],
  "location": "AccountRegisterTestSteps.iEnterConfirmPasswordAs(String)"
});
formatter.result({
  "duration": 129848600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 26
    }
  ],
  "location": "AccountRegisterTestSteps.iSelectSubscriptionAs(String)"
});
formatter.result({
  "duration": 61003700,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterTestSteps.iClickOnPrivacyPolicyCheckbox()"
});
formatter.result({
  "duration": 96538900,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterTestSteps.iClickOnContinueButtonOnAccountRegisterPage()"
});
formatter.result({
  "duration": 1294947900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 31
    }
  ],
  "location": "AccountRegisterTestSteps.iVerifyAccountCreatedTextOnAccountPage(String)"
});
formatter.result({
  "duration": 71229100,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 456100000,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnMyAccountTabLink()"
});
formatter.result({
  "duration": 75636000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 44
    }
  ],
  "location": "AccountLoginTestSteps.iSelectOptionFromMyAccountOptionsAs(String)"
});
formatter.result({
  "duration": 769207500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 10
    }
  ],
  "location": "AccountLoginTestSteps.iVerifyTextOnAccountPage(String)"
});
formatter.result({
  "duration": 40556900,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginTestSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 493856400,
  "status": "passed"
});
formatter.after({
  "duration": 811574900,
  "status": "passed"
});
formatter.uri("desktopspagetest.feature");
formatter.feature({
  "line": 1,
  "name": "Desktops Page",
  "description": "As a user I want to check Desktops page functionality",
  "id": "desktops-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4437972400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify product arranged in alphabetical order",
  "description": "",
  "id": "desktops-page;verify-product-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select currency as \"£Pound Sterling\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \u0027Desktops\u0027 link and click",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select menu as \"Show AllDesktops\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select sort by option as \"Name (Z - A)\" on desktops page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify elements are sorted in reverse order",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 22
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectCurrencyAs(String)"
});
formatter.result({
  "duration": 846705200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iMouseHoverOnDesktopsLinkAndClick()"
});
formatter.result({
  "duration": 215181000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 1663304300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 28
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectSortByOptionAsOnDesktopsPage(String)"
});
formatter.result({
  "duration": 546613600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iVerifyElementsAreSortedInReverseOrder()"
});
formatter.result({
  "duration": 272354400,
  "status": "passed"
});
formatter.after({
  "duration": 740096300,
  "status": "passed"
});
formatter.before({
  "duration": 4821965600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify product added to shopping cart successfully",
  "description": "",
  "id": "desktops-page;verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I select currency as \"£Pound Sterling\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on \u0027Desktops\u0027 link and click",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select menu as \"Show AllDesktops\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select sort by option as \"Name (A - Z)\" on desktops page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product by name as \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify product text as \"HP LP3065\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select delivery date as \"30\",\"November\",\"2023\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter quantity as \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on \u0027Add to cart\u0027 button to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify product success message for desktop",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on \u0027Shopping cart\u0027 link into message",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I verify \"Shopping Cart\" text on cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify product name as \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify delivery date as \"2023-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify model as \"Product 21\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify price as \"£74.73\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 22
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectCurrencyAs(String)"
});
formatter.result({
  "duration": 908077000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iMouseHoverOnDesktopsLinkAndClick()"
});
formatter.result({
  "duration": 184022900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 958325300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 28
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectSortByOptionAsOnDesktopsPage(String)"
});
formatter.result({
  "duration": 527856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 29
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectProductByNameAs(String)"
});
formatter.result({
  "duration": 1638004100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 26
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyProductTextAs(String)"
});
formatter.result({
  "duration": 59301800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 27
    },
    {
      "val": "November",
      "offset": 32
    },
    {
      "val": "2023",
      "offset": 43
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectDeliveryDateAs(String,String,String)"
});
formatter.result({
  "duration": 8630200700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "DesktopsPageTestSteps.iEnterQuantityAs(String)"
});
formatter.result({
  "duration": 175872300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iClickOnAddToCartButtonToShoppingCart()"
});
formatter.result({
  "duration": 90185500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iVerifyProductSuccessMessageAs()"
});
formatter.result({
  "duration": 620598100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iClickOnShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 1473802800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 10
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyTextOnCartPage(String)"
});
formatter.result({
  "duration": 67511300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 26
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyProductNameAs(String)"
});
formatter.result({
  "duration": 28195100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023-11-30",
      "offset": 27
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyDeliveryDateAs(String)"
});
formatter.result({
  "duration": 31923900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 19
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyModelAs(String)"
});
formatter.result({
  "duration": 19631900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 19
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyPriceAs(String)"
});
formatter.result({
  "duration": 22611000,
  "status": "passed"
});
formatter.after({
  "duration": 786684000,
  "status": "passed"
});
formatter.uri("laptopsandnotebookstest.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and Notebooks page",
  "description": "As a user I want to check laptops and notebooks page functionality",
  "id": "laptops-and-notebooks-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4670107800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify products price display high to low successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;verify-products-price-display-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027Laptops and notebooks\u0027 link and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select menu as \"Show AllLaptops \u0026 Notebooks\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by option as \"Price (High \u003e Low)\" on desktops page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify products are arranged in reverse order",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 64400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.iMouseHoverOnLaptopsAndNotebooksLinkAndClick()"
});
formatter.result({
  "duration": 177303000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 84641451700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 28
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectSortByOptionAsOnDesktopsPage(String)"
});
formatter.result({
  "duration": 24915600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.id: input-sort\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:46)\r\n\tat com.tutorialsninja.sw6.cucumber.utility.Utility.selectByVisibleTextFromDropDown(Utility.java:148)\r\n\tat com.tutorialsninja.sw6.cucumber.pages.DesktopPage.selectSortByOption(DesktopPage.java:78)\r\n\tat com.tutorialsninja.sw6.cucumber.steps.DesktopsPageTestSteps.iSelectSortByOptionAsOnDesktopsPage(DesktopsPageTestSteps.java:27)\r\n\tat ✽.And I select sort by option as \"Price (High \u003e Low)\" on desktops page(laptopsandnotebookstest.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.iVerifyProductsAreArrangedInReverseOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11788500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8ac8ca46f0a6c12876b4be2fce7d91f8, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\hardi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55087}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55087/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ac8ca46f0a6c12876b4be2fce7d91f8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.tutorialsninja.sw6.cucumber.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.tutorialsninja.sw6.cucumber.steps.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 5465726700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that user place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I mouse hover on \u0027Laptops and notebooks\u0027 link and click",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select menu as \"Show AllLaptops \u0026 Notebooks\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select sort by option as \"Price (High \u003e Low)\" on desktops page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select product by name \"MacBook\" on laptops and notebooks page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify product text as \"MacBook\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \u0027Add to cart\u0027 button to shopping cart",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verify product success message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click on \u0027Shopping cart\u0027 link into message",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I verify \"Shopping Cart\" text on cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I verify product name as \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I change the quantity as \"2\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I click on \u0027Update button\u0027 for quantity button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the success modification message as \"Success: You have modified your shopping cart!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I verify price as \"$1,204.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.iMouseHoverOnLaptopsAndNotebooksLinkAndClick()"
});
formatter.result({
  "duration": 222471900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 814400900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 28
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectSortByOptionAsOnDesktopsPage(String)"
});
formatter.result({
  "duration": 1101280100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.iSelectProductByNameOnLaptopsAndNotebooksPage(String)"
});
formatter.result({
  "duration": 1878459400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyProductTextAs(String)"
});
formatter.result({
  "duration": 47525600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iClickOnAddToCartButtonToShoppingCart()"
});
formatter.result({
  "duration": 147663200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.iVerifyProductSuccessMessageAs()"
});
formatter.result({
  "duration": 293015500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iClickOnShoppingCartLinkIntoMessage()"
});
formatter.result({
  "duration": 1423383500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 10
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyTextOnCartPage(String)"
});
formatter.result({
  "duration": 58906300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyProductNameAs(String)"
});
formatter.result({
  "duration": 43969500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.iChangeTheQuantityAs(String)"
});
formatter.result({
  "duration": 170944200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.iClickOnUpdateButtonForQuantityButton()"
});
formatter.result({
  "duration": 771701800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart!",
      "offset": 46
    }
  ],
  "location": "LaptopsAndNotebooksTestSteps.iVerifyTheSuccessModificationMessageAs(String)"
});
formatter.result({
  "duration": 46456300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,204.00",
      "offset": 19
    }
  ],
  "location": "DesktopsPageTestSteps.iVerifyPriceAs(String)"
});
formatter.result({
  "duration": 41518000,
  "status": "passed"
});
formatter.after({
  "duration": 840480500,
  "status": "passed"
});
formatter.uri("topmenutest.feature");
formatter.feature({
  "line": 1,
  "name": "Top menu test",
  "description": "As a user I want to check Top menu functionality",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4843850600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to desktops page successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on \u0027Desktops\u0027 link and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select menu as \"Show AllDesktops\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify the title as \"Desktops\" on desktops page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageTestSteps.iMouseHoverOnDesktopsLinkAndClick()"
});
formatter.result({
  "duration": 202964600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 1116468800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 23
    }
  ],
  "location": "TopMenuTestSteps.iVerifyTheTitleAsOnDesktopsPage(String)"
});
formatter.result({
  "duration": 50283600,
  "status": "passed"
});
formatter.after({
  "duration": 786260200,
  "status": "passed"
});
formatter.before({
  "duration": 4681675100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user should navigate to laptops and notebooks page successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \u0027Laptops and notebooks\u0027 link and click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select menu as \"Show AllLaptops \u0026 Notebooks\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the title as \"Laptops \u0026 Notebooks\" on laptops and notebooks page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestSteps.iMouseHoverOnLaptopsAndNotebooksLinkAndClick()"
});
formatter.result({
  "duration": 185985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 744073200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 23
    }
  ],
  "location": "TopMenuTestSteps.iVerifyTheTitleAsOnLaptopsAndNotebooksPage(String)"
});
formatter.result({
  "duration": 40174400,
  "status": "passed"
});
formatter.after({
  "duration": 833723500,
  "status": "passed"
});
formatter.before({
  "duration": 4772040600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user should navigate to components page successfully",
  "description": "",
  "id": "top-menu-test;verify-user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I mouse hover on \u0027Components\u0027 link and click",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select menu as \"Show AllComponents\" from top menu",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the title as \"Components\" on components page",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57300,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnComponentsLinkAndClick()"
});
formatter.result({
  "duration": 174586600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllComponents",
      "offset": 18
    }
  ],
  "location": "DesktopsPageTestSteps.iSelectMenuAsFromTopMenu(String)"
});
formatter.result({
  "duration": 733273500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 23
    }
  ],
  "location": "TopMenuTestSteps.iVerifyTheTitleAsOnComponentsPage(String)"
});
formatter.result({
  "duration": 42826100,
  "status": "passed"
});
formatter.after({
  "duration": 760934600,
  "status": "passed"
});
});