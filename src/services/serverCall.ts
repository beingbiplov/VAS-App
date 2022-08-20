import axios from "axios";

const server = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
});

export const postRequest = async (
  url: string,
  data: any,
  token: string = ""
) => {
  const res = await server.post(url, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const getRequest = async (url: string, token: string = "") => {
  const res = await server.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const deleteRequest = async (url: string, token: string = "") => {
  const res = await server.delete(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const putRequest = async (
  url: string,
  data: any,
  token: string = ""
) => {
  const res = await server.put(url, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
