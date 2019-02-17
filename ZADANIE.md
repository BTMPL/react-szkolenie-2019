# #8 propTypes i defaulltProps

Używanie propTypes stanowi rodzaj dokumentacji komponentu, przydatne jeżeli nie używamy np. TypeScript ale także kiedy chcemy udokumentować nasz komponent np. w react-styleguidist

Używanie defaultProps może uchronić nas przed problemami z wyświetlaniem "undefined" lub próbami dostępu do metod na `undefined`.

## Zadanie

Dodaj odpowiednie propTypes dla komponentu `Message`

- sprawdź dostępne typy na [na stronie projektu](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) - które z nich są właściwe?

- dodaj defaultProps do komponentu `Message`:

  - userName - domyślnie "Anonim"

- usuń userName z renderowania `Message` i sprawdź, czy działa poprawnie

## Podpowiedź

Nie musisz instalować modułu `PropTypes`, jest on domyślnie instalowany wraz z modułem `react`.
