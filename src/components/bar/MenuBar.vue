<script setup lang="ts">
import router from "../../routers";

const handleChangePath = (path: string) => {
  if (path === "history") {
    router.push({ path: "/history" });
  } 
  else if(path === "refresh") {
   router.go(0)
  }
  else {
    router.push({ path: "/" });
  }
};
</script>

<template>
  <div class="position-relative menu-bar-wrapper">
    <div>
      <div class="div-menu-bar card border-0 shadow-sm text-center">
        <div class="row mt-5">
          <!-- สิทธิพิเศษ -->
          <div
            class="col icons-menu-bar-88bdc0"
            @click="handleChangePath('refresh')"
            v-if="$route.name === 'home-page'"
          >
            <img
              src="/src/assets/images/icons/svg/gift-icon.svg"
              alt=""
              class="icons-menu-bar-88bdc0"
            />
            <p class="text-color-menu-bar-88bdc0">สิทธิพิเศษ</p>
          </div>
          <div
            class="col icons-menu-bar"
            @click="handleChangePath('')"
            v-if="$route.name === 'history-reward'"
          >
            <img
              src="/src/assets/images/icons/svg/gift-icon.svg"
              alt=""
              class="icons-menu-bar"
            />
            <p class="text-color-menu-bar">สิทธิพิเศษ</p>
          </div>
          <!-- ประวัติ -->
          <div
            class="col icons-menu-bar"
            @click="handleChangePath('history')"
            v-if="$route.name === 'home-page'"
          >
            <img
              src="/src/assets/images/icons/svg/history-icon.svg"
              alt=""
              class="icons-menu-bar"
            />
            <p class="text-color-menu-bar">ประวัติ</p>
          </div>
          <div
            class="col icons-menu-bar-88bdc0"
            @click="handleChangePath('refresh')"
            v-if="$route.name === 'history-reward'"
          >
            <img
              src="/src/assets/images/icons/svg/history-icon.svg"
              alt=""
              class="icons-menu-bar-88bdc0"
            />
            <p class="text-color-menu-bar-88bdc0">ประวัติ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-bar-wrapper {
  height: 100px;
}
.div-menu-bar {
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0px;
  border-radius: 50px 50px 0px 0px;
}
.text-color-menu-bar {
  color: #949494;
}
.text-color-menu-bar:hover {
  color: #88bdc0;
}
.text-color-menu-bar-88bdc0 {
  color: #88bdc0;
}
.text-color-menu-bar-88bdc0:hover {
  color: #88bdc0;
}
.icons-menu-bar {
  width: 25px;
  margin-top: -10px;
  filter: invert(62%) sepia(1%) saturate(0%) hue-rotate(34deg) brightness(93%)
    contrast(100%);
}
.icons-menu-bar:hover {
  filter: brightness(0) saturate(100%) invert(71%) sepia(48%) saturate(198%)
    hue-rotate(135deg) brightness(92%) contrast(90%);
}
.icons-menu-bar-88bdc0 {
  width: 25px;
  margin-top: -10px;
  filter: brightness(0) saturate(100%) invert(71%) sepia(48%) saturate(198%)
    hue-rotate(135deg) brightness(92%) contrast(90%);
}
.icons-menu-bar-88bdc0:hover {
  filter: brightness(0) saturate(100%) invert(71%) sepia(48%) saturate(198%)
    hue-rotate(135deg) brightness(92%) contrast(90%);
}
</style>
