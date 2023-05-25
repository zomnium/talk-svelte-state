<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Route } from "../types/route";

  export let currentRoute: Route;

  const dispatch = createEventDispatcher<{
    navigate: Route;
  }>();

  function onNavigate(route: Route) {
    dispatch("navigate", route);
  }
</script>

<p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class:isActive={currentRoute === "todos"}
    on:click={() => onNavigate("todos")}>All to do's</a
  >
  |
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class:isActive={currentRoute === "todo"}
    on:click={() => onNavigate("todo")}>To do</a
  >
  |
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class:isActive={currentRoute === "done"}
    on:click={() => onNavigate("done")}>Done</a
  >
  |
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    class:isActive={currentRoute === "count"}
    on:click={() => onNavigate("count")}>Count</a
  >
</p>

<style>
  .isActive {
    text-decoration: underline;
  }
</style>
