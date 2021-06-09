const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const dataProvider = require("../data/data-provider");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default

describe("Login with a valid user.", () => {
    //Expected: Validate the user navigates to the products page when logged in.
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature("Login");
        addDescription("Open 'Swag Labs' Page");
        await loginPage.open();        
    });
    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature("Login");
        addDescription("Login with a valid 'username' and 'password'");
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);        
    });
    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature("Login");
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(inventoryPage.burgerMenu).toBeExisting();
    })
});