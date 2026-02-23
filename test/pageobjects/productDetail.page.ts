import { $ , browser } from '@wdio/globals'

class ProductDetailPage {
    public productTitle(name: string) {
        return $(`android=new UiSelector().text("${name}")`)
    }

    public async waitForLoaded(productName: string) {
        await this.productTitle(productName).waitForDisplayed({ timeout: 20000 })
    }

    public async takeScreenshot(path: string) {
    // Usamos 'as any' para que TS ignore la restricción de tipos en esta línea
    await (browser as any).saveScreenshot(path);
}
}

export default new ProductDetailPage()
