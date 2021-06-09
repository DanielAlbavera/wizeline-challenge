const Page = require('./page');

class CheckoutOverviewPage extends Page {

    get finishButton () { return $('#finish') }

    async clickFinish() {
        await (await this.finishButton).waitForClickable();
        await (await this.finishButton).click()
    }

}

module.exports = new CheckoutOverviewPage();