const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const productPage = require("../pageobjects/product.page");
const dataProvider = require("../data/data-provider");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default

describe("Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.", () => {
    //Expected: Validate the correct product was added to the cart.
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature("Add specific product");
        addDescription("Open 'Swag Labs' Page");
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature("Add specific product");
        addDescription("");
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature("Add specific product");
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'Sauce Labs Onesie' Product", async () => {
        addFeature("Add specific product");
        addDescription("Click on the 'Sauce Labs Onesie' Product");
        await inventoryPage.clickProductByName(dataProvider.getProduct);
    });

    it("5.- Validate 'Sauce Labs Onesie' Product Page is displayed", async () => {
        addFeature("Add specific product");
        addDescription("Validate 'Sauce Labs Onesie' Product Page is displayed");
        await expect(productPage.title).toBeExisting;
        await expect(productPage.title).toHaveText(dataProvider.getProduct);
    });
});