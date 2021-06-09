const loginPage = require("../pageobjects/login.page");
const dataProvider = require("../data/data-provider");


describe("Login with an invalid user.", async () => {
    //Expected: Validate error message is displayed.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getInvalidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(loginPage.errorMessage).toHaveText(dataProvider.getErrorMessage);
    });
});