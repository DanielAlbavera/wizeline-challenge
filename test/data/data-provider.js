const data = require("./test-data.json");

class DataProvider {

    get getUsername() { return data["swag-labs"]["login"]["username"] }
    get getValidPassword() { return data["swag-labs"]["login"]["valid-password"] }
    get getInvalidPassword() { return data["swag-labs"]["login"]["invalid-password"] } 
    get getErrorMessage() { return data["swag-labs"]["login"]["error-message"] }    
    get getDropdownLoHi() { return data["swag-labs"]["inventory"]["dropdown-options"]["lohi"] }
    get getProduct () { return data["swag-labs"]["inventory"]["product"] }
    get getProduct2 () { return data["swag-labs"]["inventory"]["product2"] }
    get checkoutName () { return data["swag-labs"]["checkout"]["name"] }
    get checkoutLastName () { return data["swag-labs"]["checkout"]["lastName"] }
    get checkoutZipCode () { return data["swag-labs"]["checkout"]["zipCode"] }
}

module.exports = new DataProvider();