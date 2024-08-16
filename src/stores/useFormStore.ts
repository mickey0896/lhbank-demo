import { reactive } from "vue";

export const useFormStore = reactive({
    first_name:'',
    last_name:'',
    phone_number:'',
    address:'',
    province:'',
    county:'',
    sub_district:'',
    post_code:'',
});
