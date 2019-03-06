import { renderHook, cleanup } from "react-hooks-testing-library";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

test("hook useChat zwraca poprawne dane", () => {
  jest.mock("./api");
  const useChat = require("./providers/chat").useChat;

  const { result } = renderHook(() => useChat());

  expect(result.current.data).toBeUndefined();
  expect(typeof result.current.create).toBe(typeof Function);
  expect(result.current.isLoading).toBe(true);
});
