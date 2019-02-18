export const api = {
  isMocked: true,
  get: jest.fn(() => {
    return Promise.resolve({
      items: [
        {
          id: 1,
          text: "Test string",
          user: {
            userName: "Bartosz Szczeciński"
          },
          date: new Date().toString()
        }
      ],
      count: 1
    });
  }),
  create: jest.fn(() => {
    return Promise.resolve();
  })
};
