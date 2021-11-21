<template>
  <base-dialog
    actionName="Create Task"
    title="Create new task"
    @close="hideDialog"
    @doAction="addTask"
  >
    <template #default>
      <div class="form-control">
        <label>User id:</label>
        <input type="text" v-model="user_id" />

        <label>Title:</label>
        <input type="text" v-model="title" />

        <label>Description:</label>
        <textarea rows="4" v-model="description" />
      </div>

      <p class="error" v-if="invalidInput">
        One or more input fields are invalid. Please check your provided data.
      </p>
    </template>
  </base-dialog>
</template>

<script>
export default {
  data() {
    return {
      user_id: '',
      title: '',
      description: '',
      invalidInput: false,
    };
  },
  emits: ['addTask', 'hideDialog'],
  methods: {
    addTask() {
      if (
        this.title === '' ||
        !this.description === '' ||
        !this.user_id === ''
      ) {
        this.invalidInput = true;
      } else {
        this.invalidInput = false;

        this.$emit('addTask', {
          user_id: this.user_id,
          title: this.title,
          description: this.description,
        });

        this.title = '';
        this.description = '';
        this.user_id = '';

        this.hideDialog();
      }
    },
    hideDialog() {
      this.$emit('hideDialog');
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  margin-top: 15px;
}

textarea,
input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}

.error {
  color: crimson;
}
</style>
