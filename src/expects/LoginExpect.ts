import { expect, Locator } from "@playwright/test";

export class LoginExpect{

    async validarTextoVisible(locator: Locator, mensaje: string){
        await expect(locator, mensaje).toBeVisible();
    }
}