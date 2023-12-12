import { useEffect, useState } from "react";
import auth from "../firebase/auth";

const useUserLoggedIn = () => {
  if (auth.currentUser) {
    return true;
  }
  return false;
};
export default useUserLoggedIn;
