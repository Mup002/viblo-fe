<template>
    <div class="block box-border pd-[20px] w-[500px] mx-auto mt-[10%]">
        <div class="flex flex-col justify-center items-center">
            <img src="https://accounts.viblo.asia/assets/webpack/logo.fbfe575.svg" class="w-[120px]">
            <h1 class="text-[20px] font-bold mt-[20px]">Đăng nhập vào viblo</h1>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
            <div class="flex justify-center items-center my-[8px] w-full">
                <div class="border border-gray-300 p-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.5em" viewBox="0 0 1280 1536">
                        <path fill="#a89f9f"
                            d="M1280 1271q0 109-62.5 187t-150.5 78H213q-88 0-150.5-78T0 1271q0-85 8.5-160.5t31.5-152t58.5-131t94-89T327 704q131 128 313 128t313-128q76 0 134.5 34.5t94 89t58.5 131t31.5 152t8.5 160.5m-256-887q0 159-112.5 271.5T640 768T368.5 655.5T256 384t112.5-271.5T640 0t271.5 112.5T1024 384" />
                    </svg>
                </div>
                <input class="border border-gray-300 w-[80%] p-[6px] focus:border-blue-400" placeholder="Địa chỉ email"
                    v-model="this.loginData.email">
            </div>
            <div class="flex justify-center items-center my-[8px] w-full">
                <div class="border border-gray-300 p-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256">
                        <path fill="#a89f9f"
                            d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0M160 80H96V56a32 32 0 0 1 64 0Z" />
                    </svg>
                </div>
                <input type="password" class="border border-gray-300 w-[80%] p-[6px] focus:border-blue-400"
                    placeholder="Mật khẩu" v-model="this.loginData.password">
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-[20px]">
            <button class="w-[88%] bg-bgLoginBtn h-[40px] text-white hover:bg-blue-300"
                @click="login(this.loginData)">Đăng nhập</button>
        </div>
        <div class="w-full flex justify-around items-center mt-[20px]">
            <router-link to="/forgot" class="router text-textLogin text-[13px] hover:underline">Quên mật
                khẩu?</router-link>
            <router-link to="/register" class="router text-textLogin text-[13px] hover:underline">Tạo tài
                khoản</router-link>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            loginData: {
                email: null,
                password: null,
            },
            userData: null
        }
    },
    created() {

    },
    methods: {
        async login(request) {
            try {
                const response = await axios.post('http://viblo.local/api/v1/login', this.loginData)
                if (response.status == 200) {
                    this.userData = response.data;
                    localStorage.setItem('userData', JSON.stringify(this.userData));
                    window.location.href = "/";
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }
}
</script>
