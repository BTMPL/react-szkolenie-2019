# #19 Dodatkowa logika

Mamy już dostateczną wiedzę, aby udoskonalić naszą aplikację. Zmodyfikujmy ją zatem wg. poniższych wytycznych.

## Uwaga

Wszystkie treści umieszczone w cudzysłowie zamieść proszę dokładnie tak jak podano - w innym wypadku testy nie będą działać!

Komponent `App` pozostaje naszym pkt. wejściowym - dalsza struktura aplikacji (oddzielne komponenty dla formularza logowania etc.) pozostają Twoją decyzją.

## Zadanie

- Po uruchomieniu, aplikacja powinna pokazać pole tekstowe na podanie imienia użytkownika + przycisk z napisem "Zaloguj"
- Jeżeli użytkownik spróbuje przejść dalej bez podania imienia, lub wpisze pustą wartość (same spacje), aplikacja pokaże błąd "Podaj imię"
- Po poprawnym podaniu imienia, aplikacja nawiąże połączenie z API (do czasu podania poprawnego imienia nie nawiązuj połączenia), ukryje (przestanie renderować) formularz logowania i pokaże listę wiadomości pobranych z serwera
- Wysłanie wiadomości czyści formularz wpisywania treści
- Wysłanie wiadomości wysyła do serwera informacje z ustalonym wcześniej imieniem
