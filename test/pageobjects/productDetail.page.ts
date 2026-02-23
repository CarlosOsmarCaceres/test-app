import { $ , browser } from '@wdio/globals'

class ProductDetailPage {
    public productTitle(name: string) {
        return $(`android=new UiSelector().text("${name}")`)
    }

    public get addToCartButton() {
        return $('~Add To Cart button')
    }

    public async waitForLoaded(productName: string) {
        await this.productTitle(productName).waitForDisplayed({ timeout: 20000 })
    }

    public async takeScreenshot(path: string) {
        await (browser as any).saveScreenshot(path)
    }

    public async addItemToCart() {
        await this.addToCartButton.waitForDisplayed({ timeout: 20000 })
        await this.addToCartButton.click()
    }
}

export default new ProductDetailPage()
