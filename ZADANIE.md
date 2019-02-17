# #12 Komponenty klasowe

Komponenty klasowe stają się mniej popularne wraz z wprowadzeniem React Hooks w wersji 16.8.0 - tym nie mniej, powinniśmy znać metodę ich działania. Nie tylko pozwoli nam ona pracować z nieco starszym kodem, ale pozwoli nam lepiej zrozumieć cykl życia komponentu.

## Zadanie

- zmień komponent `MessageForm` na komponent klasowy
- w komponentach klasowych NIE MOŻEMY używać React Hooks (np. `React.useHook`)

## Podpowiedź

- aby utworzyć referencję, użyj `ref = React.createRef()` na zewnątrz metody `render` (ale wciąż w klasie!),
- do `ref` następnie odwołuj się poprzez `this.ref`
