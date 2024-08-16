<script setup lang="ts">
import router from '../../routers';


const handlToHomePage = () => {
  router.push({ path: "/" })
}

</script>

<template>
  <div
    class="modal fade"
    id="confirmAddress"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-center">
          <div class="div-modal-icon">
            <img
              src="/src/assets/images/icons/svg/check-mark-icon.svg"
              alt=""
              class="modal-icon"
            />
          </div>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div style="text-align: center">
            <h4>แลกของรางวัลสำเร็จ!</h4>
            <br />
            <p>ทางเราจะจัดส่งของรางวัล<br />ภายใน 7-14 วันทำการ</p>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-secondary btn-lg button-confirm-address-modal-close "
            data-bs-dismiss="modal"
            @click="handlToHomePage()"
          >
            ปิด
          </button>
         
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.button-confirm-address-modal-close {
  border-radius: 100px;
  width: 90%;
  height: 55px;

  --bs-btn-bg: #8DA4C0;
  --bs-btn-border-color: #8DA4C0;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
}
.button-modal-send {
  border-radius: 100px;
  width: 45%;
  height: 55px;
  --bs-btn-bg: #8da4c0;
  --bs-btn-border-color: #8da4c0;
  --bs-btn-hover-bg: #bcbec0;
  --bs-btn-hover-border-color: #bcbec0;
  --bs-btn-active-bg: #949494;
  --bs-btn-active-border-color: #949494;
}
.modal-icon {
  width: 80px;
  height: 80px;
}
.div-modal-icon {
  background-color: #ffffff;
  margin-top: -50px;
  border-radius: 50px;
}
.modal-sm {
  --bs-modal-width: 400px;
}
.modal-content {
  border: #ffffff var(--bs-modal-border-width) solid #ffffff
    var(--bs-modal-border-color);
  border-radius: 14px;
}
.modal-header {
  border-bottom: var(--bs-modal-header-border-width) solid #ffffff
    var(--bs-modal-header-border-color);
  padding-top: 10px;
}
</style>
