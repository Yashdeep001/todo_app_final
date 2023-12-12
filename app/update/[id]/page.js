"use client";
import * as React from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { updateTodo } from "@/lib/firebase/todos";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function UpdatePage(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const { id } = useParams();
  const params = useSearchParams();
  const router = useRouter();
  React.useEffect(() => {
    setTitle(params.get("title") ?? "");
    setDescription(params.get("description") ?? "");
  }, [params]);
  if (!id) {
    throw new Error("No id provided");
  }
  React.useEffect(() => {}, []);
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Update Todo
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
                text="Update"
                onClick={(e) => {
                  e.preventDefault();
                  updateTodo(id, title, description)
                    .then(() => {
                      router.back();
                    })
                    .catch((e) => alert(e));
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
