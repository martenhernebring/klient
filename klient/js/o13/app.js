const labelInput = {
  props: ['label', 'name'],
  template: `<label>{{label}} <input type="text" :name="name"></label>`
}

const app = {
  components: {
    labelInput
  }
}

const vueApp = Vue.createApp(app)

//vueApp.component('label-input', labelInput)

vueApp.mount('#app')
