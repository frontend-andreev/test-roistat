export default {
  name: "AppSelect",
  props: {
    value: String,
    label: String,
    options: Array
  },
  methods: {
    updateValue(e) {
     this.$emit('input', e.target.value);
    }
  },
  mounted() {
    console.log(`Пицца: ${this.value}`);
  }
}