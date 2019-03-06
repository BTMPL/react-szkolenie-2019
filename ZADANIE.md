# #23 useState

React Hooks to nowy sposób tworzenia komponentów w React 16.8 - umożliwia on dodawanie do komponentów opartych o funkcje funkcjonalności do tej pory zarezerwowane dla komponentów klasowych.

## Zadanie

- Zmień komponenty `LoginScreen`, `MessageForm` i `App` na komponenty funkcyjne, stan zastępując hookiem `React.useState`

## Podpowiedź

`React.useState()` (oraz updater!) przyjmuje funkcję jako wartość. W takim wypadku zostanie ona wywołana i jej zwrócona wartość zostanie ustawiona jako stan. Jeżeli chcesz użyć komponent jako początkową wartość użyj następującej notacji:

```js
// React.useState(Component); // ŹLE!
React.useState(() => Component); // DOBRZE!
```
