"use client";
import * as React from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { addTodo } from "@/lib/firebase/todos";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import auth from "@/lib/firebase/auth";

export default function AddPage(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const router = useRouter();
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
      } else {
        router.push("/login");
      }
    });
  }, []);
  const handleAdd = () => {
    try {
      addTodo(title, description);
      router.back();
    } catch (e) {
      alert(e);
    }
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add Todo
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputField
                label={"Title"}
                id={"title"}
                placeholder={"I'll do..."}
                value={title}
                onTextChange={setTitle}
              />
              <InputField
                label={"Description"}
                multiline={true}
                id={"description"}
                placeholder={"Bla bla..."}
                value={description}
                onTextChange={setDescription}
              />

              <CustomButton
                text="Add"
                onClick={(e) => {
                  e.preventDefault();
                  handleAdd();
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
