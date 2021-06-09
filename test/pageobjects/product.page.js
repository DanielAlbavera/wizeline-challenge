const Page = require('./page');

class ProductPage extends Page {

    get title () { return $('//*[@class="inventory_details_name large_size"]') }
    get price () { return $('//*[@class="inventory_details_price"]') }
    get addToCartButton () { return $('#add-to-cart-sauce-labs-onesie') }

}

module.exports = new ProductPage();