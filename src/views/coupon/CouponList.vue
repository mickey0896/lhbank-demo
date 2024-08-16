<script setup lang="ts">
import CardCoupon from "../../components/card/CardCoupon.vue"
</script>

<template>
  <div style="background-color: #F8F8F8;" class="position-relative">
    <div class="container div-coupon-list ">
      <div class="row pt-5 px-2 position-relative">
        <div class="col-4">
          <router-link
            to="/"
            style="text-decoration: none; color: inherit"
          >
            <img
              src="/src/assets/images/icons/svg/left-arrow-icon.svg"
              alt=""
              class="icons-coupon-list"
            />
          </router-link>
        </div>
        <div class="col-6">
          <b>พิเศษเฉพาะคุณ</b>
        </div>
      </div>
    </div>
    <div class="card-list mx-3">
      <CardCoupon/>
    </div>
  </div>
</template>

<style>
.div-coupon-list {
  background-color: #cd7b56;
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
margin-top: -115px;
/* position: absolute; */
}
</style>
