const app = {
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    setInterval(() => this.count++, 2000)
  },
}
Vue.createApp(app).mount('#app')
