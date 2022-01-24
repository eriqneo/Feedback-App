<script>
  import { FeedbackStore } from "../stores";
  import { scale, fade } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  //let feedback = [];
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem item={fb} />
  </div>
{/each}
