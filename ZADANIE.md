# #20 High Order Component

Usuńmy logikę pobierania danych z komponentu prezentacyjnego.

## Zadanie

- Utwórz "provider" `withChat`, który wyeksportuj jako eksport nazwany z pliku `./src/providers/chat.js`
- Komponent ten powinien tak samo jak do tej pory:

  - pobierać dane chata po zamontowaniu
  - po odmontowaniu usuwać mechanizm pobierania danych cyklicznie
  - posiadać mechanizm publikowania danych
  - renderować przekazany komponent przekazując do niego `data` oraz `create`

- Zmodyfikuj komponent ekranu chatu tak, by używał on `withChat` w celu pobrania i wysyłania danych
