Pasos para crear un proyecto en playwright POM

1 . crear proyecto 
- npm init playwright@latest

2. crear las carpetas
 - src carpeta principal
 - pages - subcarpeta
 - expects - subcarpeta
 - locator - subcarpeta
 - tests - se crea por defecto desde la creación del proyecto
 - types - archivo types.d.ts --> en el cual se expecifica los tipos de roles en playwright
 - hooks -subcarpeta  --> para abrir y cerrar el navegador

2. reportes con allure-reportes
 * instalar la libreria de allure-playwright
 - npm i -D @playwright/test allure-playwright
 
 * instalar los comandos para ejecutar allure-playwright
 - npm i -g allure-commandline
 
 * correr la prueba 
 - npx playwright test --project login
 
 * Luego genera el reporte de allure
 - npx allure generate ./allure-results --clean -o ./allure-report

 * abrir el reporte:
 - npx allure open ./allure-report

Nota: en el archivo playwright.config.ts, se debe realizar unas modificaciones

testDir: './src/tests',  --> ruta donde estan los test
   reporter: [
    ['list'],  // salida normal en consola
    ['allure-playwright'] // 👈 Allure
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  
  projects: [

    {
      name: 'login',
      testMatch: "src/tests/login.spec.ts", --> ruta donde estan los test que se va a ejecutar en especifico
      use: { ...devices['Desktop Chrome'] , channel: 'chrome' },
    },
