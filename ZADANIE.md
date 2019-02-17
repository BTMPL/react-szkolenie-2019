# #7 Przekazywanie danych do komponentu

## Zadanie

Przechowywanie danych wewnątrz komponentu jest mało przydatne - w większości wypadków nasz komponenty będą zajmowały się renderowaniem danych, które otrzymają.

- przerób komponent `Message` tak, by nazwa użytkownika była przekazywana do niego jako prop `userName`, data jako `time` a wiadomość jako `message`
- props `time` powinien być liczbą (unix timestamp), którą komponent następnie przekonwertuje do odpowiedniego formatu
- niech `App` wyrenderuje komponent `Message` i przekaże do niego odpowiednie wartości

## Bonus

- użyj zapisu destrukturyzacji, aby uniknąć używania obiektu `props` w komponencie `Message`
