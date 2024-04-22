"use client";
import { useTodoContext } from "@/hooks/useTodoContext";
import { Row } from "./Row";
import { AddTodo } from "./AddTodo";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

export const Todos = () => {
  console.log("Todos component rendered");
  const { state } = useTodoContext();
  const { todos } = state;
  const { data: session } = useSession();
  console.log("session", session);

  return (
    <section className="h-screen flex items-center flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full p-3 bg-white dark:bg-slate-800 shadow overflow-hidden sm:rounded-lg space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="font-medium dark:text-white">Todo App</h1>

          {/* Image of Current signed in user */}
          <div className="flex items-center gap-2">
            {session && session.user?.image ? (
              <Image
                src={session.user.image}
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <FaUserAlt className="text-2xl text-gray-500" />
            )}

            {session && (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-gray-500 hover:text-gray-800"
              >
                <span>
                  <CiLogout
                    className="text-2xl text-zinc-50"
                    title="Sign Out"
                    aria-label="Sign Out"
                  />
                </span>
              </button>
            )}
          </div>

          {/* End */}

          {/* Little log out Icon */}

          {/* Ends */}
        </div>
        <AddTodo />
        <div className="h-80 overflow-x-hidden overflow-y-auto todo-list">
          {todos.map((todo) => <Row key={todo._id} {...todo} />).reverse()}
        </div>
      </div>
    </section>
  );
};
