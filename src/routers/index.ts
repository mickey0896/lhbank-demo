import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/page/HomePage.vue"
import CouponList from "../views/coupon/CouponList.vue"
import CouponView from "../views/coupon/CouponView.vue"
import addressFormConfirmView from "../views/address-form/addressFormConfirmView.vue"
import HistoryReward from "../views/history/HistoryReward.vue"
import DeliveryView from "../views/history/DeliveryView.vue"


const routes = [
  { path: "/", name: "home-page", component: HomePage },
  { path: "/coupon", name: "coupon-list", component: CouponList },
  { path: "/coupon/view/:id", name: "coupon-view", component: CouponView },
  { path: "/coupon/view/:id/confirm", name: "address-form-confirm", component: addressFormConfirmView },
  { path: "/history", name: "history-reward", component: HistoryReward },
  { path: "/history/view/:id", name: "delivery-view", component: DeliveryView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
