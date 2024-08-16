import { reactive } from "vue";

export const useModalStore = reactive({
 // open pupup code
 openCode: false,
 handlSendCode() {
   this.openCode = true;
 },
 handlCloseCode() {
   this.openCode = false;
 },

 // open pupup from
 openForm: false,
 handlSendForm() {
   this.openForm = true;
 },
 handlCloseForm() {
   this.openForm = false;
 }, 

 openConfirmAddressModal:false
});
