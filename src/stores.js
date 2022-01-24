import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Suspendisse at diam in lorem mattis sagittis a at enim.
                Praesent nec justo dolor. Etiam ornare facilisis ligula, 
                eget bibendum eros ullamcorper nec. `,
  },
  {
    id: 2,
    rating: 9,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Suspendisse at diam in lorem mattis sagittis a at enim.
                Praesent nec justo dolor. Etiam ornare facilisis ligula, 
                eget bibendum eros ullamcorper nec. `,
  },
  {
    id: 3,
    rating: 8,
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Suspendisse at diam in lorem mattis sagittis a at enim.
                Praesent nec justo dolor. Etiam ornare facilisis ligula, 
                eget bibendum eros ullamcorper nec. `,
  },
]);
