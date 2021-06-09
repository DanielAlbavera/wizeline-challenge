const Page = require('./page');

class ChecoutCompletePage extends Page {

    get backHomeButton () { return $('#back-to-products') }

}

module.exports = new ChecoutCompletePage();