<template>
  <div class="users-row">
    <div class="users-row__column">
      <span v-if="user.parentPhone">&#43;</span>
      <span class="users-row__text">{{ user.name }}</span>
    </div>
    <div class="users-row__column">
      <span class="users-row__text">{{ user.phone }}</span>
    </div>
    <UsersRow class="users-row__child" v-for="child in user.children" :key="child.phone" :user="child" />
</div>
</template>
<style lang="scss" src="./UsersRow.scss"></style>
<script src="./UsersRow.js"></script>