const loginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const cartPage = require('../pageobjects/cart.page');
const dataProvider = require("../data/data-provider");
const productPage = require("../pageobjects/product.page");
const checkoutStep1 = require("../pageobjects/checkout-step1.page");
const checkoutOverview = require("../pageobjects/checkout-overview.page");
const checkoutComplete = require("../pageobjects/checkout-complete.page");
const assert = require("assert");

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

describe("Add multiple items to the shopping cart.", () => {
    //Expected: Validate all the items that have been added to the shopping cart.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Add multiple items to the shopping cart", async () => {
        for (let i = 0; i < inventoryPage.addToCartButtons; i++) {
           await inventoryPage.addToCartButtons[0].waitForClickable();
           await inventoryPage.addToCartButtons[0].click();
        }
    });

    it("5.- Validate all the items have been added to the shopping cart", async () => {
        inventoryPage.clickElement(inventoryPage.cartButton);
        expect(cartPage.checkoutButton).toBeExisting();
        expect(cartPage.cartItems).toBeElementsArrayOfSize(6);
    });

});


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


describe("Complete a purchase.", () => {
    //Expected: Validate the user navigates to the order confirmation page.
    it("1.- Open 'Swag Labs' Page", async () => {
        await loginPage.open();                
    });

    it("2.- Login with a valid 'username' and 'password'", async () => {
        await loginPage.login(dataProvider.getUsername, dataProvider.getValidPassword);
    });

    it("3.- Validate 'Inventory Page' is displayed", async () => {
        await expect(inventoryPage.burgerMenu).toBeExisting();
    });

    it("4.- Click on the 'Sauce Labs Backpack' Product", async () => {
        await inventoryPage.clickProductByName(dataProvider.getProduct2);
    });

    it("5.- Validate 'Sauce Labs Backpack' Product Page is displayed ", async () => {
        await expect(productPage.title).toBeExisting;
        await expect(productPage.title).toHaveText(dataProvider.getProduct2);
    });

    it("6.- Click on the 'cart' Button", async () => {
       await inventoryPage.clickElement(inventoryPage.cartButton); 
    });

    it("7.- Validate that the 'Cart' Page is displayed", async () => {
        await expect(cartPage.checkoutButton).toBeExisting();
    });

    it("8.- Click on 'CHECKOUT' Button", async () => {
        await cartPage.clickCheckout();
    });

    it("9.- Validate that the 'CHECKOUT: YOUR INFORMATION' Page is displayed'", async () => {
        await expect(checkoutStep1.continueButton).toBeExisting();
    });

    it("10.- Insert 'First Name', 'Last Name', and 'Zip Code'", async () => {
        await checkoutStep1.insertClientInformation(dataProvider.checkoutName, dataProvider.checkoutLastName, dataProvider.checkoutZipCode);        
    });

    it("11.- Click on 'CONTINUE' Button", async () => {
        await checkoutStep1.clickContinue();
    });

    it("12.- Validate that the 'CHECKOUT: OVERVIEW' Page is displayed", async () => {
        await expect(checkoutOverview.finishButton).toBeExisting();
    });

    it("13.- Click on 'FINISH' Button", async () => {
        await checkoutOverview.clickFinish();
    });

    it("14.- Validate that the 'CHECKOUT: COMPLETE' Page is displayed", async () => {
        await expect(checkoutComplete.backHomeButton).toBeExisting();
    });

});