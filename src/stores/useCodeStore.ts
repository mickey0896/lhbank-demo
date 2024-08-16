import { reactive } from 'vue'

export const useCodeStore = reactive({
  state: 1,
  handlChangeNumberCode() {
    if(this.state !== 1){
        this.state = 1
    }
  },
  handlChangeBarCode() {
    this.state = 2
  },
  handlChangeQrCode() {
    this.state = 3
  }
})