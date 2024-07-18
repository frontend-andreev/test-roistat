export default {
  name: "AppInput",
  props: {
    placeholder: String,
    label: String,
    value: String,
    error: String,
    mask: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
    }
  },
}