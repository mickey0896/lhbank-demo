<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCustomerStore } from "../../stores/useCustomerStore";

const store = useCustomerStore();
const getUsers = computed(() => {
  return store.getUsers;
});

onMounted(() => {
  store.fetchAPI();
});
</script>

<template>
  <div class="position-relative ">
    <div class="d-flex align-items-center row-cols-2 div-background">
      <div
        class="card border-0 shadow col p-2 card-special-coupon "
        v-for="listData in getUsers.filter((getUser:any) => getUser.is_special === true)"
      >
        <div
          class="d-flex justify-content-center align-items-center amount-Special-coupon"
        >
          {{ listData.amount }}/100
        </div>
        <img
          :src="listData.img"
          class="d-flex justify-content-center img-special-coupon"
        />
        <div class="mt-1 text-special-coupon">
          <span style="font-size: 14px">{{ listData.title }}</span>
          <br /><b
            >ส่วนลดแทนเงินสด<br />มูลค่า
            {{ listData.value }} บาท<br />[E-Voucher]</b
          ><br />
          <a v-bind:href="'/coupon/view/' + listData.id">
            <button
              class="btn btn-primary mt-2 button"
              style="
                --bs-btn-padding-y: 0rem;
                --bs-btn-padding-x: 0.5rem;
                --bs-btn-bg: var(--bd-#cd7b56-bg);
              "
            >
              แลกฟรี
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.div-background {
  background-color: #efded7;
  max-width: 500px;
  width: 100%;
  height: 275px;
  overflow: scroll;
  padding-right: 10px;
}
.div-background::-webkit-scrollbar {
  display: none;
}
.card-special-coupon {
  width: 138px;
  height: 245px;
  border-radius: 14px;
  margin-left: 10px;
}
.img-special-coupon {
  /* width: 124px; */
  height: 124px;
  border-radius: 14px;
}
.text-special-coupon {
  text-align: center;
  font-size: 12px;
}
.button {
  width: 59px;
  height: 22px;
  font-size: 0.75rem;
  border-radius: 10px;
  --bs-btn-bg: #cd7b56;
  --bs-btn-border-color: #cd7b56;
}
.button:hover {
  width: 59px;
  height: 22px;
  font-size: 0.75rem;
  border-radius: 10px;
  --bs-btn-bg: #cd7b56;
  --bs-btn-border-color: #cd7b56;
}
.amount-Special-coupon {
  background-color: #f0bb0d;
  width: 58px;
  height: 25px;
  z-index: 1;
  position: absolute;
  color: aliceblue;
  border-radius: 0px 14px 14px 0px;
  margin-top: 10px;
  margin-left: -8px;
  box-shadow: 0px 3px 2px #00000029;
  opacity: 0.9;
}
</style>
