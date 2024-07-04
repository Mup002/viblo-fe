<template>
    <!-- <div class="banner_">

    </div> -->
    <div class="nav_ w-full bg-navBg h-[80px]">
        <ul class="flex justify-around items-center list-none w-[80%] h-full">
            <li class="text-white font-[15px] ">
                <router-link to="/content-creator">
                    Nhà sáng tạo nội dung
                </router-link>
            </li>
            <!-- <li class="text-white font-[15px]">
                <router-link to="/followings" class="">
                    Đang theo dõi
                </router-link>
            </li> -->
            <li class="text-white font-[15px]">
                <router-link to="/newest" class="">
                    Mới nhất
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/series">
                    Series
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/editor-choice">
                    Editor Choice
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/trending">
                    Trending
                </router-link>
            </li>
            <li class="text-white font-[15px]">
                <router-link to="/videos">
                    Videos
                </router-link>
            </li>
        </ul>
    </div>
    <div>
        hello
    </div>
</template>
<script>
import axios from "axios"
</script>