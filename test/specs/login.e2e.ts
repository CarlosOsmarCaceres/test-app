import { expect } from '@wdio/globals'

import MenuComponent from '../pageobjects/menu.component'
import LoginPage from '../pageobjects/login.page'
import CatalogPage from '../pageobjects/catalog.page'

describe('Portafolio: Flujo de Login', () => {
    it('Debería iniciar sesión y volver al catálogo', async () => {
        // 1. Abrimos el menú y navegamos a la pantalla de Login
        await MenuComponent.navigateToLogin()

        // 2. Realizamos login con credenciales válidas
        await LoginPage.login('bob@example.com', '10203040')

        // 3. Validamos que estamos de vuelta en el catálogo
        await CatalogPage.waitForLoaded()
        await expect(CatalogPage.titleProducts).toBeDisplayed()
    })
})

