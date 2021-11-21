<template>
  <li>
    <base-card>
      <header>
        <img :src="getImageUrl(task.task_img)"   width="500" height="600">
        <h3>{{ task.title }} -  Author : {{ task.user_id }} </h3>
        <base-button mode="flat" @click="removeTask(task.id)">Delete</base-button>
      </header>
      <p>
        {{ task.description }}
        <span :class="ratingClass">{{ task.priority }}</span>
      </p>
    </base-card>
  </li>
</template>

<script>
const BASE_REST_API_URL = process.env.VUE_APP_API_URL;

export default {
  props: ['task'],
  inject: ['removeTask'],
  computed: {
    ratingClass() {
      return 'highlight priority--' + this.task.priority;
    },
  },
  methods: {
    getImageUrl(imageName){
      console.log(BASE_REST_API_URL + "/" + imageName)
      return BASE_REST_API_URL + "/" + imageName;

    }
  }
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
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