import { expect } from '@wdio/globals'

import MenuComponent from '../pageobjects/menu.component'
import LoginPage from '../pageobjects/login.page'
import CatalogPage from '../pageobjects/catalog.page'

describe('Portafolio: ******* Flujo de Login *******', () => {
    it('Debería iniciar sesión exitosamente', async () => {
        // 1. Abrimos el menú y navegamos a la pantalla de Login
        await MenuComponent.navigateToLogin()

        // 2. Realizamos login con credenciales válidas
        await LoginPage.login('bob@example.com', '10203040')

        // 3. Validamos que estamos de vuelta en el catálogo
        await CatalogPage.waitForLoaded()
        await expect(CatalogPage.titleProducts).toBeDisplayed()
    })

    it('Debería cerrar sesión y mostrar alerta de confirmación', async () => {
        // Asumimos que ya estamos logueados y en el catálogo

        // 1. Ejecutamos el flujo de logout completo
        await MenuComponent.logout()

        // 2. Abrimos nuevamente el menú
        await MenuComponent.btnMenu.waitForDisplayed({ timeout: 20000 })
        await MenuComponent.btnMenu.click()

        // 3. Validamos que el botón de Login vuelve a estar visible
        await MenuComponent.btnLogin.waitForDisplayed({ timeout: 20000 })
        await expect(MenuComponent.btnLogin).toBeDisplayed()
    })
})

