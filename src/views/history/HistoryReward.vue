<script setup lang="ts">
import HeaderBar from "../../components/bar/HeaderBar.vue";
import { Ref, computed, onMounted, ref } from "vue";
import { useCustomerStore } from "../../stores/useCustomerStore";
import { useModalStore } from "../../stores/useModalStore";
import MenuBar from "../../components/bar/MenuBar.vue";
import PopupRedeem from "../../components/pop-up/PopupRedeem.vue";
import router from "../../routers";

const store = useCustomerStore();
const getUsers = computed(() => {
  return store.getUsers;
});
const type = "history";
const paramID: Ref<number | null> = ref(null);

onMounted(() => {
  store.fetchAPI();
});

const CodeView = (id: number) => {
  paramID.value = id;
  useModalStore.handlSendCode();
};

const delivreyView = (id: number) => {
  router.push({ path: `/history/view/${id}` });
};
</script>

<template>
  <div class="position-relative">
    <div class="size-page">
      <div class="background-color-f8f8f8">
        <div class="position-relative">
          <HeaderBar :type="type" />
        </div>
        <div class="row d-flex justify-content-center mx-5 margin-minus-70">
          <div class="div-reward mb-4">
            <div
              class="d-flex justify-content-center align-items-center reward"
            >
              <div class="text-center">
                <img
                  src="../../assets/images/icons/svg/gift-icon.svg"
                  :fill="'#FFFFFF'"
                  class="icon-history"
                />
                <br />
                <span>แลกรางวัล</span>
              </div>
            </div>
          </div>
          <div class="position-relative h-100">
            <div
              v-for="listData in getUsers"
              class="position-relative div-reward-data mb-4 pt-2"
            >
              <div
                class="position-relative row justify-content-between m-1 mt-2 div-reward-data"
              >
                <div class="col-7">
                  <span class="col-12 text-date">{{
                    listData.start_date
                  }}</span>
                  <span class="col-12"
                    ><br />{{ listData.title }} บัตรส่วนลด <br />มูลค่า
                    {{ listData.value }} บาท [Gift Voucher]</span
                  >
                </div>
                <div class="col-5 row d-flex justify-content-end mr-2px">
                  <button
                    v-if="listData.is_delivery === true"
                    class="col-12 div-delivery"
                    @click="delivreyView(listData.id)"
                  >
                    <img
                      src="../../assets/images/icons/svg/delivery-icon.svg"
                      alt=""
                      class="button-icon"
                    />
                    ดูสถานะการจัดส่ง
                  </button>
                  <button
                    v-if="listData.status === 0 && listData.code === true"
                    class="col-12 div-code"
                    @click="CodeView(listData.id)"
                  >
                    <img
                      src="../../assets/images/icons/svg/eye-icon.svg"
                      alt=""
                      class="button-icon"
                    />
                    ดูโค้ด
                  </button>
                  <button
                    v-if="listData.code === false"
                    class="col-12 div-code-disabled"
                    disabled
                  >
                    <img
                      src="../../assets/images/icons/svg/calendar-date-icon.svg"
                      alt=""
                      class="button-icon"
                    />
                    โค้ดหมดอายุ
                  </button>
                  <p
                    v-if="listData.status === 0"
                    class="col-12 mt-2 text-date d-flex justify-content-end"
                    >Expire : 01/06/66</p
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-center">
          <div class=" div-reward mx-5"></div>
        </div> -->
        <PopupRedeem :getUsers="getUsers" :listData="paramID" />
      </div>
    </div>
  </div>
  <MenuBar />
</template>

<style scope>
.size-page {
  width: 100%;
  max-width: 500px;
  height: auto;
}
.icons {
  width: 25px;
  margin-top: -10px;
}
/* .logo {
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
} */
.icon-home-page {
  width: 15px;
}
.background-color-f8f8f8 {
  background-color: #f8f8f8;
  height: 100%;
}
.div-reward {
  width: 100%;
  height: 109px;
  padding: 13px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
  opacity: 1;
  z-index: 1;
}
.reward {
  width: 100%;
  height: 100%;
  background: var(--unnamed-color-d3c07f) 0% 0% no-repeat padding-box;
  background: #d3c07f 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 1;
  color: #ffffff;
}
.margin-minus-70 {
  margin-top: -70px;
}
.div-reward-data {
  width: 100%;
  height: 100%;
  max-height: 109px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 1;
  z-index: 1;
  font-size: 14px;
}
.icon-history {
  width: 25px;
  height: 25px;
  opacity: 1;
  filter: brightness(0) invert(1);
}
.text-date {
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-14) /
    var(--unnamed-line-spacing-9) var(--unnamed-font-family-lh-bank-header);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(---c7c9c7-คือ-font);
  font: normal normal normal 14px/9px LH Bank Header;
  letter-spacing: 0px;
  color: #c7c9c7;
  opacity: 1;
}
.div-delivery {
  background: var(--unnamed-color-9aab67) 0% 0% no-repeat padding-box;
  background: #9aab67 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 15px;
  opacity: 1;
  width: 124px;
  height: 25px;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  justify-content: center;
}
.div-code {
  background: var(--unnamed-color-88bdc0) 0% 0% no-repeat padding-box;
  background: #88bdc0 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 15px;
  opacity: 1;
  width: 80px;
  height: 25px;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  justify-content: center;
}
.div-code-disabled {
  background: var(---bcbec0-คือ-สีเส้นเทา) 0% 0% no-repeat padding-box;
  background: #bcbec0 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 15px;
  opacity: 1;
  width: 115px;
  height: 25px;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  justify-content: center;
}
.button-icon {
  max-width: 18px;
  max-height: 18px;
  width: 100%;
  height: 100%;
}
.mr-2px {
  margin-right: 3px;
}
</style>
