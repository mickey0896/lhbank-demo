<script setup lang="ts">
import HeaderBar from "../../components/bar/HeaderBar.vue";
import MenuBar from "../../components/bar/MenuBar.vue";
import SpecialCoupon from "../special-coupon/SpecialCoupon.vue";
import CardCoupon from "../../components/card/CardCoupon.vue";
import { useSearchCouponStore } from "../../stores/useSearchCouponStore";
</script>

<template>
  <div class="position-relative w-100 h-100">
    <div class="d-flex justify-content-center">
      <div class="size-page position-relative">
        <div class="background-color-f8f8f8 position-relative">
          <div class="position-relative">
            <HeaderBar :type="''" />
          </div>
          <div
            class="position-relative"
            v-if="useSearchCouponStore.textSearch === ''"
          >
            <div class="d-flex bd-highlight mb-1 mt-4">
              <div class="p-2 bd-highlight">
                <img
                  src="/src/assets/images/icons/svg/gift-icon.svg"
                  alt=""
                  class="icons"
                />
              </div>
              <div class="pt-2 bd-highlight">
                <b style="color: #333132">พิเศษเฉพาะคุณ</b>
              </div>
              <div class="ms-auto p-2 bd-highlight">
                <router-link
                  to="/coupon"
                  style="text-decoration: none; color: inherit"
                >
                  <a style="color: #88bdc0">
                    ดูทั้งหมด
                    <img
                      src="/src/assets/images/icons/svg/right-chevron-icon.svg"
                      alt=""
                      class="icon-home-page"
                    />
                  </a>
                </router-link>
              </div>
            </div>
            <SpecialCoupon />
            <div class="d-flex bd-highlight mb-1 mt-4">
              <div class="p-2 bd-highlight">
                <img
                  src="/src/assets/images/icons/svg/coupon-icon.svg"
                  alt=""
                  class="icons"
                />
              </div>
              <div class="pt-1 bd-highlight">
                <b style="color: #333132">คูปองและส่วนลด</b>
              </div>
            </div>
          </div>
          <div class="mx-3 position-relative">
            <CardCoupon />
          </div>
        </div>
      </div>
    </div>
  </div>
  <MenuBar />
</template>

<style scoped>
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
</style>
