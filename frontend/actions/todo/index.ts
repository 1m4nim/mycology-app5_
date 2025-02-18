import { Todo } from "@/types/todo";

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/todos`,
    {
      cache: "no-store",
      // method: "POST",
      // body: JSON.stringify({
      //   title: "トマトを買う"
      // })
    }
  );
  const data = await response.json();
  return data;
};
