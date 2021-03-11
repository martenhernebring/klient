const app = {
  data() {
    return {
      message: '',
    }
  },
  created() {
    this.message = 'Hello World!'
  },
  methods: {
    hello(thing) {
      if(thing === 'world'){
        console.log(this.message)
      } else {
        console.log(thing)
      }
    },
  },
}

Vue.createApp(app).mount('#app')
