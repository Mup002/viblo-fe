<template>
    <div class="nav_ w-full bg-navBg h-[60px] pl-[10%]">
        <ul class="flex justify-around items-center list-none w-[80%] h-full">
            <li class="text-white font-[15px] ">
                <router-link to="/content-creator" class="router pb-[5px]">
                    Nhà sáng tạo nội dung
                </router-link>
            </li>
            <li v-if="this.userData != null" class="text-white font-[15px]">
                <router-link to="/followings" class="">
                    Đang theo dõi
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/newest" class="router">
                    Mới nhất
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/serie" class="router">
                    Series
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/editor-choice" class="router">
                    Editor Choice
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/trending" class="router">
                    Trending
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/videos" class="router">
                    Videos
                </router-link>
            </li>
            <li v-if="this.userData != null" class="text-white font-[15px]">
                <router-link to="/bookmarks" class="">
                    Bookmarks của tôi
                </router-link>
            </li>

            <li v-if="this.userData != null" class="text-white font-[15px]">
                <div
                    class="w-[100px] h-[30px] flex justify-center items-center px-[5px] bg-searchBtnBg rounded-sm font-semibold hover:bg-blue-600">
                    <svg class="mr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 48 48">
                        <g fill="none" stroke="white" stroke-linejoin="round" stroke-width="0.85">
                            <path fill="white" d="M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015z" />
                            <path stroke-linecap="round" d="m27.952 12.387l8.485 8.485" />
                        </g>
                    </svg>
                    Viết bài
                </div>
            </li>
        </ul>
    </div>
    <div class="bg-gradient-to-r from-purple-700 to-green-500 py-6 flex justify-center items-center w-full h-[60px]">
        <a href="https://www.facebook.com/groups/viblo.community.official"
            class="hover:underline text-white font-bold text-[18px]">
            >> Tham gia Facebook group "Viblo Community" để cùng nhau học tập và kết nối << </a>
    </div>
</template>
<script>
export default {
    name: "Nav",
    data() {
        return {
            userData: null,
        }
    },
    async mounted() {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            this.userData = JSON.parse(storedUserData);
        }
    },
}
</script>
