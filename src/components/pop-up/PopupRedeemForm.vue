<script setup lang="ts">
import ConfirmCloseMadal from "../../components/modal/ConfirmCloseMadal.vue";
import addressForm from "../form/addressForm.vue";
import router from "../../routers";
import { Ref, ref } from "vue";
import { useModalStore } from "../../stores/useModalStore";
import { useRoute } from "vue-router";
import { useEditStore } from '../../stores/useEditStore';

let validate:Ref<boolean> = ref(false)
const route = useRoute();
const props = defineProps({
  getUsers: {
    type: Object,
    required: true,
  },
});
const submit = (event:any) => {
  event.prevent
  router.push({ path: `/coupon/view/${props.getUsers.filter((datas:any) => datas.id === route.params.id).map((data:any) => data.id)}/confirm` })
};
const onvalidate = () => {
validate.value = true
}
</script>



<template>
  <div class="position-relative mt-5">
    <div
    v-if="useModalStore.openForm === true"
    class="shadow div-popup-redeem-form"
  >
    <div class="">
      <div class="row justify-content-end mt-4">
        <div class="d-flex justify-content-center col-4">
          <img
            src="../../assets/images/icons/svg/location-icon.svg"
            alt=""
            class="icon-popup-redeem-form"
          />
        </div>
        <div class="d-flex justify-content-center col-4">
          <button
            type="button"
            class="btn-close btn-close-margin"
            aria-label="Close"
            data-bs-toggle="modal"
            data-bs-target="#confirmCloseMadal"
          ></button>
        </div>
      </div>
      <b class="m-3 d-flex justify-content-center">{{ useEditStore.edit !== 'edit' ? 'โปรดกรอกที่อยู่การจัดส่งรางวัล' : 'แก้ไขที่อยู่' }}</b
      >

      <div class="position-relative">
        <form v-on:submit="submit" class=" needs-validation was-validated"  >
        <addressForm :validate="validate"/>
        <div
          class=" margin-minus-from  btn-confirm"
        >
         <div class="d-flex justify-content-center align-items-end mt-4"> 
          <button
            type="submit"
            class="btn btn-primary mb-3 button-popup-redeem-from-close"
            @click="onvalidate()"
          >
            ยืนยัน
          </button>
         </div>
        </div>
      </form>
      </div>
    </div>
  </div>
  </div>

  <ConfirmCloseMadal />
</template>

<style>
.div-popup-redeem-form {
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  /* max-width: 800px; */
  height: 87%;
  position: fixed;
  bottom: 0px;
  border-radius: 50px 50px 0px 0px;
  z-index: 3;
  animation-name: popup-redeem;
  animation-duration: 1s;
  animation-delay: 0s;
}
@keyframes popup-redeem {
  0% {
    bottom: -500px;
  }
  100% {
    bottom: 0px;
  }
}
.button-popup-redeem-from-close {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-bg: #8da4c0;
  --bs-btn-border-color: #8da4c0;
}
.icon-popup-redeem-form {
  top: 206px;
  left: 163px;
  width: 70px;
  height: 70px;
  opacity: 1;
}
.btn-close-margin {
  margin-left: 20px;
}
.btn-confirm{
  height: 100px;
}
</style>
