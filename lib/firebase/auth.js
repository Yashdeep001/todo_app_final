import app from "./index.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

export async function signUp(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  console.log(cred);
  return cred;
}

export async function signIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  console.log(cred);
  return cred;
}
export async function signOut() {
  await auth.signOut();
}
export default auth;
