<template>
  <div class="users-header">
    <div class="users-header__column" @click="sortUsers">
      <span>Имя</span>
      <span>&darr;</span>
    </div>
    <div class="users-header__column">
      <span>Телефон</span>
    </div>
  </div>
</template>
<style lang="scss" src="./UsersHeader.scss"></style>
<script src="./UsersHeader.js"></script>