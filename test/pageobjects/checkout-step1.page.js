const Page = require('./page');

class CheckoutStep1 extends Page {

    get firstName () { return $('#first-name') }
    get lastName () { return $('#last-name') }
    get zipCode () { return $('#postal-code') }
    get continueButton () { return $('#continue') }

    async insertClientInformation(name, last, zip) {
        await (await this.firstName).setValue(name);
        await (await this.lastName).setValue(last);
        await (await this.zipCode).setValue(zip);
    }

    async clickContinue() {
        await (await this.continueButton).scrollIntoView();
        await (await this.continueButton).waitForClickable();
        await (await this.continueButton).click();
    }

}

module.exports = new CheckoutStep1();