<template>
  <div class="w-full h-[50px] items-center fixed top-[0px] z-[100]">
    <div class="w-full flex justify-between items-center  bg-gray-200">
      <div class="w-1/3 flex justify-center items-center h-[50px]  pl-[10%]">
        <ul class="flex h-full space-x-4 list-none items-center">
          <li>
            <img src="https://viblo.asia/logo_full.svg" class="w-[50px] h-[50px] ">
          </li>
          <li>Bài viết</li>
          <li>Hỏi đáp</li>
          <li>Thảo luận</li>
        </ul>
      </div>

      <div class="w-1/3 flex justify-center items-center h-[50px]  pl-[10%]">
        <input type="text" placeholder="Tìm kiếm trên Viblo" class="h-[40px] px-4 py-2 border rounded-l-lg w-full">
        <div class="bg-searchBtnBg w-[40px] h-[40px] flex justify-center items-center rounded-r-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="white"
              d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37" />
          </svg>
        </div>
      </div>

      <div class="w-1/3 pl-[5%]">
        <ul class="flex items-center list-none">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" viewBox="0 0 192 512">
              <path fill="#aba6a6"
                d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20M96 0C56.235 0 24 32.235 24 72s32.235 72 72 72s72-32.235 72-72S135.764 0 96 0" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 32 32">
              <path fill="#aba6a6"
                d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 21 21">
              <path fill="none" stroke="#aba6a6" stroke-linecap="round" stroke-linejoin="round"
                d="M17 4a2.121 2.121 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zM9.5 17.5h8m-2-11l1 1" />
            </svg>
          </li>
          <li v-if="this.userData == null" class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 24 24">
              <path fill="#2da9d2"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" />
            </svg>
            <h1 class="text-[15px] text-blue-600 hover:text-blue-400">Đăng nhập/Đăng ký</h1>
          </li>
          <li v-else @click="toggleDropdown">
            <img class="mx-4 rounded-[50%] w-[40px] h-[40px]"
              :src="this.userData.user.avt_url ? this.userData.user.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
              alt="Avatar">
          </li>

        </ul>
      </div>
    </div>
    <transition name="fade" class="mr-[20%]">
      <div v-if="isDropdownVisible" class="dropdown-menu w-[250px] flex flex-wrap justify-center">
        <div class="flex flex-wrap items-center w-full h-[100px] bg-bgDropdown">
          <div class="w-[50%] flex items-start h-full pt-[10px] pr-[20px]">
            <img class="mx-4 rounded-[50%] w-[70px] h-[70px]"
              :src="this.userData.user.avt_url ? this.userData.user.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
              alt="Avatar">
          </div>
          <div class="w-[5%] flex flex-wrap justify-start items-center h-full">
            <h1 class="text-textLogin w-full text-[15px] font-bold h-[5px]">{{ this.userData.user.username }}</h1>
            <h2 class="text-textDisplayColor w-full h-[10px]">{{ this.userData.user.display_name }}</h2>
            <button
              class="bg-bgUpBtn hover:bg-blue-500 w-[50px] h-[30px] rounded-md text-white font-bold p-[4px] mt-[5px]">Sửa</button>
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white pl-[20px] hover:bg-bgDropdown">
          <div class="w-full h-[50px] flex justify-start items-center  ">
            <svg class="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="0.84em" height="1em"
              viewBox="0 0 1280 1536">
              <path fill="#606266"
                d="M1280 1271q0 109-62.5 187t-150.5 78H213q-88 0-150.5-78T0 1271q0-85 8.5-160.5t31.5-152t58.5-131t94-89T327 704q131 128 313 128t313-128q76 0 134.5 34.5t94 89t58.5 131t31.5 152t8.5 160.5m-256-887q0 159-112.5 271.5T640 768T368.5 655.5T256 384t112.5-271.5T640 0t271.5 112.5T1024 384" />
            </svg> Trang cá nhân
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white pl-[20px] hover:bg-bgDropdown">
          <div class="w-full h-[50px] flex justify-start items-center  ">
            <svg class="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="#606266"
                d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z" />
              <path fill="#606266" d="M10 22h12v2H10zm0-6h12v2H10z" />
            </svg> Quản lý nội dung
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white pl-[20px] hover:bg-bgDropdown">
          <div class="w-full h-[50px] flex justify-start items-center">
            <svg class="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#606266"
                d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z" />
            </svg> Lịch sử hoạt động
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white pl-[20px] hover:bg-bgDropdown">
          <div class="w-full h-[50px] flex justify-start items-center  ">
            <svg class="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
              <path fill="#606266"
                d="M4 3v26h11v-4h2v4h11V3zm2 2h20v22h-7v-4h-6v4H6zm2 2v2h4V7zm6 0v2h4V7zm6 0v2h4V7zM8 11v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 15v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 19v2h4v-2zm6 0v2h4v-2zm6 0v2h4v-2zM8 23v2h4v-2zm12 0v2h4v-2z" />
            </svg> Tổ chức
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white pl-[20px] hover:bg-bgDropdown">
          <div class="w-full h-[50px] flex justify-start items-center">
            <svg class="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#606266" fill-rule="evenodd"
                d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
            </svg> Tùy chỉchỉnh
          </div>
        </div>
        <div class="flex flex-wrap w-full bg-white pl-[20px] hover:bg-bgDropdown">
          <div class="w-full h-[50px] flex justify-start items-center">
            <svg class="mr-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="#606266"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z" />
            </svg> Đăng xuất
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      userData: null,
      isDropdownVisible: false,
    }
  },
  async mounted() {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  }
};
</script>