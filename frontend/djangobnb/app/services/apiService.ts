const apiServices = {
  get: async function (url: string): Promise<any> {
    console.log("GET ", url);
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((json) => {
          console.log("Response: ", json);
          resolve(json);
        })
        .catch((error) => {
          console.error("Error: ", error);
          reject(error);
        });
    });
  },

  post: async function (url: string, data: any): Promise<any> {
    console.log("POST ", url, data);

    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((json) => {
          console.log("Response: ", json);
          resolve(json);
        })
        .catch((error) => {
          console.error("Error: ", error);
          reject(error);
        });
    });
  },
};

export default apiServices;
