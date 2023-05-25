<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Accordion from "./components/Accordion.svelte";
  import AccordionItem from "./components/AccordionItem.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Todos from "./components/Todos.svelte";
  import type { Route } from "./types/route";

  let currentRoute: Route = "todos";
</script>

<main>
  <header class="section">
    <h1>Awesome Demo App</h1>
    <Navigation
      {currentRoute}
      on:navigate={(navigate) => (currentRoute = navigate.detail)}
    />
  </header>

  <section class="section">
    {#if currentRoute === "todos"}
      <Todos />
    {:else if currentRoute === "todo"}
      <Todos filter="todo" />
    {:else if currentRoute === "done"}
      <Todos filter="done" />
    {:else if currentRoute === "count"}
      <div class="card">
        <Counter />
      </div>
    {:else}
      <p>404: Not found</p>
    {/if}
  </section>

  <aside class="section">
    <Accordion title="FAQ">
      <AccordionItem title="But, why?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, quam dignissimos enim sunt soluta distinctio
        praesentium, alias nulla excepturi recusandae harum laboriosam sapiente
        asperiores. Voluptas in placeat quasi corrupti accusantium.
      </AccordionItem>
      <AccordionItem title="Is it GIF or JIF?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        culpa corporis, sequi hic maiores, voluptate earum dolorum, voluptates
        necessitatibus adipisci vitae libero ducimus velit? Laboriosam mollitia
        praesentium perspiciatis odit ipsum.
      </AccordionItem>
      <AccordionItem title="Do you know another question?">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        quisquam, alias quibusdam id cupiditate quaerat obcaecati totam enim
        sequi, fugiat cumque! Natus, iste unde. A obcaecati odit porro aliquid
        vel.
      </AccordionItem>
    </Accordion>

    <Accordion title="Reasons why Svelte is Awesome">
      <AccordionItem title="The syntax is really nice">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, quam dignissimos enim sunt soluta distinctio
        praesentium, alias nulla excepturi recusandae harum laboriosam sapiente
        asperiores. Voluptas in placeat quasi corrupti accusantium.
      </AccordionItem>
      <AccordionItem title="It's quite lightweight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        culpa corporis, sequi hic maiores, voluptate earum dolorum, voluptates
        necessitatibus adipisci vitae libero ducimus velit? Laboriosam mollitia
        praesentium perspiciatis odit ipsum.
      </AccordionItem>
      <AccordionItem title="Just because it is">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        quisquam, alias quibusdam id cupiditate quaerat obcaecati totam enim
        sequi, fugiat cumque! Natus, iste unde. A obcaecati odit porro aliquid
        vel.
      </AccordionItem>
    </Accordion>
  </aside>
</main>

<style>
  .section {
    border-bottom: 1px solid #eee;
    margin: 0 0 1.8rem;
    padding: 0 0 1.8rem;
  }

  .section:last-child {
    border-bottom: none;
  }
</style>
