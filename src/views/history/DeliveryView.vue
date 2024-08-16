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
  <div style="background-color: #f8f8f8">
    <div class="container">
      <div class="row pt-5 px-2 div-header-delivery-view">
        <div class="col-4 mt-0">
          <router-link
            to="/history"
            style="text-decoration: none; color: inherit"
          >
            <img
              src="/src/assets/images/icons/svg/left-arrow-icon.svg"
              alt=""
              class="icons-arrow"
            />
          </router-link>
        </div>
        <div class="col-4 mt-1 text-center">
          <b>สถานะจัดส่ง</b>
        </div>
      </div>
    </div>
    <div
      class="card-delivery-view"
      v-for="listData in getUsers.filter((datas:any) => datas.id === $route.params.id)"
    >
      <div class="position-relative d-flex justify-content-center">
        <div class="position-relative mt-4 div-delivery-view mx-4">
          <div class="row m-2 position-relative margin-progress">
            <div class="col text-center">
              <div class="row">
                <img
                  src="../../assets/images/icons/svg/box-icon.svg"
                  alt=""
                  class="progress-icon"
                />
                <b class="fs-12">กำลังจัดส่ง</b>
              </div>
            </div>
            <div class="col text-center">
              <div class="row">
                <img
                  src="../../assets/images/icons/svg/delivery-icon-2.svg"
                  alt=""
                  class="progress-icon"
                />
                <b class="fs-12">รับเข้าระบบ</b>
              </div>
            </div>
            <div class="col text-center">
              <div class="row">
                <img
                  src="../../assets/images/icons/svg/box-shipping-icon.svg"
                  alt=""
                  class="progress-icon"
                />
                <b class="fs-12">ส่งสำเร็จ</b>
              </div>
            </div>
          </div>
          <div
            class="progress mt-3"
            role="progressbar"
            aria-label="Example 1px high"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 6px"
          >
            <div class="progress-bar" style="width:16.66%"></div>
          </div>
          <div class="position-relative check-mark row">
            <div class="col-4">
              <img
                src="../../assets/images/icons/svg/check-mark-icon.svg"
                alt=""
                class="icon-status-delivery-1"
              />
            </div>
            <div class="col-4 ">
              <img
                src="../../assets/images/icons/svg/check-mark-icon.svg"
                alt=""
                class="icon-status-delivery-2"
              />
            </div>
            <div class="col-4">
              <img
                src="../../assets/images/icons/svg/check-mark-icon.svg"
                alt=""
                class="icon-status-delivery-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center mx-4 mt-4">
        <div class="d-flex justify-content-center m-3">
          <img :src="listData.img" alt="" class="img-delivery-view" />
        </div>

        <div class="m-3 mb-4 text-center">
          <b class="card-text text-center">
            {{ listData.title }} ส่วนลดแทนเงินสด มูลค่า {{ listData.value }} บาท
            <br />
            [Gift Voucher]
          </b>
        </div>

        <div class="row position-relative div-tracking-number">
          <div class="div-icon-delivery-view m-3 col-4">
            <img
              src="../../assets/images/icons/svg/delivery-icon.svg"
              alt=""
              class="m-2 icon-delivery-view"
            />
          </div>
          <div class="col-8 m-2">
            <b>หมายเลขพัสดุ</b>
            <br />
            <span>-</span>
          </div>
        </div>

        <div class="row mt-4 div-tracking-number">
          <div class="div-icon-delivery-view m-3 col-4">
            <img
              src="../../assets/images/icons/svg/location-icon.svg"
              alt=""
              class="m-2 icon-delivery-view"
            />
          </div>
          <div class="col-8 m-2">
            <b>ที่อยู่ในการจัดส่ง</b> <br />
            <span>
              ออมใจ สุขจัง <br />
              061-423-5547 <br />
              2150/4 ถนน สุขุมวิท แขวงบางจาก <br />
              เขตพระโขนง กรุงเทพมหานคร 26204 <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.div-header-delivery-view {
  background-color: #9aab67;
  border-radius: 0px 0px 36px 36px;
  max-width: 500px;
  height: 200px;
  overflow: hidden;
}
.icons-arrow {
  width: 20px;
  color: #ffffff;
}
.card-delivery-view {
  margin-top: -115px;
}
.div-delivery-view {
  max-width: 410px;
  width: 100%;
  max-height: 120px;

  padding: 15px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 14px;
  opacity: 1;
  z-index: 1;
  color: #91bcbf;
}
.img-delivery-view {
  max-width: 209px;
  height: 209px;
  background: transparent url("img/Grab1.png") 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 1;
}

.icon-delivery-view {
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  opacity: 1;
  filter: brightness(0) invert(1);
}
.div-icon-delivery-view {
  max-width: 54px;
  max-height: 54px;
  width: 100%;
  height: 100%;
  background: var(--unnamed-color-9aab67) 0% 0% no-repeat padding-box;
  background: #9aab67 0% 0% no-repeat padding-box;
  border-radius: 37px;
  opacity: 1;
  padding-top: 4px;
  padding-left: 3px;
  
}
.div-tracking-number {
  max-width: 500px;
  width: 100%;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 14px;
  opacity: 1;
}
.icon-status-delivery-1 {
  width: 25px;
    margin-top: -12px;
    margin-left: 50%;
    position: relative;
    display: block;
    transform: translateX(-50%);
}
.icon-status-delivery-2 {
  width: 25px;
    margin-top: -12px;
    margin-left: 50%;
    position: relative;
    display: block;
    transform: translateX(-50%);
}
.icon-status-delivery-3 {
  width: 25px;
    margin-top: -12px;
    margin-left: 50%;
    position: relative;
    display: block;
    transform: translateX(-50%);
}
.progress-bar {
  background-color: #91bcbf;
}
.progress-icon {
  max-height: 38px;
  height: 100%;
  opacity: 1;
}
.fs-12 {
  font-size: 13px;
}
.check-mark {
  margin-left: 5.5%;
  margin-right: 5.5%;
  margin-top: -3px;
}
.margin-progress {
  margin-left: 5.5% !important;
  margin-right: 5.5% !important;
}
</style>
