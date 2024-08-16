<script setup lang="ts">
import CardCouponView from "../../components/card/CardCouponView.vue";
import PopupRedeem from "../../components/pop-up/PopupRedeem.vue";
import ButtonBar from "../../components/bar/ButtonBar.vue";
import ConfirmRedeemModal from "../../components/modal/ConfirmRedeemModal.vue";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useCustomerStore } from "../../stores/useCustomerStore";
import { useRoute } from "vue-router";
import PopupRedeemForm from "../../components/pop-up/PopupRedeemForm.vue";

const route = useRoute();
const store = useCustomerStore();
const getUsers = computed(() => {
  return store.getUsers;
});
const statusType: any = ref(null);
onBeforeMount(async () => {
  //store.fetchAPI();
});
onMounted(() => {
  store.fetchAPI().then(() => {
    const statusTypeState = getUsers.value.find(
      (datas: any) => datas.id === route.params.id
    );
    statusType.value = statusTypeState;
    console.warn("response", statusTypeState);
  });
});
</script>

<template>
  <div class="position-relative w-100 h-100 background-f8f8f8 ">
    <div class="">
      <div class="row pt-5 px-2 position-relative w-100">
        <div class="col-4">
          <router-link to="/" style="text-decoration: none; color: inherit">
            <img
              src="/src/assets/images/icons/svg/left-arrow-icon.svg"
              alt=""
              class="icons-coupon-list"
            />
          </router-link>
        </div>
        <div class="col-4" style="text-align: center">
          <b>รายละเอียด</b>
        </div>
      </div>
      <div>
        <CardCouponView :getUsers="getUsers" />
        <ButtonBar
          :getUsers="getUsers"
          toggle="modal"
          target="#staticBackdrop"
        />
        <PopupRedeem :getUsers="getUsers" />
        <PopupRedeemForm :getUsers="getUsers" />
      </div>
    </div>
  </div>
  <!-- <div style="background-color: #f8f8f8">
    <div class="container">
      <div class="row pt-5 px-2 position-relative">
        <div class="col-4">
          <router-link to="/" style="text-decoration: none; color: inherit">
            <img
              src="/src/assets/images/icons/svg/left-arrow-icon.svg"
              alt=""
              class="icons-coupon-list"
            />
          </router-link>
        </div>
        <div class="col-4" style="text-align: center">
          <b>รายละเอียด</b>
        </div>
      </div>
      <div>
        <CardCouponView :getUsers="getUsers" />
        <ButtonBar
          :getUsers="getUsers"
          toggle="modal"
          target="#staticBackdrop"
        />
        <PopupRedeem :getUsers="getUsers" />
        <PopupRedeemForm :getUsers="getUsers" />
      </div>
    </div>
  </div> -->

  <!-- Confirm Modal -->
  <ConfirmRedeemModal
    :getUsers="getUsers"
    :params="$route.params.id"
    :statusType="statusType"
  />
</template>

<style>
.background-f8f8f8 {
  background-color: #f8f8f8;
}
.div-eiei {
  width: 100%;
  max-width: 500px;
}
.icons-coupon-list {
  width: 20px;
  color: #ffffff;
}
.modal-footer {
  border-top: var(--bs-modal-footer-border-width) solid #ffffff
    var(--bs-modal-footer-border-color);
}
</style>
