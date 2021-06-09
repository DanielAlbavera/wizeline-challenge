const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const dataProvider = require("../data/data-provider");

describe("Logout from the home page.", () => {
    //Expected: Validate the user navigates to the login page.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'burger menu' -> 'LOGOUT' Button", async () => {
        await inventoryPage.logout();
    });

    it("5.- Validate 'Login Page' is displayed", async () => {
        await expect(loginPage.btnSubmit).toBeExisting();
    });
});