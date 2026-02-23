import { browser, expect } from '@wdio/globals'

/* describe('Mi Portafolio - Tienda Demo', () => {
    it('Debería instalar y abrir la aplicación correctamente', async () => {
        const mobileDriver = browser as any;

        // Le damos 5 segundos para que la app termine de cargar su pantalla inicial
        await mobileDriver.pause(5000);
        
        // Tomamos una captura para comprobar que estamos en la tienda
        await mobileDriver.saveScreenshot('./tienda_abierta.png');
        
        console.log('¡App instalada y abierta con éxito!');
    });
}); */

describe('Mi Portafolio - Tienda Demo', () => {
    it('Debería entrar al detalle de la mochila Sauce Labs', async () => {
        // 1. Esperamos a que la app cargue
        await browser.pause(4000);

        // 2. Buscamos el elemento usando el Accessibility ID (~ es el símbolo para ID)
        // Usamos el valor que encontraste: "store item"
        const mochila = await $('~store item');

        // 3. Hacemos clic
        await mochila.click();

        // 4. Esperamos un poco para ver la transición
        await browser.pause(3000);
        
        // 5. Tomamos captura del detalle del producto
        await browser.saveScreenshot('./detalle_mochila.png');
        
        console.log('¡Clic realizado con éxito y entramos al detalle!');
    });
});