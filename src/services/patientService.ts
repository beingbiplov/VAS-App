import { message } from "antd";
import { getAccessTokenFromCookie } from "../cookie/authCookie";

import { postRequest, getRequest } from "./serverCall";

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
    console.log(err.response.data.message);

    throw err;
  });

  return res;
};
