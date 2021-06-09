const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get burgerMenu () { return $('#react-burger-menu-btn') }
    get logoutButton () { return $('#logout_sidebar_link') }
    get dropdown () { return $('[class="product_sort_container"]') }
    get itemPrices () { return $('[class="inventory_item_price"]') }
    get addToCartButtons () { return $('[class="btn btn_primary btn_small btn_inventory"]') }
    get totalCartItems () { return $('[class="shopping_cart_badge"]') }
    get cartButton () { return $('[class="shopping_cart_link"]') }    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to logout to the Main Page
     */
     async logout() {        
        await (await this.burgerMenu).click();
        await (await this.logoutButton).waitForClickable();
        await (await this.logoutButton).click();
    }

    async selectByIndex(index) {
        await (await this.dropdown).waitForClickable();
        await (await this.dropdown).selectByIndex(index);
    }

    async getArrayPrices() {
        return this.itemPrices.map(element => parseFloat(element.wholeText.replace("$","")));
    }

    async getTextFromElement(element) {
        return element.getText();
    }

    async getIntegerNumber(element) {
        return parseInt(this.getTextFromElement(element));
    }


    async clickElement(element) {
        await (await element).waitForClickable();
        await (await element).click();
    }

    async clickProductByName(name) { 
        await (await $(`//div[contains(text(),"${name}")]`)).click();
    }

}

module.exports = new InventoryPage();
