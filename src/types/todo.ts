export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

export type Filter = "all" | "todo" | "done";
