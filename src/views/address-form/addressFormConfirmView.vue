<script setup lang="ts">
import { computed } from "vue";
import { useCustomerStore } from "../../stores/useCustomerStore";
import { useFormStore } from "../../stores/useFormStore";
import ConfirmAddressBar from "../../components/bar/ConfirmAddressBar.vue";
import ConfirmAddressModal from "../../components/modal/ConfirmAddressModal.vue";

const store = useCustomerStore();
const getUsers = computed(() => {
  return store.getUsers;
});
</script>

<template>
  <div
    v-for="listData in getUsers.filter((datas:any) => datas.id === $route.params.id)"
    class="position-relative background-address "
  >
    <div class="position-relative">
      <div>
        <div class="pt-5 px-2 div-address-confirm-view ">
          <div class="row">
            <div class="col-3">
            <router-link to="/" style="text-decoration: none; color: inherit">
              <img
                src="/src/assets/images/icons/svg/left-arrow-icon.svg"
                alt=""
                class="icons-coupon-list"
              />
            </router-link>
          </div>
          <div class="col-9">
            <b>ยืนยันที่อยู่จัดส่งของรางวัล</b>
          </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center card-list">
        <div class="div-view-address mx-4">
          <div class="mt-4 text-center">
            <b class="card-text text-center">
              {{ listData.title }} ส่วนลดแทนเงินสด มูลค่า
              {{ listData.value }} บาท
              <br />
              [Gift Voucher]
            </b>
          </div>
          <div class="mx-5 mt-4 ">
            <div class="row justify-content-start g-2">
              <div class="col-5">ชื่อผู้รับ</div>
              <div class="col-4">
                {{ useFormStore.first_name }} {{ useFormStore.last_name }}
              </div>
              <div class="col-5">เบอร์โทร</div>
              <div class="col-5">
                {{ useFormStore.phone_number }}
              </div>
              <br />
              <div class="col-5">ที่อยู่</div>
              <div class="col-7">
                {{ useFormStore.address }}
                {{
                  `แขวง ${useFormStore.sub_district} เขต ${useFormStore.county}`
                }}
                {{ useFormStore.province }}
              </div>
              <br />
              <div class="col-5">รหัสไปรษณีย์</div>
              <div class="col-7">
                {{ useFormStore.post_code }}
              </div>
            </div>
          </div>

          <div
            class="col-12 d-flex justify-content-center align-items-start text-center mt-4"
          >
            <b class="text-color-popup-redeem">
              กรุณาตรวจสอบข้อมูลให้ถูกต้อง<br />หากยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้
            </b>
          </div>
          <!-- <b
          >กรุณาตรวจสอบข้อมูลให้ถูกต้อง<br />หากยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้</b
        > -->
        </div>
      </div>
    </div>
  </div>

  <ConfirmAddressBar :getUsers="getUsers" />
  <ConfirmAddressModal />
</template>

<style>
.div-address-confirm-view {
  background-color: #8da4c0;
  border-radius: 0px 0px 36px 36px;
  max-width: 500px;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.icons-coupon-list {
  width: 20px;
  color: #ffffff;
}

.card-list {
  margin-top: -100px;
}
.div-view-address {
  top: 161px;
  left: 15px;
  max-width: 425px;
  width: 100%;
  height: 100%;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 1;
  word-wrap: break-word;
}
.background-address {
  height: 100vh;
  max-width: 500px;
  width: 100%;
  background-color: #f8f8f8;
}
.div-form-data{
  width: 100%;
  max-width: 500px;
}
</style>
