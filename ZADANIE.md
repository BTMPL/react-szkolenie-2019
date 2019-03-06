# #20 High Order Component

Usuńmy logikę pobierania danych z komponentu prezentacyjnego.

## Zadanie

- Utwórz "provider" `withChat`, który wyeksportuj jako eksport nazwany z pliku `./src/providers/chat.js`
- Komponent ten powinien tak samo jak do tej pory:

  - pobierać dane chata po zamontowaniu
  - po odmontowaniu usuwać mechanizm pobierania danych cyklicznie
  - posiadać mechanizm publikowania danych
  - do "owijanego" komponentu przekazuje:
    - `isLoading` - Boolean (owijany komponent wciąż decyduje, czy pokazać informacje o pobieraniu danych)
    - `data` - Array
    - `create` - Function

- Zmodyfikuj komponent ekranu chatu tak, by używał on `withChat` w celu pobrania i wysyłania danych
