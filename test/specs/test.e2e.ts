import { expect } from '@wdio/globals'
import CatalogPage from '../pageobjects/catalog.page.ts'
import ProductDetailPage from '../pageobjects/productDetail.page.ts'

describe('Portafolio: Flujo de Compra Sauce Labs', () => {
    const PRODUCTO_A_TESTEAR = 'Sauce Labs Backpack';

    it('Debería navegar y abrir el detalle del producto correctamente', async () => {
        // 1. Esperamos a que el catálogo cargue
        await CatalogPage.waitForLoaded();

        // 2. Buscamos el producto (hace scroll si es necesario) y abrimos
        await CatalogPage.openProduct(PRODUCTO_A_TESTEAR);

        // 3. Verificamos que estamos en la pantalla de detalle
        await ProductDetailPage.waitForLoaded(PRODUCTO_A_TESTEAR);

        // 4. Validación final: ¿El título es el correcto?
        const title = await ProductDetailPage.productTitle(PRODUCTO_A_TESTEAR);
        await expect(title).toBeDisplayed();

        // 5. Captura de pantalla para el reporte
        await ProductDetailPage.takeScreenshot('./evidencia_detalle.png');
    });
});