const loginPage = require("../pageobjects/login.page");
const dataProvider = require("../data/data-provider");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default


describe("Login with an invalid user.", async () => {
    //Expected: Validate error message is displayed.
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature("Invalid Login");
        addDescription("Open 'Swag Labs' Page");
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature("Invalid Login");
        addDescription("Login with a valid 'username' and 'password'");
        await loginPage.login(dataProvider.getUsername, dataProvider.getInvalidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature("Invalid Login");
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(loginPage.errorMessage).toHaveText(dataProvider.getErrorMessage);
    });
});