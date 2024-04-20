import { SignInGoogle } from "@/components/SignInGoogle";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen flex justify-center items-center">
      <main>
        <h1 className="text-center mb-3">Todos</h1>
        <SignInGoogle />
      </main>
    </div>
  );
}
