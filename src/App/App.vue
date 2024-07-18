<template>
  <div id="app">
    <Component :is="layout">
      <router-view></router-view>
    </Component>
  </div>
</template>
<style lang="scss" src="./App.scss"></style>
<script src="./App.js"></script>
