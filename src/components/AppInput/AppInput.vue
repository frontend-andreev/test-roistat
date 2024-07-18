<template>
  <div class="app-input">
    <label for="#" class="app-input__label">{{ $props.label }}</label>
    <div class="app-input__field" :class="{'app-input__field_invalid': $props.error}">
      <input v-mask="$props.mask" :placeholder="$props.placeholder" type="text" @focus="isFocus = true" @blur="isFocus = false" :value="value" @input="updateValue" />
    </div>
    <span class="app-input__error">{{ $props.error }}</span>
  </div>
</template>

<script src="./AppInput.js"></script>
<style lang="scss" scoped src="./AppInput.scss"></style>
