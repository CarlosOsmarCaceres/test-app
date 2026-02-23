import { $ } from '@wdio/globals'

class CatalogPage {
    public get titleProducts() {
        return $('android=new UiSelector().text("Products")')
    }

    public productName(name: string) {
        return $(`android=new UiSelector().text("${name}")`)
    }

    public productNameScrolled(name: string) {
        return $(
            `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${name}"))`
        )
    }

    public async waitForLoaded() {
        await this.titleProducts.waitForDisplayed({ timeout: 20000 })
    }

    public async openProduct(name: string) {
        const target = this.productNameScrolled(name)
        await target.waitForDisplayed({ timeout: 20000 })
        await target.click()
    }
}

export default new CatalogPage()
