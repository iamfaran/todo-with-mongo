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
    <div className="bg-gray-100 dark:bg-slate-900 h-screen flex justify-center items-center">
      <main>
        <h1 className="text-center mb-3">Todos</h1>
        <SignInGoogle />
      </main>
    </div>
  );
};

export default SignIn;