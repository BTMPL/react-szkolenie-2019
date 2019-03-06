# #20 Render prop

Dodajmy nieco lepszą parametryzację komponentu `MessageForm`

## Uwaga

Testy pokrywają komponent `MessageForm` eksportowany z pliku `./src/MessageForm.js` - jeżeli zmieniłeś strukturę w swoim projekcie, proszę przywróć ją (np. kopiując rozwiązanie z poprzedniego brancha) lub zmień ją też w testach.

## Zadanie

- Zmodyfikuj komponent `MessageForm` tak, by ofertował on render prop o nazwie `renderButton`
- Jeżeli nie ma on żadnej wartości, guzik nie powinien być renderowany
- Przekazana do niego funkcja wywołana jest z obiektem zawierającym pola `disabled` (jeżeli nie wpisano wartości) i `onClick` obsługujący wysyłkę formularza (możesz usunąć te logikę z `onSubmit`)

## Notatki

Przenoszenie tego typu logiki z `<form onSubmit>` do `<button onClick>` nie jest najlepszym rozwiązaniem w praktyce, ale pozwoli nam zobrazować mechanizm render prop.
