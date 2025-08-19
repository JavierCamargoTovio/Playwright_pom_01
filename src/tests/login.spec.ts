import { test, Browser, chromium, Page } from "@playwright/test";
import { LoginPage } from "../../src/pages/LoginPage";
import {LoginExpect} from '../../src/expects/LoginExpect'
//import { test } from '../../src/hooks/Hook'; 


test.describe('login en demo QA', () => {

    test('Iniciar sessión en la página demoQA', async ({page}) => {

        const loginPage = new LoginPage(page);

        await test.step('Dado que navego a la pagina de demo QA', async () => {
            await loginPage.openPage();
        })

        await test.step('Cuando ingresos las credenciales válidas', async () => {
            await page.screenshot({ path: 'evidencia/screenshot01.png' });
            await loginPage.ingresarCredencialesValida("autoplay", "Abc123456*");

        })

        await test.step('Entonces el usuario debera loguearse', async () => {
            const loginExpect = new LoginExpect();
            await loginExpect.validarTextoVisible(loginPage.textExpect, 'Usuario logueado esperado');
            //await expect(loginPage.textExpect, 'Usuario logueado esperado').toBeVisible();
            await page.screenshot({ path: 'evidencia/screenshot02.png' });
        })

    })
})

