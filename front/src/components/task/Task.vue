<template>
  <section>
    <task-form @task-added="addTask"></task-form>
    <ul>
      <task-card
        v-for="task in allTasks"
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :priority="task.priority"
      ></task-card>
    </ul>
  </section>
</template>

<script>
import TaskForm from './TaskForm.vue';
import TaskCard from './TaskCard.vue';

export default {
  components: {
    TaskForm,
    TaskCard,
  },
  data() {
    return {
      allTasks: [],
    };
  },
  methods: {
    removeTask(taskId) {
      const resIndex = this.allTasks.findIndex((res) => res.id === taskId);
      this.allTasks.splice(resIndex, 1);
    },
    addTask(task) {
      const newTask = {
        id: new Date().toISOString(),
        name: task.name,
        priority: task.priority,
      };
      this.allTasks.push(newTask);
    },
  },
  provide() {
    return {
      removeTask: this.removeTask,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>