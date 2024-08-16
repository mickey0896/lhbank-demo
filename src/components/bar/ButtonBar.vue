<script setup lang="ts">

const props = defineProps({
  getUsers: {
    type: Object,
    required: true,
  },
  toggle: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
  class="position-relative menu-bar-wrapper w-100 h-100"
    v-for="listData in props.getUsers.filter((datas:any) => datas.id === $route.params.id)"
  >
    <div v-if="listData.amount >= 1" class="menu-bar-wrapper">
      <div v-if="listData.is_already === true">
        <div class="div-menu-bar card border-0 shadow-sm text-center">
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-primary button-coupon-view-already"
              disabled
            >
              ใช้สิทธิ์แล้ว
            </button>
          </div>
        </div>
      </div>
      <div v-if="listData.is_already === false">
        <!-- type code -->
        <!-- <div v-if="listData.status === 0">
          <div class="div-menu-bar card border-0 shadow-sm text-center">
            <div class="mt-3">
              <button
                type="button"
                class="btn btn-primary button-coupon-view"
                :data-bs-toggle="props.toggle"
                :data-bs-target="props.target"
              >
                แลกฟรี
              </button>
            </div>
          </div>
        </div> -->
        <!-- type from -->
        <div>
          <div class="div-menu-bar card border-0 shadow-sm text-center h">
            <div class="mt-3">
              <button
                type="button"
                class="btn btn-primary button-coupon-view"
                :data-bs-toggle="props.toggle"
                :data-bs-target="props.target"
              >
                แลกฟรี
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="listData.amount === 0">
      <div>
        <div class="div-menu-bar card border-0 shadow-sm text-center">
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-primary button-coupon-view-already"
              disabled
            >
              สิทธิ์หมด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
  z-index: 2;
}
.button-coupon-view {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-bg: #88bdc0;
  --bs-btn-border-color: #88bdc0;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
}
.button-coupon-view-already {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-disabled-bg: #bcbec0;
  --bs-btn-disabled-border-color: #bcbec0;
}
</style>
