<script setup lang="ts">
import ConfirmCloseMadal from "../../components/modal/ConfirmCloseMadal.vue";
import { useModalStore } from "../../stores/useModalStore";
import { useCodeStore } from "../../stores/useCodeStore";
import { Ref, ref } from "vue";

const props = defineProps({
  getUsers: {
    type: Object,
    required: true,
  },
  listData: {
    required: false,
  },
});
let copy: Ref<boolean> = ref(false);
const text = "1234567890";
const copyCode = () => {
  try {
    navigator.clipboard.writeText(text);
    copy.value = true;
  } catch (e) {
    throw e;
  }
};
</script>

<template>
  <div class="position-relative">
    <div>
      <div
        v-if="useModalStore.openCode === true"
        v-for="listData in props.getUsers.filter((datas:any) => datas.id === $route.params.id)"
        class="d-flex justify-content-center shadow div-popup-redeem con"
      >
        <div class="row text-center">
          <div class="col-12 d-flex justify-content-center">
            <div class="div-popup-redeem-icon">
              <img
                src="/src/assets/images/icons/svg/tick-icon.svg"
                alt=""
                class="popup-redeem-icon"
              />
            </div>
          </div>
          <div
            class="col-12 d-flex justify-content-center align-items-center margin-minus"
          >
            <h4>
              {{ listData.title }} ส่วนลดแทนเงินสด<br />มูลค่า
              {{ listData.value }} บาท <br />[E-Voucher]
            </h4>
          </div>
          <div class="col-12 align-items-center">
            <div class="d-flex justify-content-center">
              <div @click="useCodeStore.handlChangeNumberCode()">
                <img
                  src="/src/assets/images/icons/svg/number-icon.svg"
                  alt=""
                  class="popup-redeem-icon-scan"
                  :style="
                    useCodeStore.state === 1
                      ? 'filter: invert(62%) sepia(11%) saturate(2839%) hue-rotate(330deg) brightness(92%) contrast(72%);'
                      : ''
                  "
                />
              </div>
              <div @click="useCodeStore.handlChangeBarCode()">
                <img
                  src="/src/assets/images/icons/svg/bar-code-icon.svg"
                  alt=""
                  class="popup-redeem-icon-scan -3"
                  :style="
                    useCodeStore.state === 2
                      ? 'filter: invert(62%) sepia(11%) saturate(2839%) hue-rotate(330deg) brightness(92%) contrast(72%);'
                      : ''
                  "
                />
              </div>
              <div @click="useCodeStore.handlChangeQrCode()">
                <img
                  src="/src/assets/images/icons/svg/qr-code-icon.svg"
                  alt=""
                  class="popup-redeem-icon-scan"
                  :style="
                    useCodeStore.state === 3
                      ? 'filter: invert(62%) sepia(11%) saturate(2839%) hue-rotate(330deg) brightness(92%) contrast(72%);'
                      : ''
                  "
                />
              </div>
            </div>
          </div>

          <div class="col-12 d-flex justify-content-center mt-4">
            <!-- state 1 -->
            <div
              v-if="useCodeStore.state === 1"
              class="d-flex justify-content-center align-items-center"
            >
              <div>
                <div
                  class="d-flex justify-content-center align-items-center number-code"
                >
                  <h4 class="text-color-popup-redeem" v-if="copy === false">
                    {{ text }}
                  </h4>
                  <span
                    class="copy-alert d-flex justify-content-center align-items-center"
                    v-if="copy === true"
                  >
                    <img
                      src="../../assets/images/icons/svg/check-mark-2-icon.svg"
                      alt=""
                      class="icon-check-mark"
                    />
                    {{ "คัดลอก" }}
                  </span>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="btn btn-primary button-popup-redeem-copy"
                    @click="copyCode()"
                  >
                    <img
                      src="/src/assets/images/icons/svg/copy-icon.svg"
                      alt=""
                      class="icon-bar"
                    />
                    คัดลอก
                  </button>
                </div>
              </div>
            </div>

            <!-- state 2 -->
            <div v-if="useCodeStore.state === 2">
              <div
                class="d-flex justify-content-center align-items-center mt-2 bar-qr-code"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1136204018750857306/1144470800829784065/image.png"
                  alt=""
                  style="width: 217px; height: 152px"
                />
              </div>
            </div>

            <!-- state 3 -->
            <div v-if="useCodeStore.state === 3">
              <div
                class="d-flex justify-content-center align-items-center mt-2 bar-qr-code"
              >
                <img
                  src="https://media.discordapp.net/attachments/1136204018750857306/1144470849773109289/image.png?width=282&height=285"
                  alt=""
                  style="width: 172px; height: 172px"
                />
              </div>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center align-items-start">
            <b class="text-color-popup-redeem">
              กรุณาแสดงรหัสนี้ให้กับพนักงาน<br />หากยังไม่ใช้คูปองจะถูกเก็บไว้ที่หน้าประวัติ
            </b>
          </div>
          <div
            class="col-12 d-flex justify-content-center align-items-end margin-minus"
          >
            <button
              type="button"
              class="btn btn-primary button-popup-redeem-close mb-3"
              data-bs-toggle="modal"
              data-bs-target="#confirmCloseMadal"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>

      <div
        v-if="useModalStore.openCode === true"
        v-for="listData in props.getUsers.filter((datas:any) => datas.id === props.listData)   "
        class="d-flex justify-content-center shadow div-popup-redeem"
      >
        <div class="row text-center">
          <div class="col-12 d-flex justify-content-center">
            <div class="div-popup-redeem-icon">
              <img
                src="/src/assets/images/icons/svg/tick-icon.svg"
                alt=""
                class="popup-redeem-icon"
              />
            </div>
          </div>
          <div
            class="col-12 d-flex justify-content-center align-items-center margin-minus"
          >
            <h4>
              {{ listData.title }} ส่วนลดแทนเงินสด<br />มูลค่า
              {{ listData.value }} บาท <br />[E-Voucher]
            </h4>
          </div>
          <div class="col-12 align-items-center">
            <div class="d-flex justify-content-center">
              <div @click="useCodeStore.handlChangeNumberCode()">
                <img
                  src="/src/assets/images/icons/svg/number-icon.svg"
                  alt=""
                  class="popup-redeem-icon-scan"
                  :style="
                    useCodeStore.state === 1
                      ? 'filter: invert(62%) sepia(11%) saturate(2839%) hue-rotate(330deg) brightness(92%) contrast(72%);'
                      : ''
                  "
                />
              </div>
              <div @click="useCodeStore.handlChangeBarCode()">
                <img
                  src="/src/assets/images/icons/svg/bar-code-icon.svg"
                  alt=""
                  class="popup-redeem-icon-scan -3"
                  :style="
                    useCodeStore.state === 2
                      ? 'filter: invert(62%) sepia(11%) saturate(2839%) hue-rotate(330deg) brightness(92%) contrast(72%);'
                      : ''
                  "
                />
              </div>
              <div @click="useCodeStore.handlChangeQrCode()">
                <img
                  src="/src/assets/images/icons/svg/qr-code-icon.svg"
                  alt=""
                  class="popup-redeem-icon-scan"
                  :style="
                    useCodeStore.state === 3
                      ? 'filter: invert(62%) sepia(11%) saturate(2839%) hue-rotate(330deg) brightness(92%) contrast(72%);'
                      : ''
                  "
                />
              </div>
            </div>
          </div>

          <div class="col-12 d-flex justify-content-center mt-4">
            <!-- state 1 -->
            <div
              v-if="useCodeStore.state === 1"
              class="d-flex justify-content-center align-items-center"
            >
              <div>
                <div
                  class="d-flex justify-content-center align-items-center number-code"
                >
                  <h4 class="text-color-popup-redeem" v-if="copy === false">
                    {{ text }}
                  </h4>
                  <span
                    class="copy-alert d-flex justify-content-center align-items-center"
                    v-if="copy === true"
                  >
                    <img
                      src="../../assets/images/icons/svg/check-mark-2-icon.svg"
                      alt=""
                      class="icon-check-mark"
                    />
                    {{ "คัดลอก" }}
                  </span>
                </div>
                <div class="mt-4">
                  <button
                    type="button"
                    class="btn btn-primary button-popup-redeem-copy"
                    @click="copyCode()"
                  >
                    <img
                      src="/src/assets/images/icons/svg/copy-icon.svg"
                      alt=""
                      class="icon-bar"
                    />
                    คัดลอก
                  </button>
                </div>
              </div>
            </div>

            <!-- state 2 -->
            <div v-if="useCodeStore.state === 2">
              <div
                class="d-flex justify-content-center align-items-center mt-2 bar-qr-code"
              >
                <img
                  src="https://cdn.discordapp.com/attachments/1136204018750857306/1144470800829784065/image.png"
                  alt=""
                  style="width: 217px; height: 152px"
                />
              </div>
            </div>

            <!-- state 3 -->
            <div v-if="useCodeStore.state === 3">
              <div
                class="d-flex justify-content-center align-items-center mt-2 bar-qr-code"
              >
                <img
                  src="https://media.discordapp.net/attachments/1136204018750857306/1144470849773109289/image.png?width=282&height=285"
                  alt=""
                  style="width: 172px; height: 172px"
                />
              </div>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center align-items-start">
            <b class="text-color-popup-redeem">
              กรุณาแสดงรหัสนี้ให้กับพนักงาน<br />หากยังไม่ใช้คูปองจะถูกเก็บไว้ที่หน้าประวัติ
            </b>
          </div>
          <div
            class="col-12 d-flex justify-content-center align-items-end margin-minus"
          >
            <button
              type="button"
              class="btn btn-primary button-popup-redeem-close mb-3"
              data-bs-toggle="modal"
              data-bs-target="#confirmCloseMadal"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ConfirmCloseMadal />
