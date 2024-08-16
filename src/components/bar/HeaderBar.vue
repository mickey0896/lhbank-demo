<script setup lang="ts">
import { reactive } from "vue";
import { useSearchCouponStore } from "../../stores/useSearchCouponStore";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
let search = reactive({
  textSearch: "",
});

const onSearch = () => {
  useSearchCouponStore.textSearch = search.textSearch;
};
</script>

<template>
  <div class="position-relative">
    <div class="d-flex justify-content-center">
      <div class="row div showa d-flex justify-content-center">
        <div class="d-flex justify-content-between mt-4">
          <div class="circle-yellow"></div>
          <div v-if="props.type !== 'history'">
            <img
              src="/src/assets/images/artworks/Screenshot 2023-08-11 105252.png"
              alt=""
              class="logo mt-3"
            />
          </div>
          <div v-if="props.type === 'history'" class="position-relative mt-5 d-flex justify-content-center">
            <b class="font-size-15">ประวัติการแลกของรางวัล </b>
          </div>
          <div class="circle-purple"></div>
        </div>
        <div class="position-relative">
          <div
            v-if="props.type !== 'history'"
            class="d-flex justify-content-center t-1 mt-5 mb-5"
          >
            <input
              type="text"
              class="input-underline"
              placeholder="ค้นหา"
              aria-label="ค้นหา"
              v-model="search.textSearch"
            />

            <button
              class="input-group-text search-button d-flex justify-content-center"
              @click="onSearch"
            >
              <img
                src="/src/assets/images/icons/svg/search-icon.svg"
                alt=""
                class="icon-bar"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.logo {
  height: 41px;
  width: 126px;
}
.div {
  background-color: #ffffff;
  border-radius: 0px 0px 36px 36px;
  max-width: 500px;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.search-button {
  background-color: #cd7b56;
  width: 70px;
  border-radius: 20px;
  margin-left: 10px;
}
.icon-bar {
  width: 20px;
  color: #ffffff;
}
.circle-yellow {
  border-radius: 50%;
  width: 115px;
  height: 115px;
  background: var(--unnamed-color-d3c07f) 0% 0% no-repeat padding-box;
  background: #d3c07f 0% 0% no-repeat padding-box;
  opacity: 0.3;
  margin-top: -70px;
  margin-left: -30px;
}
.circle-purple {
  border-radius: 50%;
  max-width: 168px;
  max-height: 168px;
  width: 100%;
  background: var(--unnamed-color-a7a2ca) 0% 0% no-repeat padding-box;
  background: #a7a2ca 0% 0% no-repeat padding-box;
  opacity: 0.3;
  margin-top: -80px;
  margin-right: -60px;
}
.input-underline {
  max-width: 300px;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid #c7c9c7;
}
.font-size-15 {
  font-size: 15px;
}
</style>
