<template>
  <div class="users-table">
    <UsersHeader />
    <UsersRow v-for="item in mainUsers" :key="item.phone" :user="item" />
    <span class="users-table__empty" v-if="$props.users.length == 0">
      Список пуст
    </span>
  </div>
</template>
<style lang="scss" src="./UsersTable.scss"></style>
<script src="./UsersTable.js"></script>