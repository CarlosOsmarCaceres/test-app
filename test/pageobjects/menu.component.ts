import { $ } from '@wdio/globals'

class MenuComponent {
    public get btnMenu() {
        return this.hamburgerMenu
    }

    public get hamburgerMenu() {
        return $('~open menu')
    }

    public get btnLogin() {
        return this.loginMenuItem
    }

    public get loginMenuItem() {
        return $('~menu item log in')
    }

    public get btnLogout() {
        return $('~menu item log out')
    }

    public async navigateToLogin() {
        await this.btnMenu.waitForDisplayed({ timeout: 20000 })
        await this.btnMenu.click()

        await this.btnLogin.waitForDisplayed({ timeout: 20000 })
        await this.btnLogin.click()
    }

    public async logout() {
        await this.btnMenu.waitForDisplayed({ timeout: 20000 })
        await this.btnMenu.click()

        await this.btnLogout.waitForDisplayed({ timeout: 20000 })
        await this.btnLogout.click()

        const confirmLogoutButton = $('android=new UiSelector().text("LOG OUT")')
        await confirmLogoutButton.waitForDisplayed({ timeout: 20000 })
        await confirmLogoutButton.click()

        const successMessage = $('android=new UiSelector().text("You are successfully logged out.")')
        await successMessage.waitForDisplayed({ timeout: 20000 })

        const okButton = $('android=new UiSelector().text("OK")')
        await okButton.waitForDisplayed({ timeout: 20000 })
        await okButton.click()
    }
}

export default new MenuComponent()

