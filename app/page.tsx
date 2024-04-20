import { useSession } from "next-auth/react";
import SignIn from "@/components/SignIn";
export default function Home() {
  return <SignIn />;
}
