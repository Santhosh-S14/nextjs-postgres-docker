import prisma from "@/lib/db";
import { addTask } from "./actions/actions";

export default async function Home() {
  const tasks = await prisma.task.findMany();
  return (
    <main className="flex bg-zinc-200 min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl text-black font-medium">All tasks</h1>
      <ul className="my-10 text-center">
        {tasks.map((task) => (
          <li key={task.id} className="text-black">
            {task.title}
          </li>
        ))}
      </ul>
      <form action={addTask} className="space-x-2 h-4">
        <input
          type="text"
          name="title"
          className="px-3 py-1 rounded text-black"
        ></input>
        <button
          type="submit"
          className="px-3 py-1 rounded text-white bg-blue-500"
        >
          Add task
        </button>
      </form>
    </main>
  );
}
