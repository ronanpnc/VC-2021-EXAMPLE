<template>
  <section>
    <base-card>
      <h2>Task Manager ({{ getMode() }} )</h2>
      <form @submit.prevent="addTasks">
        <div class="form-control">
          <label for="name">Your task to do</label>
          <input type="text" id="name" name="name" v-model.trim="taskName" />
        </div>
        <h3>Priority ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="priority-hight"
            value="hight"
            name="priority"
            v-model="chosenPriority"
          />
          <label for="priority-hight">hight</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="priority-middle"
            value="middle"
            name="priority"
            v-model="chosenPriority"
          />
          <label for="priority-middle">middle</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="priority-low"
            value="low"
            name="priority"
            v-model="chosenPriority"
          />
          <label for="priority-low">low</label>
        </div>
        <p class="error" v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      taskName: '',
      chosenPriority: null,
      invalidInput: false,
    };
  },
  emits: ['task-added'],
  methods: {
    getMode() {
      return process.env.VUE_APP_MODE;
    },

    addTasks() {
      if (this.taskName === '' || !this.chosenPriority) {
        this.invalidInput = true;
      } else {
        this.invalidInput = false;

        this.$emit('task-added', {
          taskName: this.taskName,
          taskPriority: this.chosenPriority,
        });

        this.taskName = '';
        this.chosenPriority = null;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}

.error {
  color: crimson;
}
</style>