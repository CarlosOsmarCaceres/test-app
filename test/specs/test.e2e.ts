import { expect } from '@wdio/globals'
import CatalogPage from '../pageobjects/catalog.page'
import ProductDetailPage from '../pageobjects/productDetail.page'

describe('Portafolio: Flujo de Compra Sauce Labs', () => {
    const PRODUCTO_A_TESTEAR = 'Sauce Labs Backpack';

    it('Debería navegar, abrir el detalle y añadir al carrito', async () => {
        // 1. Esperamos a que el catálogo cargue
        await CatalogPage.waitForLoaded();

        // 2. Buscamos el producto (hace scroll si es necesario) y abrimos
        await CatalogPage.openProduct(PRODUCTO_A_TESTEAR);

        // 3. Verificamos que estamos en la pantalla de detalle
        await ProductDetailPage.waitForLoaded(PRODUCTO_A_TESTEAR);

        // 4. Validación: ¿El título es el correcto?
        const title = await ProductDetailPage.productTitle(PRODUCTO_A_TESTEAR);
        await expect(title).toBeDisplayed();

        // 5. Añadimos el producto al carrito
        await ProductDetailPage.addItemToCart();

        // 6. Validamos el badge del carrito
        await ProductDetailPage.cartBadge.waitForDisplayed({ timeout: 20000 });
        await expect(ProductDetailPage.cartBadge).toBeDisplayed();
        await expect(ProductDetailPage.cartBadge).toHaveText('1');

        // 7. Captura de pantalla final para el reporte
        await ProductDetailPage.takeScreenshot('./evidencia_detalle.png');
    });
});