import { getAccessToken } from "./actions";

const apiServices = {
  get: async function (url: string): Promise<any> {
    console.log("GET ", url);
    const token = await getAccessToken();
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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

  postWithoutToken: async function (url: string, data: any): Promise<any> {
    console.log("POST ", url, data);
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
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
    const token = await getAccessToken();
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      })
        .then((response) => response.json())
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
