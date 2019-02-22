# #1 Wprowadzenie do tworzenia aplikacji

- wprowadzenie do mechanizmu ReactDOM.render

  - aplikacje Reactowe nie mogą "wzbogacać" istniejącego HTML
  - ReactDOM.render jest podstawowym punktem startowym
  - w innych targetach zamiast ReactDOM używa się innych implementacji renderujących nie HTML (nie używających DOM) ale elementy natywne dla danej platformy: React Native, React 360 etc.
  - Metoda ReactDOM.render przyjmuje 3 parametry: zawartość do weyrenderowania, cel, w który należy wyrenderować zawartość i callback, który zostanie wywołany po wyrenderowaniu treści

# #2 Wprowadzenie do ReactDOM.render

- Renderer React przyjmuje kilka typów danych, najpopularniejsze z nich to string i elementy Reactowe
- z uwagi, że string jest automatycznie scapowany, nie ma możliwości "wstrzyknięcia" XSS o ile świadomie nie wprowadzimy błędu w aplikacji
- Element Reactowy to obiekt zawierający określone dane, minimalny przykład to:

```
  ReactDOM.render({
    $$typeof: Symbol.for('react.element'),
    ref: () => { },
    type: 'div',
    props: {
      children: 'test'
    }
  }, document.getElementById("root"));
```

# #3 Komponenty

- Komponenty w React to funkcje (lub klasy), które zwracają React Element
- JSX to składnia wprowadzona w React, która notacją przypomina HTML lub XML
- JSX nie jest rozpoznawalny przez przeglądarki i musi zostać zamieniony na wywołania metody `React.createElement`
- W celu wyrenderowania komponentu możemy użyć następujących notacji:

```
// Ręczne wywołanie React.createElement
ReactDOM.render(React.createElement(NazwaKomponentu, { children: 'Witaj świecie' }), root)
```

```
// przy użyciu transpilacji Babel
ReactDOM.render(<NazwaKomponentu>Witaj świecie</NazwaKomponentu>, root)
```

# #4 Strukturowanie aplikacji

- Wraz z rozrastaniem się aplikacji będziemy wyodrębniać komponenty do oddzielnych plików
- React nie narzuca struktury katalogów i pozwala na dowolne tworzenie katalogów i plików
- Dobrym zwyczajem jest używanie eksportów nazwanych a nie domyślnych co pozwala na uniknięcie importowania nieistniejących komponentów (nasze IDE powinno być w stanie podpowiedzieć nam, jakie wartości eksportuje moduł).

# #5 Renderowanie struktury komponentów

- Komponenty mogą zawierać w sobie liczne tagi HTML oraz inne komponenty
- Komponent nie może bezpośrednio zwrócić kilku elementów na pierwszym poziomie, np:

```
const Component = () => {
  return (
    <div>pierwsza linia</div>
    <div>druga linia</div>
  )
}
```

Zamiast tego musimy owinąć je we wspólnego rodzica, np. dodatkowy `<div>`.

Można także użyć specjalnego komponentu `<React.Fragment>`, który nie renderuje się do HTML.

# #6 Używanie JS w komponentach

- W celu użycia dynamicznych wartości w JSX, musimy otoczyć je znacznikami `{}`
- W `{}` możemy umieścić "wyrażenie" JS, czyli kod, który zostanie wykonany i zwróci wartość
- W `{}` nie można więc użyć notacji `if (X) { } else { }`, ale można używać ternary: `{X ? 1 : 2}`

# #7 Przekazywanie danych do komponentu

- Dane do komponentu możemy przekazać jak atrybuty w HTML, w tym wypadku noszę one nazwę "props"
- Pierwszym argumentem funkcji opisującej komponent będzie obiekt "props":

```
<Component name={'BTM'} color={'blue'} />
```

```
const Component = props => {
  console.log(props.name);
  console.log(props.color);
  return null;
}
```

- W JSX niektóre atrybuty HTML zastąpione są innymi słowami kluczowymi, np. zamiast `class` powinniśmy używać `className`. Podyktowane jest to tym, że `class` jest słowem kluczowym w JS, i przypadkowy zapis:

```
const { class } = props;
```

prowadził by do błędu.

# #8 propTypes i defaultProps

React udostępnia mechanizm weryfikowania poprawności przekazywanych props z założeniami developera.

