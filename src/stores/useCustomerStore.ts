import { defineStore } from "pinia";
import axios from "axios";

interface UserInfo {
  id: number;
  title: string;
  amount: number;
  value: number;
  img: string;
  is_special: boolean;
  status: number;
  start_date: string;
  end_date: string;
  is_delivery: boolean;
  delivery: number;
  code:boolean;
}

export const useCustomerStore = defineStore("counter", {
  state: () => {
    return {
      listDatas: [] as UserInfo[],
    };
  },
  getters: {
    getUsers(state) {
      return state.listDatas;
    },
  },
  actions: {
    async fetchAPI() {
      try {
        const res = await axios.get("/public/data.json");
        this.listDatas = res.data;
        return res.data;
      } catch (error) {
        throw error;
      }
      /*
      return new Promise<void>((resolve, reject) => {
        try {
          axios.get("/public/data.json").then((datas:any) => {
            this.listDatas = datas.data;
            resolve(datas);
          });
        } catch (error) {
          alert(error);
          console.log(error);
        }
      });*/
    },
  },
});
