# #16 Obsługa braku danych

Nasz komponent powinien wiedzieć w jaki sposób obsłużyć sytuację, w której nie ma danych do wyświetlenia. Zmodyfikuje komponent `App` tak by:

## Zadanie

- jeżeli nie ma informacji o danych (`undefined`) wyświetlał komunikat "Trwa pobieranie danych" i nie wyświetlał formularza
- jeżeli nie ma danych (`[]`) wyświetlał komunikat "Brak danych" oraz formularz nowej wiadomości
