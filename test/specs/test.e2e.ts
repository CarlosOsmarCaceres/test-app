import { browser, expect } from '@wdio/globals'

describe('Mi Primera Automatización', () => {
    it('Debería abrir los ajustes de Android', async () => {
        // Casteamos el objeto a 'any' temporalmente para que TS deje de bloquearnos
        const mobileDriver = browser as any;

        // Ahora TS no se quejará de estas propiedades
        await mobileDriver.pause(3000);
        
        const isAppInstalled = await mobileDriver.isAppInstalled('com.android.settings');
        expect(isAppInstalled).toBe(true);
        
        await mobileDriver.saveScreenshot('./primer_test.png');
        
        console.log('¡Test completado con éxito!');
    });
});