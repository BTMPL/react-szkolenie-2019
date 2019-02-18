const url = "http://147.135.192.225:8080";
export const api = {
  isMocked: false,
  create: (userName, text) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          userName
        },
        text
      })
    });
  },

  get: () => {
    return fetch("http://147.135.192.225:8080/").then(d => d.json());
  }
};
