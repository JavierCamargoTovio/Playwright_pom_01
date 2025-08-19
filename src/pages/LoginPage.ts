import { type Page, type Locator } from "@playwright/test";
import { LocatorLogin } from '../../src/locators/LocatorLogin';

export class LoginPage {

  readonly page: Page;
  readonly textExpect: Locator

  constructor(page: Page) {
    this.page = page;
    this.textExpect = page.locator(LocatorLogin.textoEsperado);
  }

  async openPage() {
    await this.page.goto('https://demoqa.com/login');
  
  }

  async ingresarCredencialesValida(usuario: string, clave: string) {
   // otra forma con el getByRole
     await this.page.getByRole(
      LocatorLogin.username.role,
      { name: LocatorLogin.username.name }
    ).fill(usuario);

    //await this.page.fill(LocatorLogin.usernameInput, usuario);
    await this.page.fill(LocatorLogin.passwordInput, clave);
    await this.page.click(LocatorLogin.loginButton);

   
  }

}