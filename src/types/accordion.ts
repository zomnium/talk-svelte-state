import type { Readable } from "svelte/store";

export type Accordion = {
  register: (title: string) => void;
  get: (title: string) => Readable<boolean>;
  toggle: (title: string) => void;
};

export type AccordionItem = {
  title: string;
  isOpen: boolean;
};
