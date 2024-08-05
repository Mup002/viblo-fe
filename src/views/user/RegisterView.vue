<template>

    <div class="block box-border pd-[20px] w-[500px] mx-auto mt-[10%]">
        <div class="flex flex-col justify-center items-center">
            <img src="https://accounts.viblo.asia/assets/webpack/logo.fbfe575.svg" class="w-[120px]">
            <h1 class="text-[20px] font-bold mt-[20px]">Đăng ký tài khoản viblo</h1>
            <h2 class="text-[18px]  mt-[50x]">
                Chào mừng bạn đến Nền tảng Viblo! Tham gia cùng chúng tôi để tìm kiếm thông tin hữu ích cần thiết để cải
                thiện kỹ năng IT của bạn. Vui lòng điền thông tin của bạn vào biểu mẫu bên dưới để tiếp tục.
            </h2>
        </div>
        <div class="w-full flex flex-col justify-center items-center">
            <input v-model="this.registerData.username"
                class="w-full h-[40px] border-borderBox border-2 py-[5px] pl-[20px] mb-[20px] rounded-md"
                placeholder="Tên của bạn" />
            <div class="w-full relative mb-[20px]">
                <input v-model="this.registerData.email"
                    class="w-[40%] h-[40px] border-borderBox border-2 py-[5px] pl-[20px] float-left rounded-md"
                    placeholder="Địa chỉ email của bạn" />
                <input 
                v-model="this.registerData.display_name"
                    class="w-[40%] h-[40px] border-borderBox border-2 py-[5px] pl-[20px] float-right rounded-md"
                    placeholder="Tên tài khoản" />
            </div>
            <input v-model="this.registerData.password"
                class="w-full h-[40px] border-borderBox border-2 py-[5px] pl-[20px] mb-[20px] rounded-md"
                placeholder="Mật khẩu" />
            <input 
            v-model="this.check"
            class="w-full h-[40px] border-borderBox border-2 py-[5px] pl-[20px] mb-[20px] rounded-md"
                placeholder="Xác nhận mật khẩu của bạn" />
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-[20px]">
            <button @click="registers" class="w-[88%] bg-bgLoginBtn h-[50px] text-white hover:bg-blue-300">Đăng
                ký</button>
        </div>
    </div>
</template>
<script>
import { register } from '@/services/auth.service';
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            registerData: {
                username: null,
                email: null,
                password: null,
                display_name: null,
            },
            check: null
        }
    },
    methods: {
        async registers() {
            try {
                if (this.check != this.registerData.password) {
                    Swal.fire({
                        title: 'Mật khẩu không trùng khớp!!',
                        icon: 'fail',
                        showCancelButton: false,
                        confirmButtonText: ' OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "/register";
                        }
                    });
                }
                const response = await register(this.registerData)

                if (response.status === 200) {
                    if (response.data.data == 1) {
                        Swal.fire({
                            title: response.data.message,
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonText: ' OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/";
                            }
                        });
                    } else {
                        Swal.fire({
                            title: response.data.message,
                            icon: 'failed',
                            showCancelButton: false,
                            confirmButtonText: ' OK'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "/register";
                            }
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}

</script>
<!--  -->