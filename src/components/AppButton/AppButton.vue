<template>
  <button class="app-button" @click="$emit('click')">
    <slot></slot>
</button>
</template>
<style lang="scss" src="./AppButton.scss"></style>
<script src="./AppButton.js"></script>