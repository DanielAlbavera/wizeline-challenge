const Page = require('./page');

class CartPage extends Page {

    get checkoutButton () { return $('#checkout') }
    get cartItems () { return $('//div[@class="cart_item"]') }

    async clickCheckout() {
        await (await this.checkoutButton).waitForClickable();
        await (await this.checkoutButton).click();
    }
}

module.exports = new CartPage();