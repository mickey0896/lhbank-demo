<script setup lang="ts"></script>

<template>
  <div class="position-relative w-100 h-100">
    <div class="size-page m-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.size-page {
  max-width: 500px;
  width: 100%;
  height: auto;
}
.icons {
  width: 25px;
  margin-top: -10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<style>
.modal-open {
  padding: 0 !important;
}

.modal-backdrop {
  width: 100%;
  height: 100%;
}

.modal {
  padding-right:0px !important;
  padding: 2rem !important;
}
</style>
