const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const dataProvider = require("../data/data-provider");
const assert = require("assert");
const { addFeature,addDescription } = require('@wdio/allure-reporter').default

describe("Sort products by Price (low to high).", () => {
    //Expected: Validate the products have been sorted by price correctly
    it("1.- Open 'Swag Labs' Page", async () => {
        addFeature("Sort Products - Low to High");
        addDescription("Open 'Swag Labs' Page");
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        addFeature("Sort Products - Low to High");
        addDescription("Login with a valid 'username' and 'password'");
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        addFeature("Sort Products - Low to High");
        addDescription("Validate 'Inventory Page' is displayed");
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Select 'Price (low to high)' option in the 'sort dropdown'", async () => {
        addFeature("Sort Products - Low to High");
        addDescription("Select 'Price (low to high)' option in the 'sort dropdown'");
        await inventoryPage.selectByIndex(2);
    });

    it("5.- Validate that the products are sorded by 'low to high' price", async () => {
        addFeature("Sort Products - Low to High");
        addDescription("Validate that the products are sorded by 'low to high' price");
        expect(inventoryPage.itemPrices).toBeElementsArrayOfSize({gte: 1});        
        for (let i = 1; i < inventoryPage.itemPrices.lenght; i++) {
             assert(inventoryPage.itemPrices[i-1] <= inventoryPage.itemPrices[i]);
         }
    });

});