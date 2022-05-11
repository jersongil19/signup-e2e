# Signup e2e test

## Instalacion

Si no tienen instalado el [Playwright](https://playwright.dev/docs/intro#installation)

```bash
npx run install
```

## Correr Pruebas

```bash
npx playwright test

# corre los test e2e con el navegador chrome

npx playwright show-trace signup.zip

# este scripts debe correrse, luego del npm run test, ya que mostrara los pasos de las pruebas.

PWDEBUG=1 npx playwright test

# corre las pruebas con una consola para manejar paso por paso los test
```