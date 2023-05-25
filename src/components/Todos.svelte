<script lang="ts">
  import { todosService } from "../services/todos.service";
  import type { Filter } from "../types/todo";

  export let filter: Filter = "all";

  // Get filtered todos, or all if no filter is set
  const filteredTodos =
    filter === "all"
      ? todosService
      : todosService.filterIsDone(filter === "done");
</script>

<h2 class="title">{filter}</h2>

{#if $filteredTodos.length > 0}
  <ul class="todos">
    {#each $filteredTodos as todo (todo.id)}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li
        title={todo.id}
        class="todo"
        class:isDone={todo.isDone}
        on:click={() => todosService.toggle(todo.id)}
      >
        {todo.title}
      </li>
    {/each}
  </ul>
{:else}
  <p><em>No tasks found...</em></p>
{/if}

<style>
  .title {
    text-transform: capitalize;
  }
  .todos {
    text-align: left;
    list-style: square;
  }
  .todo {
    cursor: pointer;
  }
  .isDone {
    text-decoration: line-through;
  }
</style>
