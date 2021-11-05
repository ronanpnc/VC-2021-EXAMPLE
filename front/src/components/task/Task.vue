<template>
  <section>
    <task-form @task-added="addTask"></task-form>

    <base-card>
      <h2>Current tasks</h2>
      <ul>
        <task-card
          v-for="task in allTasks"
          :key="task.id"
          :taskName="task.taskName"
          :taskPriority="task.taskPriority"
        ></task-card>
      </ul>
    </base-card>
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
    addTask(task) {
      const newTask = {
        id: new Date().toISOString(),
        taskName: task.taskName,
        taskPriority: task.taskPriority,
      };
      this.allTasks.push(newTask);
    },
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