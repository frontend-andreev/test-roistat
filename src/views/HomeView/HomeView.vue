<template>
  <div class="home">
    <UsersTable class="home__table" :users="users" /> 
    <AppButton class="home__button" @click="changeModalState">
      <span>Добавить</span>
    </AppButton>
    <Transition name="fade">
      <AppPopup class="home__popup" v-if="modalIsOpen" @close="changeModalState" :title="'Добавление нового пользователя'">
        <template v-slot:fields>
          <AppInput :error="$v.form.name.$error ? 'Field Name is invalid' : ''" v-model="form.name" :label="'Имя'" />
          <AppInput :error="$v.form.phone.$error ? 'Field Phone is Invalid' : ''" v-mask="'+7 ### ### ## ##'" v-model="form.phone" :label="'Телефон'" />
          <AppSelect v-model="form.parentPhone" :label="'Начальник'" :options="options" /> 
        </template>
        <template v-slot:actions>
          <AppButton class="home__popup-button" @click="savePopup();">
            <span>Сохранить</span>
          </AppButton>
        </template>
      </AppPopup>
    </Transition>
  </div>
</template>
<script src="./HomeView.js"></script>
<style lang="scss" src="./HomeView.scss"></style>