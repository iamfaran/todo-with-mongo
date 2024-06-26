"use client";
import React, { useEffect } from "react";
import { SignInGoogle } from "@/components/SignInGoogle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { data: session } = useSession();
  console.log(session);
  // if session is active, redirect to TODO page
  const router = useRouter();
  useEffect(() => {
    if (session) {
      // If there's a session, redirect to the TODO page
      router.push("/todos");
    }
  }, [session, router]);

  if (session) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="bg-slate-900 min-h-screen flex justify-center">
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-center text-xl mb-3 text-white">Todos App</h1>
        <SignInGoogle />
      </main>
    </div>
  );
};

export default SignIn;
