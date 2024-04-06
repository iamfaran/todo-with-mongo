import { SignInGoogle } from "@/components/SignInGoogle";
export default function Home() {
  console.log("Home");
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen flex justify-center items-center">
      <main>
        <h1 className="text-center mb-3">Todos</h1>
        <SignInGoogle />
      </main>
    </div>
  );
}