</template>

<style>
.div-popup-redeem {
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  height: 80%;
  position: fixed;
  bottom: 0px;
  border-radius: 50px 50px 0px 0px;
  z-index: 3;
  animation-name: popup-redeem;
  animation-duration: 1s;
  animation-delay: 0s;
}
@keyframes popup-redeem {
  0% {
    bottom: -500px;
  }
  100% {
    bottom: 0px;
  }
}

.div-popup-redeem-icon {
  background-color: #ffffff;
  margin-top: -50px;
  border-radius: 200px;
  width: 100px;
  height: 100px;
}
.popup-redeem-icon {
  width: 100px;
  height: 100px;
}
.margin-minus {
  margin-top: -75px;
}

.popup-redeem-icon-scan {
  width: 78px;
  height: 78px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.number-code {
  width: 370px;
  height: 80px;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin-top: -56px;
  opacity: 1;
}
.button-popup-redeem-copy {
  border-radius: 100px;
  width: 149px;
  height: 40px;
  --bs-btn-bg: #8da4c0;
  --bs-btn-border-color: #8da4c0;
}
.button-popup-redeem-close {
  border-radius: 100px;
  width: 90%;
  height: 55px;
  --bs-btn-bg: #8da4c0;
  --bs-btn-border-color: #8da4c0;
}
.text-color-popup-redeem {
  color: #8da4c0;
}
.bar-qr-code {
  width: 370px;
  height: 80px;
  opacity: 1;
}
.copy-alert {
  width: 168px;
  height: 46px;
  background: #000000 0% 0% no-repeat padding-box;
  border-radius: 23px;
  opacity: 0.84;
  color: #ffffff;
}
.icon-check-mark {
  width: 18px;
  height: 21px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 21px/25px
    var(--unnamed-font-family-font-awesome-6-pro);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  font: normal normal normal 21px/25px Font Awesome 6 Pro;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-right: 10px;
}

</style>
