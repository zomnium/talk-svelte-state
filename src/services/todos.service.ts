import { writable, derived, type Readable } from "svelte/store";
import type { Todo } from "../types/todo";

/**
 * NOPE :(
 */

export const todos = writable([]);

/**
 * YUP :)
 */

const createTodosService = () => {
  const todos = writable<Todo[]>([]);
  const { subscribe } = todos;

  // const all: Readable<Todo[]> = { subscribe }

  const add = ({ title, isDone }): void => {
    const id = Math.random().toString(36).substr(2, 9);
    const todo: Todo = { id, title, isDone };

    todos.update(($todos) => {
      return [...$todos, todo];
    });
  };

  const toggle = (id: string): void => {
    todos.update(($todos) => {
      return $todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
    });
  };

  const remove = (targetId: string): void => {
    todos.update(($todos) => {
      return $todos.filter(({ id }) => id !== targetId);
    });
  };

  const filterIsDone = (isDoneFilter: boolean): Readable<Todo[]> => {
    return derived(todos, ($todos) => {
      return $todos.filter(({ isDone }) => isDone === isDoneFilter);
    });
  };

  // Expose public methods
  return {
    subscribe,
    add,
    toggle,
    remove,
    filterIsDone,
  };
};

export const todosService = createTodosService();

// todosService.subscribe((todos) => console.log("todos", todos));

/**
 * Add some demo data
 */

todosService.add({
  title: "Learn Svelte",
  isDone: false,
});
todosService.add({
  title: "Learn SvelteKit",
  isDone: false,
});
todosService.add({
  title: "Check out awesome demo",
  isDone: false,
});
