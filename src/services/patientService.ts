import { message } from "antd";

import { postRequest, getRequest } from "./serverCall";

export const registerPatient = async (data: any) => {
  const res = await postRequest("/patient", data).catch((err) => {
    console.log(err.response.data.message);

    throw err;
  });

  return res;
};