- Mechanizm ten jest przydatny (i aktywny!) tylko w trybie develop - nie nadaj się on zatem do zapewnienia poprawności działania aplikacji i przekazanie propsów nie spełniających oczekiwań nie prowadzi do błędu a jedynie warningu.
- Podstawowa implementacja to funkcja z 3 argumentami:

```
App.propTypes = {
  name(props, propName, component) {
    if (!props[propName]) return new Error(`Props ${propName} nie może być pusty w komponencie ${component}!`);
  }
}
```

- Z uwagi na popularność mechanizmu, możemy skorzystać z modułu `prop-types`, który definiuje wiele validatorów.

Drugim mechanizmem jest `defaultProps`, pozwalający na zdefiniowanie wartości dla propsów, jeżeli developer nie przekazał ich, lub przekazał wartość `undefined`

- `defaultProps` stosowany jest tylko na pierwszym poziomie propsów, nie ma możliwości deklaracji domyślnych wartości dla zagłębionych obiektów bez założenia, że cały obiekt jest niezdefiniowany.

# #9 Renderowanie list komponentów

- React nie posiada własnego systemu notacji dla pętli znanego z innych rozwiązań
- Jeżeli w komponencie zwrócimy tablicę, jej elementy zostaną wyrenderowane jeden po drugim
- Możemy użyć metody `Array.prototype.map()` do zmodyfikowania elementów tablicy, np. zastąpienia ich komponentami z danymi z tablicy
- Specjalny props `key` pozwala Reactowi określić, czy element jest nowy czy aktualizowany; powinien on być używany zawsze kiedy renderujemy tablice!

# #10 Reagowanie na zdarzenia

React pozwala na dodawanie listenerów do eventów DOM poprzez deklarowanie ich jako `onEventName` na elementach DOM; nie dodaje on jednak listenerów do każdego elementu, ale używa jednego listenera dodanego do dokumentu i deleguje zdarzenia wewnętrznie.

- Nasłuchiwanie na zdarzenia dodajemy jako `onDużaLitera`, przekazując do nich funkcje, które będą wywołane w odpowiedzi na zdarzenie:

```
onClick={handleClick}
```

- Częstym błędem jest przekazanie i wywołanie funkcji jednocześnie:

```
onClick={handleClick()}
```

Jest to "kalka" z HTML, gdzie robiło się `onclick="funkcja()"`.

Obiekt zdarzenia, przekazany do funkcji to tzw. `SyntheticEvent`

- React posiada określoną pulę Eventów, które wykorzystywane są w całym procesie event delegation w celu zoptymalizowania pamięci
- Z tego powodu, jeżeli spróbujemy dostać się do `event.target` wewnątrz `setTimeout` albo callbacku, może mieć on inną wartość (najczęściej null)

  - Aby tego uniknąć możemy wywołać `event.persist()`
  - Ale lepiej po prostu wcześniej przechwycić wartość

- React ujednolica też niektóre zdarzenia - `onChange` działa tak, jak zdarzenie `input`

Podstawowa forma formularzy to formularze niekontrolowane. Jeżeli zdefiniujemy `value` nie ma możliwości ich zmiany.

- Zamiast tego możemy zdefiniować np. `defaultValue`

# #11 Dostęp do elementów DOM przy użyciu ref

Jeżeli potrzebujemy dostać się do wartości elementu możemy użyć metod znanych z DOM:

- W formularzu możemy np. sprawdzić `event.target`
- Możemy użyć `document.querySelector`
- React udostępnia dedykowane narzędzie pozwalające na dostęp do DOM - referencje (ref):

```
const Form = () => {
  const ref = React.useRef();

  return (
    <input type="text" ref={ref} onChange={() => {
      console.log(ref.current, ref.current.value)
    }}>
  )
}
```

W mutowalnym elemencie `.current` mamy odniesienie do elementu DOM, do którego przekazaliśmy go jako prop.

# #12 Komponenty klasowe

Komponenty klasowe to inna forma komponentu Reactowego, oparta o klasy a nie funkcje. Do wersji 16.8.0 była to jedyna metoda pozwalająca na używanie stanu lub cyklu życia.

