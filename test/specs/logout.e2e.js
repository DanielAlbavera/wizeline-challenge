const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const dataProvider = require("../data/data-provider");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default

describe("Logout from the home page.", () => {
    //Expected: Validate the user navigates to the login page.    
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature('Logout');
        addDescription("Open 'Swag Labs' Page");
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature('Logout');
        addDescription("Login with a valid 'username' and 'password'");
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature('Logout');
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'burger menu' -> 'LOGOUT' Button", async () => {
        addFeature('Logout');
        addDescription("Click on the 'burger menu' -> 'LOGOUT' Button");
        await inventoryPage.logout();
    });

    it("5.- Validate 'Login Page' is displayed", async () => {
        addFeature('Logout');
        addDescription("Validate 'Login Page' is displayed");
        await expect(loginPage.btnSubmit).toBeExisting();
    });
});