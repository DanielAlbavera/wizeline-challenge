const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const cartPage = require('../pageobjects/cart.page');
const productPage = require("../pageobjects/product.page");
const checkoutStep1 = require("../pageobjects/checkout-step1.page");
const checkoutOverview = require("../pageobjects/checkout-overview.page");
const checkoutComplete = require("../pageobjects/checkout-complete.page");
const dataProvider = require("../data/data-provider");

describe("Complete a purchase.", () => {
    //Expected: Validate the user navigates to the order confirmation page.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'Sauce Labs Backpack' Product", async () => {
        await inventoryPage.clickProductByName(dataProvider.getProduct2);
    });

    it("5.- Validate 'Sauce Labs Backpack' Product Page is displayed ", async () => {
        await expect(productPage.title).toBeExisting;
        await expect(productPage.title).toHaveText(dataProvider.getProduct2);
    });

    it("6.- Click on the 'cart' Button", async () => {
       await inventoryPage.clickElement(inventoryPage.cartButton); 
    });

    it("7.- Validate that the 'Cart' Page is displayed", async () => {
        await expect(cartPage.checkoutButton).toBeExisting();
    });

    it("8.- Click on 'CHECKOUT' Button", async () => {
        await cartPage.clickCheckout();
    });

    it("9.- Validate that the 'CHECKOUT: YOUR INFORMATION' Page is displayed'", async () => {
        await expect(checkoutStep1.continueButton).toBeExisting();
    });

    it("10.- Insert 'First Name', 'Last Name', and 'Zip Code'", async () => {
        await checkoutStep1.insertClientInformation(dataProvider.checkoutName, dataProvider.checkoutLastName, dataProvider.checkoutZipCode);        
    });

    it("11.- Click on 'CONTINUE' Button", async () => {
        await checkoutStep1.clickContinue();
    });

    it("12.- Validate that the 'CHECKOUT: OVERVIEW' Page is displayed", async () => {
        await expect(checkoutOverview.finishButton).toBeExisting();
    });

    it("13.- Click on 'FINISH' Button", async () => {
        await checkoutOverview.clickFinish();
    });

    it("14.- Validate that the 'CHECKOUT: COMPLETE' Page is displayed", async () => {
        await expect(checkoutComplete.backHomeButton).toBeExisting();
    });

});