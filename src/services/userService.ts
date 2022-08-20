import jwt_decode from "jwt-decode";
import { message } from "antd";

import { postRequest, getRequest } from "./serverCall";

import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
  removeUserAuthCookie,
  setAccessTokenCookie,
} from "../cookie/authCookie";

export const loginUser = async (data: any) => {
  const res = await postRequest("/users/auth/login", data).catch((err) => {
    throw err;
  });

  return res;
};

export const logoutUser = () => {
  removeUserAuthCookie();
  message.error("Session expired, please login again");
  window.location.reload();
};

export const getAccessTokenFromRefresh = async () => {
  const refreshToken = getRefreshTokenFromCookie();
  if (refreshToken) {
    await postRequest("/users/auth/token", {
      refresh_token: refreshToken,
    })
      .then((data) => {
        setAccessTokenCookie(data.data.data);
      })
      .catch((err) => {
        logoutUser();
      });
  } else {
    logoutUser();
  }
};

export const verifyToken = async () => {
  const token = getAccessTokenFromCookie();

  if (token) {
    const data = jwt_decode(token) as {
      data: number;
      exp: number;
      iat: number;
    };
    if (Math.floor(Date.now() / 1000) >= data.exp) {
      await getAccessTokenFromRefresh();
    }
  } else {
    await getAccessTokenFromRefresh();
  }
};

export const getUserById = async (id: number) => {
  const token = getAccessTokenFromCookie();

  const res = await getRequest(`/users/${id}`, token).catch((err) => {
    throw err;
  });

  return res;
};
