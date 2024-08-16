<script setup lang="ts">
const props = defineProps({
  getUsers: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
  class="position-relative w-100 h-100"
    v-for="listData in props.getUsers.filter((datas:any) => datas.id === $route.params.id)">
    <div v-if="listData.id">
      <div class="container d-flex justify-content-center mt-4">
        <div class="card border-0 shadow info-coupon-view">
          <img :src="listData.img" alt="" class="img-coupon-view" />
          <div class="card-body">
            <div class="mt-3 text-center">
              <b class="card-text text-center">
                {{ listData.title }} ส่วนลดแทนเงินสด มูลค่า
                {{ listData.value }} บาท
                <br />
                [Gift Voucher]
              </b>
            </div>
            <br />
            <div >
              <b>เงื่อนไขการรับสิทธิ์</b>
              <p >
                1. 1 ท่าน / สิทธิ์ /เดือน (สิทธิ์มีจำนวนจำกัด) <br />
                2.กดรับสิทธิ์กับพนักงานที่ร้านเท่านั้น
                ไม่สามารถใช้รหัสที่เกิดจาก การบันทึกภาพหน้าจอได้ <br />
                3. เงื่อนไขและส่วนลดเป็นไปตามที่ร้านค้ากำหนด ไม่สามารถแลก
                เปลี่ยนหรือทอนเป็นเงินสด และไม่สามารถใช้ร่วมกับโปรโมชันอื่นใด
                <br />
                4. สิทธิ์หรือสินค้าที่ได้รับจากรายการส่งเสริมการขายนี้
                สำหรับผู้มีสิทธิ์และปฏิบัติตามเงื่อนไขที่บริษัทกำหนดที่ร้าน
                เท่านั้น ห้ามจำหน่ายหรือใช้ในการพาณิชย์ <br />
                5. บริษัทฯ ขอสงวนสิทธิ์การแก้ไขหรือเปลี่ยนแปลงเงื่อนไข ต่าง ๆ
                โดยไม่ต้องแจ้งให้ทราบล่วงหน้า <br />
                6. ในกรณีที่มีการกดรหัสแล้วไม่ได้นำมาใช้สิทธิ์ไม่ว่ากรณีใด ก็ตาม
                ทางบริษัทฯ ขอสงวนสิทธิ์ในการไม่ชดเชยให้ในทุกกรณี <br />
                7. สามารถใช้ได้ทุกสาขาที่ร่วมรายการ ระยะเวลาการใช้สิทธิ์
                สิทธิพิเศษจะหมดอายุในวันที่ 31/12/66
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.img-coupon-view {
  max-width: 450px;
  max-height: 450px;
  border-radius: 14px;
}
.info-coupon-view {
  width: 450px;
  border-radius: 14px;
}
</style>