- Wszystkie komponenty klasowe muszą dziedziczyć po `React.Component` lub `React.PureComponent`
- Wszystkie komponenty klasowe muszą posiadać metodę `render()` zwracającą React Element
- Podobnie jak komponenty funkcje, komponenty klasowe mogą mieć `propTypes` i `defaultProps`

- Komponenty klasowe posiadają rozbudowany cykl życia składający się w wielu etapów

Więcej informacji:

- https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d
- https://cdn-images-1.medium.com/max/2000/1*cEWErpe-oY-_S1dOaT1NtA.jpeg

# #13 Stan komponentu i formularze kontrolowane

Stan komponentu pozwala na przechowywanie informacji o komponencie w jego wnętrzu, nie pochodzi on od rodzica, ani nie jest dostępny dla dziecka, o ile nie przekażemy go mu jako props.

- Aby zadeklarować stan komponentu, musimy zadeklarować jego obiekt `state`

  - W konstruktorze:

  ```
  constructor(...args) {
    super(...args);
    this.state = {
      count: 0
    };
  }
  ```

  - lub jako class field:

  ```
  class Component extends React.Component {
    state = {
      count: 0
    }
  }
  ```

Jedynie w tych 2 miejscach możemy nadpisać stan, w pozostałych musimy używać `this.setState`

- `setState` pozwala na aktualizację stanu - przekazany do niego obiekt będzie łączony z aktualnym stanem (nie trzeba więc przekazywać nie zmienionych wartości)
- `setState` jest asynchroniczny, jeżeli potrzebujemy w jakimś celu odczytać jego wartość po `setState` możemy użyć drugiego parametru - callback
- `setState` można także wywołać z funkcja, jest to przydatne kiedy wykonujemy operacje bazujące na aktualnym stanie tj. zwiększanie licznika, dopisywanie do tabeli
  - Demo: problem ze stanem komponentu - https://codesandbox.io/s/yvvyv4vzvx

Więcej informacji:

- https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b

# #14 Przekazywanie danych do rodzica

- W celu przekazania danych z dziecka do rodzica, rodzic powinien przekazać do dziecka funkcję, która zostanie wywołana ze zmienionymi danymi.
- Dobrą praktyka jest odpowiednie nazywanie props i funkcji, które je obsługują:
  - props: onEvent (np. onChange, onClick, onLoad)
  - funkcja: handleEvent (np. handleChange, handleClick, handleLoad)

# #15 Aktualizacja tablic w stanie

- Podobnie jak w przypadku aktualizowania stringów etc., do aktualizacji tablic używamy `this.setState`
- Powinniśmy zwrócić uwagę, by nie używać metod mutujących tablice: zamiast `.push` -> `.concat` etc.
- Omówienie sposobów aktualizacji tablic:
  - dodawanie elementów
  - usuwanie elementów
  - aktualizowanie elementu
- Mutowanie danych może prowadzić do ciężkich do wychwycenia błędów - https://codesandbox.io/s/o5rn5omxw9

# #16 Obsługa braku danych

Nasze komponenty powinny wiedzieć jak obsłużyć sytuacje, w której zostały wyrenderowane bez danych. Najczęstszym rozwiązaniem jest pokazanie odpowiedniej informacji o braku, pobieraniu danych etc.

Zwykle odbywa się to poprzez sprawdzenie istnienia danych w metodzie rendere. Istnieje kilka wzorców pozwalających na określenie stanu z użyciem oddzielnej flagi (`isLoading` lub bez).

# #17 Stylowanie aplikacji

React oferuje kilka odpowiedzi na problem stylowania komponentu:

- używanie styli inline poprzez obiekt `style`

```
<div style={{
  color: 'red',
  fontWeight: 'bold'
}}>
```

- ładowanie zewnętrznego CSS i używanie klas:

```
<div className="hero">Witaj świecie</div>
```

- importowanie CSS (SCSS, LESS) w kodzie JS i używanie klas:

```
import './style.css';
<div className="hero">Witaj świecie</div>
```

```
import styles from './style.css';
<div className={styles.hero}>Witaj świecie</div>
```

- rozwiązania CSS-in-JS

```
const Hero = styled.div`
  color: red;
  font-weight: bold;
`;
<Hero>Witaj świecie</Hero>
```

# #18 Komunikacja z API

Istnieje wiele form komunikacji aplikacji Reactowych z backendami - najpopularniejsza z nich to REST API.

