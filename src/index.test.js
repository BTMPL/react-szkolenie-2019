import React from "react";

import { Message, Bubble } from "./Message";

test("Komponent Message jest owiniety w React.memo", async () => {
  expect(Message["$$typeof"].toString()).toBe(
    React.memo(() => null)["$$typeof"].toString()
  );
});

test("Komponent Bubble jest owiniety w React.memo", async () => {
  expect(Bubble["$$typeof"].toString()).toBe(
    React.memo(() => null)["$$typeof"].toString()
  );
});
