# #22 Render props - Function as Child

High order Components są potężnym wzorcem, pozwalającym na abstrakcję powtarzającego się kodu (logiki) i wykorzystanie z wieloma komponentami. Niestety jeżeli używamy wiele HoC jednocześnie, aplikacja może stać się mniej wydajna i ryzykujemy przykrywanie się nazw props.

## Zadanie

- Zmień funkcję `withChat` na `ChatProvider` i wyeksportuj jako nazwany eksport
- `ChatProvider` powinien renderować swoje dziecko i przekazywać do niego:
  - `isLoading`
  - `data`
  - `create`
- Komponent `ChatScreen` powinien używać `ChatProvider` w celu pobrania interesujących go danych
- Dodatkowo, komponent `ChatScreen` powinien wyświetlić nagłówek "Witaj na Chacie" nad listą wiadomości (poza `<ChatProvider>` !). W celu sprawdzenia, czy komponent ten nie ulega re-renderowaniu, wyświetl w nim dodatkowo jakąś losową treść (np. `Math.random()`).
