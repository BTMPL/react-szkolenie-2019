# #9 Renderowanie list komponentów

Do tej pory dane w komponencie `App` były zapisane na sztywno i renderował on w komponenty `Message` również w oparciu o zapisane na sztywno dane.

Dodajmy do pliku `src/index.js` tablicę danych:

```js
const data = [
  {
    userName: "BTM",
    time: new Date().getTime(),
    message: "Witaj na szkoleniach z React!"
  },
  {
    userName: "Gość",
    time: new Date().getTime(),
    message: "Hej!"
  }
];
```

(oczywiście możesz dodać więcej i własne dane).

## Zadanie

- przekaż tablicę obiektów jako prop `data` do komponentu `App`
- wyświetl wszystkie dane przy użyciu komponentu `Message`

## Bonus

Zdefiniuj `propTypes` dla komponentu `App`. Jak można uniknąć powtarzania tych samych danych w `App` i `Message`?
