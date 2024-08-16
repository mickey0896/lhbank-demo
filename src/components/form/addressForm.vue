<script setup lang="ts">
import { useFormStore } from "../../stores/useFormStore";
//import {vMaska} from 'maska'

const props = defineProps({
  validate: {
    type: Boolean,
    required: false,
  },
});

const textValidation = (e:any) => {
  if (!e.key.match(/^[a-zA-Zก-๏\s]*$/)) {
    e.preventDefault();
  }
};

</script>

<template>
  <div class="mx-5 row">
    <div class="col-12">
      <label for="first_name" class="form-label">ชื่อจริง</label>
      <input
        type="text"
        class="form-control input-underline-form"
        name="first_name"
        v-model="useFormStore.first_name"
        placeholder="ระบุชื่อจริง"
        :required="props.validate === true ? true : false"
        v-on:keydown="textValidation($event)"
        maxlength="20"
      />
      <div class="invalid-feedback" v-if="props.validate === true">
        กรุณากรอกข้อมูลให้ถูกต้อง
      </div>
      <div class="valid-feedback" v-if="props.validate === true"><br /></div>
    </div>
    <div class="col-12">
      <label for="last_name" class="form-label">นามสกุล</label>
      <input
        type="text"
        class="form-control input-underline-form"
        name="last_name"
        v-model="useFormStore.last_name"
        placeholder="ระบุนามสกุล"
        :required="props.validate === true ? true : false"
        v-on:keydown="textValidation($event)"
        maxlength="20"
      />
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
      <div class="valid-feedback"><br /></div>
    </div>
    <div class="col-12">
      <label for="phone_number" class="form-label">กรอกเบอร์มือถือ</label>
      <input
        type="tel"
        class="form-control input-underline-form"
        name="phone_number"
        v-model="useFormStore.phone_number"
        placeholder="ระบุเบอร์มือถือ"
        :required="props.validate === true ? true : false"
        maxlength="12"
        v-maska
        data-maska="###-###-####'"
      />
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
      <div class="valid-feedback"><br /></div>
    </div>
    <div class="col-12">
      <label for="address" class="form-label">ที่อยู่ปัจจุบัน</label>
      <input
        type="text"
        class="form-control input-underline-form"
        name="address"
        v-model="useFormStore.address"
        placeholder="บ้านเลขที่/ซอย/ถนน"
        :required="props.validate === true ? true : false"
      />
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
      <div class="valid-feedback"><br /></div>
    </div>
    <div class="col-6">
      <label for="province" class="form-label">จังหวัด</label>
      <select
        class="form-select input-underline-form"
        name="province"
        v-model="useFormStore.province"
        :required="props.validate === true ? true : false"
      >
        <option value="" disabled selected hidden>ระบุจังหวัด</option>
        <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
        <option value="กระบี่">กระบี่</option>
        <option value="กาญจนบุรี">กาญจนบุรี</option>
        <option value="กาฬสินธุ์">กาฬสินธุ์</option>
        <option value="กำแพงเพชร">กำแพงเพชร</option>
      </select>
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
      <div class="valid-feedback"><br /></div>
    </div>
    <div class="col-6">
      <label for="county" class="form-label">เขต/อำเภอ</label>
      <select
        class="form-select input-underline-form"
        name="county"
        v-model="useFormStore.county"
        :required="props.validate === true ? true : false"
      >
        <option value="" disabled selected hidden>ระบุเขต/อำเภอ</option>
        <option value="พระโขนง">พระโขนง</option>
        <option value="ลาดกระบัง">ลาดกระบัง</option>
      </select>
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
      <div class="valid-feedback"><br /></div>
    </div>
    <div class="col-6">
      <label for="sub_district" class="form-label">แขวง/ตำบล</label>
      <select
        class="form-select input-underline-form"
        name="sub_district"
        v-model="useFormStore.sub_district"
        :required="props.validate === true ? true : false"
      >
        <option value="" disabled selected hidden>ระบุแขวง/ตำบล</option>
        <option value="บางจาก">บางจาก</option>
        <option value="คลองสองตุ้นนุ่น">คลองสองตุ้นนุ่น</option>
      </select>
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
    </div>
    <div class="col-6">
      <label for="post_code" class="form-label">รหัสไปรษณีย์</label>
      <input
        type="tel"
        class="form-control input-underline-form"
        name="post_code"
        v-model="useFormStore.post_code"
        placeholder="ระบุรหัสไปรษณีย์"
        :required="props.validate === true ? true : false"
        maxlength="5"
      />
      <div class="invalid-feedback">กรุณากรอกข้อมูลให้ถูกต้อง</div>
      <div class="valid-feedback"><br /></div>
    </div>
  </div>
</template>

<style>
.input-underline-form {
  border: 0;
  outline: 0;
  border-bottom: 2px solid #88bdc0;
  border-radius: 0px;
  --form-feedback-font-size: 10px;
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
  background-image: none;
}

.form-select.is-invalid:not([multiple]):not([size]),
.form-select.is-invalid:not([multiple])[size="1"],
.was-validated .form-select:invalid:not([multiple]):not([size]),
.was-validated .form-select:invalid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: none;
}
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip,
.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip {
  font-size: 6px;
}

.form-control.is-valid,
.was-validated .form-control:valid {
  border-color: #88bdc0;
  background-image: none;
}
.form-select.is-valid:not([multiple]):not([size]),
.form-select.is-valid:not([multiple])[size="1"],
.was-validated .form-select:valid:not([multiple]):not([size]),
.was-validated .form-select:valid:not([multiple])[size="1"] {
  --bs-form-select-bg-icon: none;
}
.form-select.is-valid,
.was-validated .form-select:valid {
  border-color: #88bdc0;
}
:valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip {
  font-size: 6px;
}
</style>
