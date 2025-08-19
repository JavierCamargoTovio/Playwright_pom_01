import { AriaRole } from '../types/types';

export class LocatorLogin {
    static usernameInput = '#userName';
    static passwordInput = '#password';
    static loginButton = '#login';
    static textoEsperado = '#userName-value';
    //otra forma de llmar con el getByRole
    static username: { role: AriaRole; name: string } = {
    role: 'textbox',
    name: 'UserName',
  };

}