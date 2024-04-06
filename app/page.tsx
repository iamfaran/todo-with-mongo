import { SignInGoogle } from "@/components/SignInGoogle";
export default function Home() {
  console.log("Home");
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen">
      Auth Page
      <SignInGoogle />
    </div>
  );
}
