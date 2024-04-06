import { Todos } from "@/components/Todos";
import Image from "next/image";

export default function TodosPage() {
  console.log("Home");
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen">
      <Todos />
    </div>
  );
}
