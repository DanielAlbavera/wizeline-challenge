const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const cartPage = require('../pageobjects/cart.page');
const dataProvider = require("../data/data-provider");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default

describe("Add multiple items to the shopping cart.", () => {
    //Expected: Validate all the items that have been added to the shopping cart.
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature("Add multiple items");
        addDescription("Open 'Swag Labs' Page");
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature("Add multiple items");
        addDescription("Login with a valid 'username' and 'password'");
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature("Add multiple items");
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Add multiple items to the shopping cart", async () => {
        addFeature("Add multiple items");
        addDescription("Add multiple items to the shopping cart");
        for (let i = 0; i < inventoryPage.addToCartButtons; i++) {
           await inventoryPage.addToCartButtons[0].waitForClickable();
           await inventoryPage.addToCartButtons[0].click();
        }
    });

    it("5.- Validate all the items have been added to the shopping cart", async () => {
        addFeature("Add multiple items");
        addDescription("Validate all the items have been added to the shopping cart");
        inventoryPage.clickElement(inventoryPage.cartButton);
        expect(cartPage.checkoutButton).toBeExisting();
        expect(cartPage.cartItems).toBeElementsArrayOfSize(6);
    });

});