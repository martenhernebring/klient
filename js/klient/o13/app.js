const app = {
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    this.$refs.messages.append('hejsan världen')
    },
    created() {
    this.message = 'Hello World!';
  },
  methods: {
    helloWorld() {
      console.log(this.message)
    },
  },
}

Vue.createApp(app).mount('#app')
