import { Todos } from "@/components/Todos";
import SunMoon from "@/components/SunMoon";

export default function TodosPage() {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen relative">
      <SunMoon />
      <Todos />
    </div>
  );
}
