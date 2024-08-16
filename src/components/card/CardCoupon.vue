<script setup lang="ts">
import { computed, onMounted, ref, Ref, watch } from "vue";
import { useCustomerStore } from "../../stores/useCustomerStore";
import { useSearchCouponStore } from "../../stores/useSearchCouponStore";

const store = useCustomerStore();
const getUsers = computed(() => {
  return store.getUsers;
});

const result: Ref<any> = ref([]);

onMounted(() => {
  store.fetchAPI().then(() => {
    result.value = getUsers.value;
  });
});

watch(
  () => useSearchCouponStore.textSearch,
  (val) => {
    result.value = getUsers.value.filter((post) =>
      post.title.toLowerCase().includes(val.toLowerCase())
    );
  }
);

// const datas = reactive({});
</script>

<template>
  <div class="position-relative h-100 w-100 div-size-coupon">
    <div class="row">
      <div
        class="col-6 d-flex justify-content-center"
        v-for="listData in result"
      >
        <div
          class="card border-0 shadow p-2 mb-4 mt-4 currency card-coupon"
          :key="listData.id"
        >
          <div
            class="d-flex justify-content-center align-items-center amount-coupon"
          >
            {{ listData.amount }}/100
          </div>
          <img
            :src="listData.img"
            alt=""
            class="d-flex justify-content-center img-coupon"
          />
          <div class="mt-3 text-coupon">
            <span style="font-size: 14px">{{ listData.title }}</span>
            <br /><b
              >ส่วนลดแทนเงินสด<br />มูลค่า
              {{ listData.value }} บาท<br />[E-Voucher]</b
            ><br />
            <a :href="`/coupon/view/${listData.id}`">
              <button
                class="btn btn-primary mt-3 button"
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
  </div>
  <div
    v-if="result.length === 0"
    class="d-flex justify-content-center align-items-center div-no-data"
  >
    <p>ไม่พบรายการที่ค้นหา</p>
  </div>
</template>

<style>
div-size-coupon{
  width:500px
}
.card-coupon {
  max-width: 177px;
  width: 100%;
  max-height: 298px;
  height: 100%;
  border-radius: 14px;
  margin-left: 10px;
  box-shadow: 0px 0px 6px #00000029;
}
.img-coupon {
  height: 143px;
  border-radius: 14px;
}
.text-coupon {
  text-align: center;
  font-size: 12px;
}
.amount-coupon {
  background-color: #f0bb0d;
  width: 67px;
  height: 30px;
  z-index: 1;
  position: absolute;
  color: aliceblue;
  border-radius: 0px 14px 14px 0px;
  margin-top: 10px;
  margin-left: -8px;
  box-shadow: 0px 3px 2px #00000029;
  opacity: 0.9;
}
.div-no-data {
  height: 578px;
  color: #bcbec0;
}
</style>
