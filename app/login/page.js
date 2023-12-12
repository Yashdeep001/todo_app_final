"use client";
import * as React from "react";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { signIn } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputField
                label={"Your Email"}
                id={"email"}
                placeholder={"sample@email.com"}
                type={"email"}
                value={email}
                onTextChange={setEmail}
              />
              <InputField
                label={"Password"}
                id={"password"}
                type={"password"}
                placeholder={"••••••••"}
                value={password}
                onTextChange={setPassword}
              />

              <CustomButton
                text="Login"
                onClick={(e) => {
                  e.preventDefault();
                  signIn(email, password)
                    .then(() => {
                      router.push("/");
                    })
                    .catch((e) => alert(e));
                }}
              />
              <p className="text-sm font-light text-gray-500">
                Don&apos;t have an account yet?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
