<template>
  <v-snackbar :value="value" :timeout="timeout" @input="handleInput">
    {{ message }}
    <v-btn color="error" text @click="handleInput">Close</v-btn>
  </v-snackbar>
</template>
<script>
export default {
  props: {
    message: { default: 'An error occurred. Please try again later.' },
    timeout: { default: 6000 },
    value: { default: false }
  },
  data: () => ({
  }),
  methods: {
    handleInput() {
      this.$emit('input', false)
    }
  }
}
</script>
