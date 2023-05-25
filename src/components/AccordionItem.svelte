<script lang="ts">
  import { getContext } from "svelte";
  import type { Accordion } from "../types/accordion";

  export let title: string;

  // Get the accordion instance from context
  const accordion = getContext<Accordion>("accordion");

  // Add current component to the accordion instance
  accordion.register(title);

  // Get state for this accordion item
  const isOpen = accordion.get(title);

  // Toggle state of this accordion item
  const onToggle = () => accordion.toggle(title);
</script>

<div class="accordion-item" class:isOpen={$isOpen}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <h3 class="title" on:click={onToggle}>{title}</h3>
  <div class="content">
    <p class="text"><slot /></p>
  </div>
</div>

<style>
  .accordion-item {
    border: 1px solid #ccc;
    border-radius: 0.25em;
    margin-bottom: 0.5em;
  }

  .title {
    margin: 0;
    padding: 0.5em;
    background-color: #eee;
    color: #242424;
    cursor: pointer;
  }

  .content {
    margin: 0;
    background-color: #fff;
    color: #242424;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  .isOpen .content {
    max-height: 210px;
  }

  .text {
    padding: 0.5em;
  }
</style>
