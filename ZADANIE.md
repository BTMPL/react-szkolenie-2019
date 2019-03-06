# #26 Context

## Zadanie

- Utwórz nowy plik `./providers/translation.js` (zwróć uwagę na małą literę)
- Wyeksportuj z niego 3 elementy:

  - context tłumaczenia jako `Translation`
  - `TranslationProvider` akceptujący prop z językiem (`lang`) domyślnie "pl"

    - komponent ten powinien udostępniać przez kontekst tłumaczenia, oraz dodatkowo:
      - `language` - aktualny język
      - `setLanguage` - funkcję, pozwalającą na zmianę języka

  - komponent `LanguageSwitch`, akceptujący prop `to` oraz `children` i pozwalający na zmianę języka

    - komponent ten powinien używać `setLanguage`

  - komponent `T` będący konsumentem, akceptującym dwa propsy - `<T as={'p'} label={'welcome'} />` - i renderujący komponent z przetłumaczoną treścią.
    - jeżeli nie znajdziesz tłumaczenia dla treści, zwróć przekazany `label`
