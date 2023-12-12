"use client";
import auth, { signOut } from "@/lib/firebase/auth";
import { deleteTodo, getTodos } from "@/lib/firebase/todos";
import { useRouter } from "next/navigation";
import {
  Card,
  FluentProvider,
  teamsLightTheme,
  Button,
  Spinner,
} from "@fluentui/react-components";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        router.push("/login");
      }
    });
  }, []);
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
      setLoading(false);
    });
  }, [loggedIn]);
  return (
    <FluentProvider theme={teamsLightTheme}>
      {loading || !loggedIn ? (
        <div className="h-screen flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="h-screen flex justify-center pt-20">
          <div className="w-1/3 max-sm:w-screen">
            {todos.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-semibold">No todos yet</h1>
                <Button
                  appearance="primary"
                  className="mt-3"
                  onClick={() => router.push("/add")}
                >
                  Add
                </Button>
              </div>
            )}
            {todos.map((todo) => (
              <Card key={todo.id} className="mb-3">
                <h1 className="font-bold">{todo.todo.title}</h1>
                <h1>{todo.todo.description}</h1>
                <div className="flex flex-1 gap-3">
                  <Button
                    appearance="secondary"
                    className="flex-1"
                    onClick={() => {
                      router.push(
                        `/update/${todo.id}?title=${todo.todo.title}&description=${todo.todo.description}`
                      );
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    appearance="primary"
                    onClick={() => {
                      setLoading(true);
                      deleteTodo(todo.id)
                        .then(() => {
                          getTodos().then((res) => {
                            setTodos(res);
                            setLoading(false);
                          });
                        })
                        .catch((e) => {
                          setLoading(false);
                          alert(e);
                        });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      <div className="absolute top-4 right-4 gap-3 flex">
        <Button appearance="secondary" onClick={() => router.push("/add")}>
          New
        </Button>
        <Button
          appearance="primary"
          onClick={() => {
            signOut().then(() => {
              router.push("/login");
            });
          }}
        >
          Logout
        </Button>
      </div>
    </FluentProvider>
  );
}
