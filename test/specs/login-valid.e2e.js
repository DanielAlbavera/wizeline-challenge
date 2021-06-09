const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const dataProvider = require("../data/data-provider");

describe("Login with a valid user.", () => {
    //Expected: Validate the user navigates to the products page when logged in.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();        
    });
    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);        
    });
    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    })
});