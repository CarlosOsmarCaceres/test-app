import { expect } from '@wdio/globals'

import MenuComponent from '../pageobjects/menu.component'
import LoginPage from '../pageobjects/login.page'
import CatalogPage from '../pageobjects/catalog.page'

describe('Portafolio: ******* Flujo de Login *******', () => {
    it('test: 1. Debería mostrar un error con credenciales inválidas', async () => {
        // 1. Abrimos el menú y navegamos a la pantalla de Login
        await MenuComponent.navigateToLogin()

        // 2. Intentamos login con credenciales inválidas
        await LoginPage.login('hacker@email.com', 'claveFalsa123')

        // 3. Validamos que se muestre el mensaje de error
        await expect(LoginPage.errorMessage).toBeDisplayed()
    })

    it('test: 2. Debería iniciar sesión exitosamente', async () => {
        // Ya estamos en la pantalla de Login tras el intento fallido anterior

        // 1. Realizamos login con credenciales válidas
        await LoginPage.login('bob@example.com', '10203040')

        // 2. Validamos que estamos de vuelta en el catálogo
        await CatalogPage.waitForLoaded()
        await expect(CatalogPage.titleProducts).toBeDisplayed()
    })

    it('test: 3. Debería cerrar sesión y mostrar alerta de confirmación', async () => {
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

