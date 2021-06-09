const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const productPage = require("../pageobjects/product.page");
const dataProvider = require("../data/data-provider");

describe("Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.", () => {
    //Expected: Validate the correct product was added to the cart.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'Sauce Labs Onesie' Product", async () => {
        await inventoryPage.clickProductByName(dataProvider.getProduct);
    });

    it("5.- Validate 'Sauce Labs Onesie' Product Page is displayed ", async () => {
        await expect(productPage.title).toBeExisting;
        await expect(productPage.title).toHaveText(dataProvider.getProduct);
    });
});