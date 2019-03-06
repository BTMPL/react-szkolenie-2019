# #23 useEffect

## Zadanie

- Zmień komponent `ChatProvider` na komponent oparty o funkcje
  - metody lifecycle zastąp wywołaniem `React.useEffect()`

## Podpowiedź

- `useEffect` jako drugi parametr przyjmuje tablicę której _wartości_ zostaną porównane i jeżeli nie uległy zmianie, efekt nie zostanie wywołany
- efekt może zwrócić funkcję, która zostanie wywołana w momencie zastępowania efektu nowym lub odmontowywania kompomonentu
