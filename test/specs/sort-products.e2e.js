const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const dataProvider = require("../data/data-provider");
const assert = require("assert");

describe("Sort products by Price (low to high).", () => {
    //Expected: Validate the products have been sorted by price correctly
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Select 'Price (low to high)' option in the 'sort dropdown'", async () => {
        await inventoryPage.selectByIndex(2);
    });

    it("5.- Validate that the products are sorded by 'low to high' price", async () => {
        expect(inventoryPage.itemPrices).toBeElementsArrayOfSize({gte: 1});        
        for (let i = 1; i < inventoryPage.itemPrices.lenght; i++) {
             assert(inventoryPage.itemPrices[i-1] <= inventoryPage.itemPrices[i]);
         }
    });

});