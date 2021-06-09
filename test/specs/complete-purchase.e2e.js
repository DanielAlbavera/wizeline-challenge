const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const cartPage = require('../pageobjects/cart.page');
const productPage = require("../pageobjects/product.page");
const checkoutStep1 = require("../pageobjects/checkout-step1.page");
const checkoutOverview = require("../pageobjects/checkout-overview.page");
const checkoutComplete = require("../pageobjects/checkout-complete.page");
const dataProvider = require("../data/data-provider");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default

describe("Complete a purchase.", () => {
    //Expected: Validate the user navigates to the order confirmation page.
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature("Complete a purchase");
        addDescription("");
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature("Complete a purchase");
        addDescription("");
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature("Complete a purchase");
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'Sauce Labs Backpack' Product", async () => {
        addFeature("Complete a purchase");
        addDescription("Click on the 'Sauce Labs Backpack' Product");
        await inventoryPage.clickProductByName(dataProvider.getProduct2);
    });

    it("5.- Validate 'Sauce Labs Backpack' Product Page is displayed", async () => {
        addFeature("Complete a purchase");
        addDescription("Validate 'Sauce Labs Backpack' Product Page is displayed");
        await expect(productPage.title).toBeExisting;
        await expect(productPage.title).toHaveText(dataProvider.getProduct2);
    });

    it("6.- Click on the 'cart' Button", async () => {
        addFeature("Complete a purchase");
        addDescription("Click on the 'cart' Button");
       await inventoryPage.clickElement(inventoryPage.cartButton); 
    });

    it("7.- Validate that the 'Cart' Page is displayed", async () => {
        addFeature("Complete a purchase");
        addDescription("Validate that the 'Cart' Page is displayed");
        await expect(cartPage.checkoutButton).toBeExisting();
    });

    it("8.- Click on 'CHECKOUT' Button", async () => {
        addFeature("Complete a purchase");
        addDescription("Click on 'CHECKOUT' Button");
        await cartPage.clickCheckout();
    });

    it("9.- Validate that the 'CHECKOUT: YOUR INFORMATION' Page is displayed'", async () => {
        addFeature("Complete a purchase");
        addDescription("Validate that the 'CHECKOUT: YOUR INFORMATION' Page is displayed'");
        await expect(checkoutStep1.continueButton).toBeExisting();
    });

    it("10.- Insert 'First Name', 'Last Name', and 'Zip Code'", async () => {
        addFeature("Complete a purchase");
        addDescription("Insert 'First Name', 'Last Name', and 'Zip Code'");
        await checkoutStep1.insertClientInformation(dataProvider.checkoutName, dataProvider.checkoutLastName, dataProvider.checkoutZipCode);        
    });

    it("11.- Click on 'CONTINUE' Button", async () => {
        addFeature("Complete a purchase");
        addDescription("Click on 'CONTINUE' Button");
        await checkoutStep1.clickContinue();
    });

    it("12.- Validate that the 'CHECKOUT: OVERVIEW' Page is displayed", async () => {
        addFeature("Complete a purchase");
        addDescription("Validate that the 'CHECKOUT: OVERVIEW' Page is displayed");
        await expect(checkoutOverview.finishButton).toBeExisting();
    });

    it("13.- Click on 'FINISH' Button", async () => {
        addFeature("Complete a purchase");
        addDescription("Click on 'FINISH' Button");
        await checkoutOverview.clickFinish();
    });

    it("14.- Validate that the 'CHECKOUT: COMPLETE' Page is displayed", async () => {
        addFeature("Complete a purchase");
        addDescription("Validate that the 'CHECKOUT: COMPLETE' Page is displayed");
        await expect(checkoutComplete.backHomeButton).toBeExisting();
    });

});