"use client";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export const SignInGoogle = () => {
  return (
    <button
      className="bg-white text-slate-900 rounded-md flex items-center px-1 py-2 font-semibold"
      type="button"
      onClick={() => signIn("google")}
    >
      <FaGoogle className="mr-2" />
      Sign in with Google
    </button>
  );
};
