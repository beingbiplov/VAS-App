import { getAccessTokenFromCookie } from "../cookie/authCookie";

import {
  postRequest,
  getRequest,
  putRequest,
  deleteRequest,
} from "./serverCall";

export const addVaccinationService = async (data: any) => {
  const res = await postRequest("/vaccination-service", data).catch((err) => {
    throw err;
  });

  return res;
};

export const getVaccinationServices = async () => {
  const token = getAccessTokenFromCookie();
  const res = await getRequest("/vaccination-service", token).catch((err) => {
    throw err;
  });

  return res;
};

export const getVaccinationService = async (id: number) => {
  const token = getAccessTokenFromCookie();
  const res = await getRequest(`/vaccination-service/${id}`, token).catch(
    (err) => {
      throw err;
    }
  );

  return res;
};

export const updateVaccinationService = async (id: number, data: any) => {
  const token = getAccessTokenFromCookie();
  const res = await putRequest(`/vaccination-service/${id}`, data, token).catch(
    (err) => {
      throw err;
    }
  );

  return res;
};

export const deleteVaccinationService = async (id: number) => {
  const token = getAccessTokenFromCookie();
  const res = await deleteRequest(`/vaccination-service/${id}`, token).catch(
    (err) => {
      throw err;
    }
  );

  return res;
};
