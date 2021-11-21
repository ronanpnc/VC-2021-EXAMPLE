<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>



<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
<style scoped>
button {
  font: inherit;
  border: 1px solid var(--main-color);
  background-color: var(--main-color);
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

.flat {
  background-color: transparent;
  color: var(--main-color);
  border: none;
}

button:hover,
button:active {
  background-color: var(--main-color-light);
  border-color: var(--main-color-light);
}
</style>