# #18 Komunikacja z API

Jedno-osobowy chat jest mało przydatny. Dodajmy do niego wsparcie dla wielu użytkowników.

W projekcie pojawił się nowy plik, `src/api.js`, eksportujący nazwany obiekt `api` z 2 metodami:

- `api.get` - zwraca Promise, resolvujący się na obiekt odpowiedzi
- `api.create(string userName, string message)` - pozwala na wysłanie wiadomości do serwera, zwraca Promise

Kształt odpowiedzi z serwera to:

```js
{
  items: [
    {
      id: string,
      date: string,
      text: string,
      user: {
        userName: string
      }
    }
  ],
  count: number
}
```

## Zadanie

- pobierz listę danych po załadowaniu aplikacji i wyświetl je na ekranie
- wyślij wiadomość użytkownika i odśwież listę wiadomości po tym, jak zarejestruje ją serwer

## Bonus

Dodaj cykliczne pobieranie nowych wiadomości co 1 sekundę. Jak uniknąć dodawania ponownie już wyświetlonych wiadomości?
