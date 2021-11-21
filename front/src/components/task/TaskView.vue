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
import axios from 'axios';

const BASE_REST_API_URL = process.env.VUE_APP_API_URL;

export default {
  components: {
    TaskDialog,
    TaskCard,
  },
  data() {
    return {
      isDialogVisible: false,
      allTasks: [],
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

    //------------------------------------------------------------------------------
    // REST API
    //------------------------------------------------------------------------------

    addTask(task) {
      const newTask = {
        title: task.title,
        description: task.description,
        user_id: parseInt(task.user_id),
      };
      axios.post(BASE_REST_API_URL + '/api/tasks', newTask).then((response) => {
        this.allTasks.push(response.data.task);
      });
    },

    getTask() {
      axios.get(BASE_REST_API_URL + '/api/tasks').then((response) => {
        this.allTasks = response.data;
      });
    },

    removeTask(taskId) {
      axios
        .delete(BASE_REST_API_URL + '/api/tasks/' + taskId)
        .then(() => {
          const resIndex = this.allTasks.findIndex((res) => res.id === taskId);
          this.allTasks.splice(resIndex, 1);
        });
    },
  },
  provide() {
    return {
      removeTask: this.removeTask,
    };
  },
  mounted() {
    this.getTask();
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
