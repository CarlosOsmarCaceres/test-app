# Mobile Automation E2E Framework

End‑to‑end mobile automation framework for the native (React Native) **Sauce Labs My Demo App**.  
This project is designed as a **QA Automation portfolio piece**, showcasing clean architecture, robust synchronization, and production‑style reporting for Android UI tests.

---

## Tech Stack ⚙️

- **WebdriverIO** (v9, TypeScript setup)
- **Appium** (Android, UiAutomator2)
- **TypeScript**
- **Node.js**
- **Allure Reporter** (visual test reports)

---

## Architecture 🧱

The framework follows the **Page Object Model (POM)** design pattern:

- Each screen or functional area of the app is represented by a **Page Object** (`catalog.page.ts`, `productDetail.page.ts`, `login.page.ts`, `checkout.page.ts`, `menu.component.ts`, etc.).
- All locators and interaction logic are **centralized per page**, making tests:
  - Easier to read (tests describe business flows, not low‑level selectors).
  - More maintainable (UI changes are handled in one place).
  - More scalable (new flows reuse existing, battle‑tested methods).

TypeScript typings are carefully configured so tests benefit from:

- Strongly typed `browser`, `element` and custom helpers.
- Shared globals via `@wdio/globals` and a custom `wdio.d.ts` file.

---

## Key Features & Challenges Solved 🚀

- **Full E2E Purchase Flow**
  - Implements a complete **end‑to‑end purchase journey**:
    - Browse catalog.
    - Open product detail.
    - Add to cart.
    - Go through checkout (shipping + payment).
    - Place order and validate success screen.
  - Encapsulated in `purchase.e2e.ts` using dedicated Page Objects for each step.

- **Happy Paths & Unhappy Paths**
  - **Happy Path**: Successful login and checkout flows validating catalog visibility and success messages.
  - **Unhappy Path**: Negative test in `login.e2e.ts` that:
    - Attempts login with invalid credentials.
    - Asserts that a **flexible error message** is displayed via an XPath selector that matches common failure texts (e.g. “Provided credentials do not match”, “Sorry”).

- **Interaction with Native Android Elements**
  - Uses **native selectors** and **Appium‑specific capabilities**:
    - Accessibility IDs such as `~open menu`, `~Login button`, `~cart badge`, `~Proceed To Checkout button`.
    - Android UiSelector for OS‑level dialogs and success messages, e.g.:
      - `$('android=new UiSelector().text("LOG OUT")')`
      - `$('android=new UiSelector().textContains("Checkout Complete")')`
  - Handles **native pop‑ups** for logout confirmation and success alerts.

- **Dynamic Scrolling with UiScrollable**
  - Automatically scrolls the product catalog until a target product is visible:
    - Implemented via `UiScrollable` expressions in `catalog.page.ts`.
    - Removes the need for manual `swipe`/`scroll` commands in tests.

- **Visual Reporting with Allure**
  - **Allure Reporter** integrated via `wdio.conf.ts`:
    - Results stored in `allure-results/`.
    - `disableWebdriverStepsReporting: true` to keep reports focused.
    - `disableWebdriverScreenshotsReporting: false` so screenshots are attached.
  - `afterTest` hook takes an automatic screenshot on failure:
    - `browser.takeScreenshot()` is invoked whenever `passed === false`.
  - Final **evidence screenshots** are saved during E2E flows:
    - e.g. `./compra_exitosa.png` after a successful purchase.

---

## Test Suites Structure 🧪

All suites are configured in `wdio.conf.ts` under `config.suites`:

- **`login`**
  - Focused on **authentication flows**:
    - Unhappy path: invalid credentials show an error message.
    - Happy path: valid login takes the user back to the product catalog.
    - Logout flow: opens the menu, triggers logout, confirms OS pop‑ups, and verifies the Login option is visible again.

- **`compra`**
  - Isolated **cart / product‑detail** behavior:
    - Opens a specific product.
    - Adds it to the cart.
    - Verifies the **cart badge** is displayed and captures a screenshot as evidence.

- **`e2e`**
  - **Master E2E purchase scenario**:
    - Adds a product to the cart.
    - Navigates to cart and checkout.
    - Triggers login when required.
    - Completes shipping and payment forms.
    - Places the order and validates the success screen, with a final screenshot.

- **`regresion`**
  - Combines **login**, **cart**, and **E2E purchase** specs for a compact regression run:
    - Executes `login.e2e.ts`, `cart.e2e.ts`, and `purchase.e2e.ts` in a single command.

---

## How to Run the Project 🧩

### 1. Install Dependencies

```bash
npm install
```

> Requires a recent **Node.js** (LTS recommended) and a working **Appium** environment with Android SDK / emulator configured.

### 2. Start Appium Server

In a separate terminal:

```bash
appium
```

Ensure the **Android emulator** defined in `wdio.conf.ts` (e.g. `emulator-5554`) is running and the demo APK path `./app/demo-app.apk` is valid.

### 3. Run a Specific Suite

Use the `--suite` flag to run a targeted flow:

- **Login suite**

```bash
npx wdio run wdio.conf.ts --suite login
```

- **Cart / Add‑to‑Cart suite**

```bash
npx wdio run wdio.conf.ts --suite selected
```

- **Full E2E Purchase suite (recommended for demos)**

```bash
npx wdio run wdio.conf.ts --suite e2e
```

- **Regression suite**

```bash
npx wdio run wdio.conf.ts --suite regresion
```

### 4. Generate and View Allure Report 📊

After running any suite, generate the Allure report with:

```bash
npm run report
```

This will:

1. Generate the report from `allure-results/`.
2. Automatically open the **Allure Report UI** in your default browser.

---

## Why This Project Is Relevant for QA Automation Roles 💼

- Demonstrates **hands‑on experience** with modern mobile automation using **WebdriverIO + Appium + TypeScript**.
- Shows ability to design a **clean, extensible POM architecture** rather than “script‑only” tests.
- Covers **realistic scenarios**:
  - Authentication (happy/unhappy paths).
  - Multi‑step checkout with validation and data entry.
  - Native dialogs, scrolling, and dynamic waits.
- Integrates **Allure** for professional, shareable reports that are standard in many QA teams.

This repository is ready to be used as a **portfolio artifact** in technical interviews or to be extended with additional flows (e.g. profile, wish‑list, localization testing).