React nie dostarcza żadnych mechanizmów pozwalających na zarządzanie pobieraniem zasobów (np. `$http` z Angulara) - decyzje o bibliotekach i metodach pozostawia użytkownikowi.

Dwa najpopularniejsze rozwiązania to:

- axios - https://github.com/axios/axios
- fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Oba działają na zasadzie Promisów.

Z uwagi na mechanizm działania lifecycle komponentów React, sugerowanym miejscem wywoływania zapytań asynchronicznych - lub nie "idempotentnych" - są funkcje `componentDid*`, np. `componentDidMount`.

W celu "uświadomienia" komponentu o tym, że dane zostały pobrane (zmieniły się) używamy stanu komponentu.

# #19 Dodatkowa logika

Dysponujemy już dostateczną wiedzą w zakresie:

- obsługi formularzy
- wyświetlania danych i komponentów w oparciu o stan aplikacji
- zarządzania cyklem życia komponentu

wystarczającą aby rozbudować naszą aplikację.

---

# #1 Wprowadzenie do tworzenia aplikacji

## Zadanie

- utwórz punkt startowy dla aplikacji jako `src/index.js`
- uruchom aplikację komendą `yarn start` lub `npm start`
- używając składni `import ? from ?` dodaj do projektu:

  - metodę `render` z pakietu `react-dom`

- wyświetl napis "Witaj Świecie" na ekranie

---

# #2 Wprowadzenie do ReactDOM.render

## Zadanie

- użyj metody `React.createElement` aby wyrenderować element `div` z tekstem

  - `React.createElement` przyjmuje 3+ parametry:
    - nazwę elementu do wyrenderowania,
    - obiekt "props" ( na razie przekazujemy pusty obiekt - {} )
    - kolejne parametry stanowią kolejne dzieci elementu

- użyj metody `React.createElement` aby wyrenderować następujący kod HTML:

  ```
  <div>Witaj na <b>Warsztatach z React</b>!</div>
  ```

- zwróć uwagę, że nie cały tekst jest pogrubiony!

## Bonus

Gdzie podziała się spacja między "Witaj na" i "warsztatach z React"? Jak można ją dodać?

---

# #3 Komponenty

## Zadanie

- utwórz komponent `App` w pliku `src/index.js` i wyrenderuj w nim strukturę z poprzedniego zadania:

```
    <p>
      Witaj na <b>Warsztatach React</b>!
    </p>
```

- wyeksportuj komponent jako eksport nazwany `App`

## Debug

Jeżeli konsola z testami generuje błędy dot. "Cannot read property 'hasOwnProperty'..." upewnij się, że katalog `__mocks__` jest aktualnie pusty i zrestartuj test-runnera.

---

# #4 Strukturowanie aplikacji

## Zadanie

Z biegiem czasu nasza aplikacja będzie co raz bardziej rozbudowana i kolejne komponenty w jednym pliku będą ciężkie do aktualizacji.

- utwórz plik `src/App.js`
- przenieś do niego komponent `App` i eksportuj go jako nazwany eksport
- zaimportuj komponent w `index.js` i wyświetl tak jak poprzednio

---

# #5 Renderowanie struktury komponentów

## Zadanie

- utwórz komponent `Message` (zapisz go jako nazwany eksport w pliku `src/Message.js`)

  - komponent ten powinien wygenerować następującą strukturę (na razie zapisz ją na sztywno!):

  ```
  <div>
      <span>Twoje Imię</span>
      <time>12:00</time>
      <p>
          To jest przykładowa wiadomość :)
      </p>
  </div>
  ```

- wyświetl komponent `Message` w komponencie `App`

## Bonus

Wyświetl więcej niż jeden komponent `Message` w `App`

---

# #6 Używanie JS w komponentach

## Zadanie

- zapisz imię w zmiennej lokalnej w komponencie `Message` i wyświetl zamiast zapisanego na sztywno
- w elemencie `<time>` wyświetl bieżącą godzinę i minutę (w formacie `HH:MM`)

## Podpowiedź

Nie używaj bibliotek do generowania daty. Możesz użyć `getHours()` i `getMinutes()` z obiektu `Date`.

## Bonus

Nie używaj zmiennych do wygenerowania daty - zrób to bezpośrednio w JSX!

---
