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
            <input class="w-full h-[40px] border-borderBox border-2 py-[5px] pl-[20px] mb-[20px] rounded-md"
                placeholder="Tên của bạn" />
            <div class="w-full relative mb-[20px]">
                <input class="w-[40%] h-[40px] border-borderBox border-2 py-[5px] pl-[20px] float-left rounded-md"
                    placeholder="Địa chỉ email của bạn" />
                <input class="w-[40%] h-[40px] border-borderBox border-2 py-[5px] pl-[20px] float-right rounded-md"
                    placeholder="Tên tài khoản" />
            </div>
            <input class="w-full h-[40px] border-borderBox border-2 py-[5px] pl-[20px] mb-[20px] rounded-md"
                placeholder="Mật khẩu" />
            <input class="w-full h-[40px] border-borderBox border-2 py-[5px] pl-[20px] mb-[20px] rounded-md"
                placeholder="Xác nhận mật khẩu của bạn" />
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-[20px]">
            <button class="w-[88%] bg-bgLoginBtn h-[50px] text-white hover:bg-blue-300">Đăng nhập</button>
        </div>

    </div>
</template>