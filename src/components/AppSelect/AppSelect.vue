<template>
<div>
  <label for="#">{{ $props.label }}</label>
  <select name="#" id="#" class="app-select" @change="updateValue" :value="$props.value">
    <option :value="item.value" v-for="(item) in $props.options" :key="item.value">{{ item.option }}</option>
  </select>
</div>
</template>
<script src="./AppSelect.js"></script>
<style lang="scss" src="./AppSelect.scss"></style>
