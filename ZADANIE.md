# #23 useEffect

## Zadanie

- Zmień komponent `ChatProvider` na komponent oparty o funkcje
  - metody lifecycle zastąp wywołaniem `React.useEffect()`

## Uwaga

Jeżeli w testach zobaczysz komunikat

```
Warning: An update to ChatProvider inside a test was not wrapped in act(...)
```

nie znaczy to, że w kodzie jest błąd. Błąd ten jest znany, i na chwilę obecną nie jest rozwiązany:

https://github.com/kentcdodds/react-testing-library/issues/281
https://github.com/facebook/react/issues/14769

## Podpowiedź

- `useEffect` jako drugi parametr przyjmuje tablicę której _wartości_ zostaną porównane i jeżeli nie uległy zmianie, efekt nie zostanie wywołany
- efekt może zwrócić funkcję, która zostanie wywołana w momencie zastępowania efektu nowym lub odmontowywania kompomonentu
