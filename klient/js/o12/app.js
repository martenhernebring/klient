const app1 = {
  data() {
    return {
      ovn: 'Övning1',
    }
  },
  methods: {
    helloWorld() {
      console.log('Hello World')
    }
  }
}

const app2 = {
  data() {
    return {
      ovn: 'Övning2',
    }
  },
  methods: {
    helloWorld() {
      console.log('Hello World')
    }
  }
}

Vue.createApp(app1).mount("#app1")
Vue.createApp(app2).mount("#app2")