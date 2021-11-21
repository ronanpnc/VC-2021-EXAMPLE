<template>
  <section>
    <h2>Task Manager ({{ getMode() }} )</h2>
    <base-button class="right-main-button" @click="showDialog"
      >Create !</base-button
    >
    <task-dialog
      v-if="isDialogVisible"
      @addTask="addTask"
      @hideDialog="hideDialog"
    ></task-dialog>
    <ul>
      <task-card
        v-for="task in allTasks"
        :key="task.id"
        :task="task"
      ></task-card>
    </ul>
  </section>
</template>

<script>
import TaskDialog from './TaskDialog.vue';
import TaskCard from './TaskCard.vue';

export default {
  components: {
    TaskDialog,
    TaskCard,
  },
  data() {
    return {
      isDialogVisible: false,
      allTasks: [
        {
          id: 'id1',
          title: 'task1',
          priority: 'hight',
          description: 'my task 1',
          author: 'ronan',
          image: 'test.png',
        },
        {
          id: 'id2',
          title: 'task2',
          priority: 'middle',
          description: 'my task 2',
          author: 'ronan',
          image: 'test.png',
        },
        {
          id: 'id3',
          title: 'task3',
          priority: 'hight',
          description: 'my task 3',
          author: 'rady',
          image: 'test.png',
        },
      ],
    };
  },
  methods: {
    getMode() {
      return process.env.VUE_APP_MODE;
    },

    hideDialog() {
      this.isDialogVisible = false;
    },

    showDialog() {
      this.isDialogVisible = true;
    },

    removeTask(taskId) {
      const resIndex = this.allTasks.findIndex((res) => res.id === taskId);
      this.allTasks.splice(resIndex, 1);
    },
    addTask(task) {
      const newTask = {
        title: task.title,
        description: task.description,

        id: new Date().toISOString(), // hard coded for now
        priority: 'low', // hard coded for now
        author: 'ronan', // hard coded for now
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.right-main-button {
  float: right;
  margin-right: 4rem;
}
</style>