const app = {
  data() {
    return {
      numbers: []
    }
  },
  methods: {
    addRandomHundred() {
      const min = 1
      const max = 100
      //The maximum is inclusive and the minimum is inclusive
      this.numbers.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
  },
}

Vue.createApp(app).mount('#app')
