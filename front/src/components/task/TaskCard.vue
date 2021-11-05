<template>
  <li>
    <p>
      <span class="highlight">{{ taskName }}</span> task with priority
      <span :class="ratingClass">{{ taskPriority }}</span
      >.
    </p>
  </li>
</template>

<script>
export default {
  props: ['taskName', 'taskPriority'],
  computed: {
    ratingClass() {
      return 'highlight priority--' + this.taskPriority;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3,
p {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.highlight {
  font-weight: bold;
}

.priority--hight {
  color: #b80056;
}

.priority--middle {
  color: #330075;
}

.priority--low {
  color: #008327;
}
</style>