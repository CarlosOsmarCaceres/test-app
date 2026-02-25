import { browser, expect } from '@wdio/globals'

import CatalogPage from '../pageobjects/catalog.page'
import ProductDetailPage from '../pageobjects/productDetail.page'
import CheckoutPage from '../pageobjects/checkout.page'
import LoginPage from '../pageobjects/login.page'

describe('Portafolio: ****** Flujo E2E de Compra ******', () => {
    const PRODUCTO_A_TESTEAR = 'Sauce Labs Backpack'

    it('test: 1. Debería agregar un producto al carrito', async () => {
        await CatalogPage.waitForLoaded()
        await CatalogPage.openProduct(PRODUCTO_A_TESTEAR)
        await ProductDetailPage.waitForLoaded(PRODUCTO_A_TESTEAR)
        await ProductDetailPage.addItemToCart()
    })

    it('test: 2. Debería ir al carrito y proceder al checkout', async () => {
        await CheckoutPage.goToCart()
        await CheckoutPage.proceedToCheckout()
    })

    it('test: 3. Debería solicitar login y redirigir al checkout', async () => {
        await LoginPage.login('bob@example.com', '10203040')
    })

    it('test: 4. Debería completar datos de envío', async () => {
        await CheckoutPage.fillShipping(
            'Bob Tester',
            'Av. Siempre Viva 123',
            'CDMX',
            '12345',
            'México'
        )
    })

    it('test: 5. Debería completar datos de pago', async () => {
        await CheckoutPage.fillPayment(
            'Bob Tester',
            '325812657568789',
            '03/26',
            '123'
        )
    })

    it('test: 6. Debería confirmar la orden y ver pantalla de éxito', async () => {
        await CheckoutPage.placeOrder()
        await expect(CheckoutPage.successMessage).toBeDisplayed()
        await (browser as any).saveScreenshot('./compra_exitosa.png')
    })
})

