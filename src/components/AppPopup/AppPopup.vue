<template>
  <div class="app-popup" @click.self="$emit('close')">
    <div class="app-popup__content">
      <div class="app-popup-header">
        <span class="app-popup-title">{{ $props.title }}</span>
        <span @click="$emit('close')" class="app-popup-close">&#10006;</span>
      </div>
      <form action="#" class="app-popup-form">
        <slot name="fields"></slot>
      </form>
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<style lang="scss" src="./AppPopup.scss"></style>
<script src="./AppPopup.js"></script>