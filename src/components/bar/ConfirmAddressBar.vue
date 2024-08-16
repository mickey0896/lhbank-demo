<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '../../routers';
import { useEditStore } from '../../stores/useEditStore';

const route = useRoute();
const props = defineProps({
  getUsers: {
    type: Object,
    required: true,
  },
});
const edit = (edit:string) => {
  useEditStore.edit = edit
  router.push({ path: `/coupon/view/${props.getUsers.filter((datas:any) => datas.id === route.params.id).map((data:any) => data.id)}` })
}
</script>

<template>
  <div class="position-relative">
    <div class="card border-0 shadow-sm text-center div-confirm-address-bar">
      <div class="mx-4 mt-3">
        <div class="row justify-content-center">
          <div class="col-5">
            <button
              type="button"
              class="btn tn btn-outline-secondary button-edit-address-bar"
              @click="edit('edit')"
            >
              แก้ไขที่อยู่
            </button>
          </div>
          <div class="col-5">
            <button
              type="submit"
              class="btn btn-primary button-confirm-address-bar"
              data-bs-toggle="modal"
              data-bs-target="#confirmAddress"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.div-confirm-address-bar {
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0px;
  border-radius: 50px 50px 0px 0px;
  z-index: 2;
}
/* .button-coupon-view {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-bg: #88bdc0;
  --bs-btn-border-color: #88bdc0;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
} */
.button-confirm-address-bar {
  border-radius: 100px;
  width: 100%;
  height: 55px;
  --bs-btn-bg: #8da4c0;
  --bs-btn-border-color: #8da4c0;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
}
.button-edit-address-bar {
  border-radius: 100px;
  width: 100%;
  height: 55px;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
}
</style>
