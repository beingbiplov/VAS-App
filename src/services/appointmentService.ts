import { getAccessTokenFromCookie } from "../cookie/authCookie";

import {
  postRequest,
  getRequest,
  putRequest,
  deleteRequest,
} from "./serverCall";

export const addAppointment = async (data: any) => {
  const res = await postRequest("/appointment", data).catch((err) => {
    throw err;
  });

  return res;
};

export const getAppointments = async () => {
  const token = getAccessTokenFromCookie();
  const res = await getRequest("/appointment", token).catch((err) => {
    throw err;
  });

  return res;
};

export const getAppointment = async (id: number) => {
  const token = getAccessTokenFromCookie();
  const res = await getRequest(`/appointment/${id}`, token).catch((err) => {
    throw err;
  });

  return res;
};

export const updateAppointment = async (id: number, data: any) => {
  const token = getAccessTokenFromCookie();
  const res = await putRequest(`/appointment/${id}`, data, token).catch(
    (err) => {
      throw err;
    }
  );

  return res;
};

export const deleteAppointment = async (id: number) => {
  const token = getAccessTokenFromCookie();
  const res = await deleteRequest(`/appointment/${id}`, token).catch((err) => {
    throw err;
  });

  return res;
};
