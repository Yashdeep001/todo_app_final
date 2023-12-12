import { useEffect, useState } from "react";
import auth from "../firebase/auth";

const useUser = (initial) => {
  const [user, setUser] = useState(initial);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  return user;
};
export default useUser;
