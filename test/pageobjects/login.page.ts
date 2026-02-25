import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        // Campo de usuario en la app nativa (Accessibility ID)
        return $('~Username input field')
    }

    public get inputPassword () {
        // Campo de contraseña en la app nativa (Accessibility ID)
        return $('~Password input field')
    }

    public get btnSubmit () {
        // Botón de login en la app nativa (Accessibility ID)
        return $('~Login button')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.waitForDisplayed({ timeout: 20000 })
        await this.inputUsername.clearValue()
        await this.inputUsername.setValue(username)

        await this.inputPassword.waitForDisplayed({ timeout: 20000 })
        await this.inputPassword.clearValue()
        await this.inputPassword.setValue(password)

        await this.btnSubmit.waitForDisplayed({ timeout: 20000 })
        await this.btnSubmit.click()
    }

    public get errorMessage () {
        return $(
            '//android.widget.TextView[contains(@text, "Provided credentials do not match") or contains(@text, "Sorry")]'
        )
    }

}

export default new LoginPage();
