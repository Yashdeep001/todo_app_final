import {
  addDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { getFirestore, Firestore } from "firebase/firestore";
import app from ".";
import auth from "./auth";

const db = getFirestore(app);

export async function getTodos() {
  if (auth.currentUser === null) {
    return [];
  } else {
    const email = auth.currentUser.email;
    const todos = collection(db, "todos");
    const q = query(todos, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const todosList = [];
    querySnapshot.forEach((doc) => {
      todosList.push({ todo: doc.data(), id: doc.ref.id });
    });
    return todosList;
  }
}

export async function addTodo(title, description) {
  const todos = collection(db, "todos");
  await addDoc(todos, {
    title,
    description,
    email: auth.currentUser.email,
    created_at: Date.now(),
  });
}

export async function deleteTodo(id) {
  await deleteDoc(doc(db, "todos", id));
}

export async function updateTodo(id, title, description) {
  await updateDoc(doc(db, "todos", id), {
    title,
    description,
  });
}
