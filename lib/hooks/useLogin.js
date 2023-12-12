import { useEffect } from "react";
import useUserLoggedIn from "./useUserLoggedIn";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const loggedIn = useUserLoggedIn();
  useEffect(() => {
    if (loggedIn) {
      router.push("/");
    }
  }, [loggedIn]);
}
