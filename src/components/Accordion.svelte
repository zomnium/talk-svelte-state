<script lang="ts">
  import { setContext } from "svelte";
  import { writable, derived, type Readable } from "svelte/store";
  import type { Accordion, AccordionItem } from "./../types/accordion";

  export let title: string;

  // Create a store to hold the accordion items
  const store = writable<AccordionItem[]>([]);

  // Create an accordion instance
  function createAccordion(): Accordion {
    const register = (title: string): void => {
      store.update((items) => [...items, { title, isOpen: false }]);
    };

    const get = (title: string): Readable<boolean> => {
      return derived(store, ($store) => {
        const result = $store.find((item) => item.title === title);
        return result.isOpen;
      });
    };

    const toggle = (title: string): void => {
      store.update((items) =>
        items.map((item) => ({
          ...item,
          isOpen: item.title === title,
        }))
      );
    };

    // Expose the public methods
    return {
      register,
      get,
      toggle,
    };
  }

  // Create an accordion instance
  const accordion = createAccordion();

  // Context to expose the instance to children
  setContext("accordion", accordion);
</script>

<div class="accordion">
  <h2>{title}</h2>
  <slot />
</div>
