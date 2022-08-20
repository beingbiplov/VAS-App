import Cookies from "js-cookie";

export const setCookieOnLogin = (loginResponseData: any) => {
  Cookies.set("isAuthenticated", "true");

  Cookies.set("accessToken", loginResponseData.data.accessToken);
  Cookies.set("refreshToken", loginResponseData.data.refreshToken);
  Cookies.set("userEmail", loginResponseData.data.userData.email);
  Cookies.set("userId", loginResponseData.data.userData.id);
  Cookies.set("isAdmin", loginResponseData.data.userData.is_admin);
};

export const checkUserAuthentication = (): boolean => {
  const isAuthenticated =
    Cookies.get("isAuthenticated") === "true" ? true : false;
  return isAuthenticated;
};

export const getAccessTokenFromCookie = (): string | undefined => {
  return Cookies.get("accessToken");
};

export const getRefreshTokenFromCookie = (): string | undefined => {
  return Cookies.get("refreshToken");
};

export const setAccessTokenCookie = (token: any) => {
  Cookies.set("isAuthenticated", "true");

  Cookies.set("accessToken", token);
};

export const removeUserAuthCookie = () => {
  Cookies.set("isAuthenticated", "false");
  Cookies.set("isAdmin", "false");
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.set("userEmail", "");
  Cookies.set("userId", "");
};

export const getUserDataFromCookie = () => {
  let id;
  const userEmail = Cookies.get("userEmail");
  const userId = Cookies.get("userId");
  const isAdmin = Cookies.get("isAdmin") === "true" ? true : false;
  const isAuthenticated =
    Cookies.get("isAuthenticated") === "true" ? true : false;
  if (userId) {
    id = +userId;
  } else {
    id = 0;
  }

  return {
    email: userEmail,
    id: id,
    isAdmin: isAdmin,
    isAuthenticated: isAuthenticated,
  };
};
