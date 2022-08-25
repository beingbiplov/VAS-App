import React from "react";

import { logoutUser } from "../../services/userService";

export const Logout = (): any => {
  const logout = (): any => {
    logoutUser();
  };
  return (
    <p>
      <a onClick={logout}>Logout</a>
    </p>
  );
};
