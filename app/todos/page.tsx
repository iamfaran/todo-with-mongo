import { Todos } from "@/components/Todos";
import SunMoon from "@/components/SunMoon";
import { ToastContainer } from "react-toastify";

export default function TodosPage() {
  return (
    <div className="bg-gray-100 dark:bg-slate-900 h-screen">
      <ToastContainer />
      <SunMoon />
      <Todos />
    </div>
  );
}
