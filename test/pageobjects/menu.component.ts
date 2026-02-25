import { $ } from '@wdio/globals'

class MenuComponent {
    public get hamburgerMenu() {
        return $('~open menu')
    }

    public get loginMenuItem() {
        return $('~menu item log in')
    }

    public async navigateToLogin() {
        await this.hamburgerMenu.waitForDisplayed({ timeout: 20000 })
        await this.hamburgerMenu.click()

        await this.loginMenuItem.waitForDisplayed({ timeout: 20000 })
        await this.loginMenuItem.click()
    }
}

export default new MenuComponent()

