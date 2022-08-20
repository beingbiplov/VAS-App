import { getAccessTokenFromCookie } from "../cookie/authCookie";

import { postRequest, getRequest, putRequest } from "./serverCall";

export const registerPatient = async (data: any) => {
  const res = await postRequest("/patient", data).catch((err) => {
    console.log(err.response.data.message);

    throw err;
  });

  return res;
};

export const getPatients = async () => {
  const token = getAccessTokenFromCookie();
  const res = await getRequest("/patient", token).catch((err) => {
    throw err;
  });

  return res;
};

export const getPatient = async (id: number) => {
  const token = getAccessTokenFromCookie();
  const res = await getRequest(`/patient/${id}`, token).catch((err) => {
    throw err;
  });

  return res;
};

export const updatePatient = async (id: number, data: any) => {
  const res = await putRequest(`/patient/${id}`, data).catch((err) => {
    throw err;
  });

  return res;
};
