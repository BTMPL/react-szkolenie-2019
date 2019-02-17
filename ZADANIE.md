# #11 Dostęp do elementów DOM przy użyciu ref

Czasem potrzebujemy uzyskać dostęp do elementów DOM - np. odczytać dane z formularza nie koniecznie na skutek interakcji.

## Zadanie

- zmień element `MessageForm` tak, by był formularzem
- w reakcji na próbę wysłania formularza przy użyciu klawisza Enter pobierz i wyświetl w `alert` dane z pola formularza

## Podpowiedź

- reakcję na próbę wysłania formularza obsłuż w jego metodzie `onSubmit`
  - pamiętaj, żeby powstrzymać faktyczne przesłanie formularza

## Bonus

Wyczyść pole formularza po wyświetleniu komunikatu w `alert`
