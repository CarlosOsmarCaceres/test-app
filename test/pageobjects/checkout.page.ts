import { $ } from '@wdio/globals'

class CheckoutPage {
    // Carrito
    public get cartBadge() {
        return $('~cart badge')
    }

    public get proceedToCheckoutButton() {
        return $('~Proceed To Checkout button')
    }

    // Shipping
    public get shippingFullName() {
        return $('~Full Name* input field')
    }

    public get shippingAddressLine1() {
        return $('~Address Line 1* input field')
    }

    public get shippingCity() {
        return $('~City* input field')
    }

    public get shippingZipCode() {
        return $('~Zip Code* input field')
    }

    public get shippingCountry() {
        return $('~Country* input field')
    }

    public get toPaymentButton() {
        return $('~To Payment button')
    }

    // Payment
    public get paymentFullName() {
        return $('~Full Name* input field')
    }

    public get paymentCardNumber() {
        return $('~Card Number* input field')
    }

    public get paymentExpirationDate() {
        return $('~Expiration Date* input field')
    }

    public get paymentSecurityCode() {
        return $('~Security Code* input field')
    }

    public get reviewOrderButton() {
        return $('~Review Order button')
    }

    // Review / Success
    public get placeOrderButton() {
        return $('~Place Order button')
    }

    public get successMessage() {
        return $('android=new UiSelector().textContains("Checkout Complete")')
    }

    // Métodos
    public async goToCart() {
        await this.cartBadge.waitForDisplayed({ timeout: 20000 })
        await this.cartBadge.click()
    }

    public async proceedToCheckout() {
        await this.proceedToCheckoutButton.waitForDisplayed({ timeout: 20000 })
        await this.proceedToCheckoutButton.click()
    }

    public async fillShipping(
        name: string,
        address: string,
        city: string,
        zip: string,
        country: string
    ) {
        await this.shippingFullName.waitForDisplayed({ timeout: 20000 })
        await this.shippingFullName.clearValue()
        await this.shippingFullName.setValue(name)

        await this.shippingAddressLine1.waitForDisplayed({ timeout: 20000 })
        await this.shippingAddressLine1.clearValue()
        await this.shippingAddressLine1.setValue(address)

        await this.shippingCity.waitForDisplayed({ timeout: 20000 })
        await this.shippingCity.clearValue()
        await this.shippingCity.setValue(city)

        await this.shippingZipCode.waitForDisplayed({ timeout: 20000 })
        await this.shippingZipCode.clearValue()
        await this.shippingZipCode.setValue(zip)

        await this.shippingCountry.waitForDisplayed({ timeout: 20000 })
        await this.shippingCountry.clearValue()
        await this.shippingCountry.setValue(country)

        await this.toPaymentButton.waitForDisplayed({ timeout: 20000 })
        await this.toPaymentButton.click()
    }

    public async fillPayment(
        name: string,
        cardNumber: string,
        expiration: string,
        cvv: string
    ) {
        await this.paymentFullName.waitForDisplayed({ timeout: 20000 })
        await this.paymentFullName.clearValue()
        await this.paymentFullName.setValue(name)

        await this.paymentCardNumber.waitForDisplayed({ timeout: 20000 })
        await this.paymentCardNumber.clearValue()
        await this.paymentCardNumber.setValue(cardNumber)

        await this.paymentExpirationDate.waitForDisplayed({ timeout: 20000 })
        await this.paymentExpirationDate.clearValue()
        await this.paymentExpirationDate.setValue(expiration)

        await this.paymentSecurityCode.waitForDisplayed({ timeout: 20000 })
        await this.paymentSecurityCode.clearValue()
        await this.paymentSecurityCode.setValue(cvv)

        await this.reviewOrderButton.waitForDisplayed({ timeout: 20000 })
        await this.reviewOrderButton.click()
    }

    public async placeOrder() {
        await this.placeOrderButton.waitForDisplayed({ timeout: 20000 })
        await this.placeOrderButton.click()

        await this.successMessage.waitForDisplayed({ timeout: 20000 })
    }
}

export default new CheckoutPage()

