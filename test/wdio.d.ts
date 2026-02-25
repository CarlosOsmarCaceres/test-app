/// <reference types="mocha" />
/// <reference types="webdriverio" />
/// <reference types="@wdio/globals/types" />
/// <reference types="expect-webdriverio" />

declare namespace WebdriverIO {
    interface WaitUntilOptions {
        timeout?: number
        interval?: number
        timeoutMsg?: string
    }

    interface Browser {
        waitUntil(
            condition: () => boolean | Promise<boolean>,
            options?: WaitUntilOptions
        ): Promise<boolean>

        /* takeScreenshot(): Promise<string> */
    }
}

