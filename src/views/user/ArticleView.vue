<template>
    <h1>{{ articleUrl }}</h1>
    <div class="px-[5%] pt-[100px] w-[80%]">
        <div class="flex w-[100%] justify-start items-center text-[12px]">
            <div class="w-[50%] flex justify-start">
                <div class="avt_ w-[20%] flex justify-end ">
                    <img class="mx-4 rounded-[50%] w-[40px] h-[40px]"
                        :src="user.avt_url ? user.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                        alt="Avatar">
                </div>
                <div class="info_ ">
                    <div class="flex justify-start items-start">
                        <div class="user_i font-bold text-nameColor hover:underline mr-[10px] text-[12px]">{{
                            user.display_name }}</div>
                        <div class="text-[12px] font-semibold text-[#9B9B9B]">{{ user.username }}</div>
                        <button v-if="article.is_accept == 0"
                            class="w-[50px] h-[20px] border-2 ml-[10px] justify-center flex items-center hover:bg-blue-100">Sửa</button>
                        <button v-else
                            class="w-[60px] h-[20px] border-2 ml-[10px] justify-center flex items-center hover:bg-blue-100">Theo
                            dõi</button>
                    </div>
                    <div class="other_i flex justify-between items-center w-full">
                        <div class="flex justify-around items-center ">
                            <div class="flex justify-around items-center relative"
                                @mouseover="isDropdownReputation = true" @mouseout="isDropdownReputation = false">

                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                    viewBox="0 0 24 24">
                                    <path fill="#9B9B9B"
                                        d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px]">{{ user.reputation }}</h1>
                                <div v-if="isDropdownReputation" class="dropdown mt-[5px]">Reputation : {{
                                    user.reputation }}</div>
                            </div>

                            <div class="flex items-center relative" @mouseover="isDropdownArticles = true"
                                @mouseout="isDropdownArticles = false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                    viewBox="0 0 24 24">
                                    <path fill="#9B9B9B"
                                        d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px]">{{ user.article }}</h1>
                                <div v-if="isDropdownArticles" class="dropdown mt-[5px]">Bài viết : {{ user.article }}
                                </div>
                            </div>
                            <div class="flex items-center relative" @mouseover="isDropdownFollower = true"
                                @mouseout="isDropdownFollower = false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                    viewBox="0 0 640 512">
                                    <path fill="#9B9B9B"
                                        d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px]">{{ user.user_follow }}</h1>
                                <div v-if="isDropdownFollower" class="dropdown mt-[5px]">Người theo dõi : {{
                                    user.user_follow }}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="w-[50%] flex justify-start flex-wrap ml-[50px]">
                <div class="time_up  w-full flex text-[#9B9B9B] text-[15px]">
                    <h1 v-if="article.is_accept == 1">
                        Đã đăng vào khoảng -
                    </h1>
                    <h1 v-else class="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                            <path fill="#9B9B9B"
                                d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z" />
                        </svg>
                        Bản nháp - Sửa đổi lần cuối khoảng
                    </h1>
                    {{ timeAgo(article.created_at) }}
                </div>

                <div class="other_i flex justify-start items-center w-full mr-[20px]">
                    <div class="flex justify-around items-center">
                        <div class="flex justify-around items-center relative" @mouseover="isDropdownView = true"
                            @mouseout="isDropdownView = false">
                            <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                viewBox="0 0 16 16">
                                <path fill="#9B9B9B"
                                    d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 0 1-2.335 2.348a7.326 7.326 0 0 1-7.889 0A7.615 7.615 0 0 1 1.721 8a7.594 7.594 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5" />
                            </svg>
                            <h1 class="pr-[15px] text-[15px]">{{ 0 }}</h1>
                            <div v-if="isDropdownView" class="dropdown">Lượt xem : {{ 0 }}</div>
                        </div>
                        <div class="flex items-center relative" @mouseover="isDropdownBookmark = true"
                            @mouseout="isDropdownBookmark = false">
                            <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                viewBox="0 0 24 24">
                                <path fill="#9B9B9B"
                                    d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                            </svg>
                            <h1 class="pr-[15px] text-[15px">{{ 0 }}</h1>
                            <div v-if="isDropdownBookmark" class="dropdown">Xem danh sách bookmark : {{ 0 }}</div>
                        </div>
                        <div class="flex items-center relative" @mouseover="isDropdownComment = true"
                            @mouseout="isDropdownComment = false">
                            <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                viewBox="0 0 1792 1408">
                                <path fill="#9B9B9B"
                                    d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257m384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230" />
                            </svg>
                            <h1 class="pr-[15px] text-[15px">{{ 0 }}</h1>
                            <div v-if="isDropdownComment" class="dropdown">Di chuyển đến phần bình luận : {{ 0 }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-[50px] w-[80%] pl-[2%] flex justify-start">
        <div class="w-20%">
            <div class="flex justify-center w-[full] items-center pl-[2%]">
                <div class="flex-wrap justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                        <path fill="#747272"
                            d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                    </svg>
                    <div class="text-[25px] font-bold text-iconColor flex justify-center"> {{ 0 }}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                        <path fill="#747272"
                            d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                    </svg>
                </div>

            </div>
            <div
                class="mt-[40px] rounded-[50%] w-[40px] h-[40px] border-2 border-iconColor flex justify-center items-center py-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                    <path fill="#9B9B9B" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                </svg>
            </div>
        </div>
        <div class="w-[80%] ml-[50px] relative">
            <h1 class=" font-bold text-[50px] hover:text-nameColor">{{ article.title }}
            </h1>
            <div class="w-[10%] flex justify-end items-center right-0 absolute" @mouseover="isDropdownOptions = true"
                @mouseout="isDropdownOptions = false" @click="toggleDropdown">
                <button><svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 20 20">
                        <path fill="#9B9B9B"
                            d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0" />
                    </svg></button>
                <div v-if="isDropdownOptions" class="dropdown top-[-80px]">Hiển thị các hành động</div>
                <transition name="fade" class="mr-[20px]">
                    <div v-if="isOpenDropdownOptions"
                        class="dropdown-menu right-[-120px] rounded-sm bg-white w-[220px] flex flex-wrap justify-center font-semibold  text-[15px]">
                        <div class="flex justify-start items-center textDropdown w-full pl-[5px] mb-[5px] 
                        hover:bg-blue-100 hover:text-blue-500 hover:font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"
                                class="mr-[20px]">
                                <path fill="#9B9B9B"
                                    d="M44.08 51.37A6 6 0 0 0 42 55.9V224a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.57c16.12 8 33.49 16.58 52 16.58c13.57 0 27.76-4.6 42.56-17.42A6 6 0 0 0 230 176V55.9a6 6 0 0 0-9.93-4.54c-29 25.12-53.28 13.09-81.41-.84c-27.89-13.81-59.66-29.36-94.58.85M218 173.17c-28.08 22.8-51.88 11-79.34-2.58C113.4 158.08 85.09 144.07 54 164V58.72c28.08-22.8 51.88-11 79.34 2.56C158.6 73.79 186.91 87.8 218 67.91Z" />
                            </svg>

                            Báo cáo
                        </div>
                        <div class="flex justify-start items-center  textDropdown w-full pl-[5px] mb-[5px]
                        hover:bg-blue-100 hover:text-blue-500 hover:font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"
                                class="mr-[20px]">
                                <g fill="#9B9B9B">
                                    <path
                                        d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />
                                    <path fill-rule="evenodd"
                                        d="M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"
                                        clip-rule="evenodd" />
                                </g>
                            </svg>

                            Thêm vào serie của tôi
                        </div>
                        <div class="flex justify-start items-center  textDropdown w-full pl-[5px] mb-[5px]
                        hover:bg-blue-100 hover:text-blue-500 hover:font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"
                                class="mr-[20px]">
                                <path fill="#9B9B9B"
                                    d="m133.441 200.647l67.197-67.196l78.142 78.142l-67.196 67.197zM301.41 234.21l-67.19 67.2L412 480l68-68zM32 176h80v32H32zm35.624-85.75L90.25 67.622l56.569 56.569l-22.628 22.627zM176 32h32v80h-32zm61.32 92.195l56.569-56.569l22.627 22.627l-56.568 56.569zM67.62 293.886l56.569-56.568l22.627 22.627l-56.568 56.569z" />
                            </svg>
                            Bôi màu code
                        </div>
                    </div>
                </transition>
            </div>
            <div class="w-full mt-[50px]" v-html="article.content"></div>

        </div>
    </div>

    <div class="articles_ w-[100%]  mt-[20px] px-[4%]">
        <h1 class="font-bold text-[17px]">Bài viết liên quan</h1>
        <ul class="flex flex-wrap justify-start items-center mt-[10px] w-full">
            <li v-for="(art, index) in currentItems" :key="index"
                class="border-borderBox border-[1.5px] p-[5px] w-[24%] h-[120px] ml-[5px] shadow-lg">
                <div class="box_ flex flex-wrap  ">
                    <router-link :to="redirectUrl(art)">
                        <h1
                            class="text-[14px] font-semibold hover:text-titleColor mb-[10px] w-full truncate-title h-[40px]">
                            {{ art.title }}</h1>
                    </router-link>

                    <h2 class="text-titleColor text-[12px] hover:underline">{{ art.user.display_name }}</h2>

                    <div class="other_i flex justify-start items-center w-full mr-[20px]  pb-[20px]">
                        <div class="flex justify-around items-center">
                            <div class="flex justify-around items-center relative">
                                <!-- @mouseover="isDropdownView = true"
                                @mouseout="isDropdownView = false"> -->
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 16 16">
                                    <path fill="#9B9B9B"
                                        d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 0 1-2.335 2.348a7.326 7.326 0 0 1-7.889 0A7.615 7.615 0 0 1 1.721 8a7.594 7.594 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px]">{{ 0 }}</h1>
                                <!-- <div v-if="isDropdownView" class="dropdown">Lượt xem : {{ 0 }}</div> -->
                            </div>
                            <div class="flex items-center relative">
                                <!-- @mouseover="isDropdownBookmark = true"
                                @mouseout="isDropdownBookmark = false"> -->
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 24 24">
                                    <path fill="#9B9B9B"
                                        d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px">{{ 0 }}</h1>
                                <!-- <div v-if="isDropdownBookmark" class="dropdown">Xem danh sách bookmark : {{ 0 }}</div> -->
                            </div>
                            <div class="flex items-center relative">
                                <!-- @mouseover="isDropdownComment = true"
                                @mouseout="isDropdownComment = false"> -->
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 1792 1408">
                                    <path fill="#9B9B9B"
                                        d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257m384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px">{{ 0 }}</h1>
                                <!-- <div v-if="isDropdownComment" class="dropdown">Di chuyển đến phần bình luận : {{ 0 }} -->
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <div class="flex-wrap gap-[1px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                    <path fill="#747272"
                                        d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="top-[-2px]"
                                    viewBox="0 0 256 256">
                                    <path fill="#747272"
                                        d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                                </svg>
                            </div>
                            <div> {{ 0 }}</div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
        <div class="flex justify-center items-center mt-[10px]">
            <svg v-for="(dot, index) in dots" :key="index" @click="setSlide(index)" xmlns="http://www.w3.org/2000/svg"
                width="3em" height="3em" viewBox="0 0 24 24" :fill="currentSlide === index ? 'blue' : '#9B9B9B'"
                class="cursor-pointer">
                <path d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
            </svg>
        </div>
    </div>

    <div class="articles_ w-[100%]  mt-[20px] px-[4%]">
        <h1 class="font-bold text-[17px]">Bài viết liên quan đến {{ user.display_name }}</h1>
        <ul class="flex flex-wrap justify-start items-center mt-[10px] w-full">
            <li v-for="(art, index) in currentItems2" :key="index"
                class="border-borderBox border-[1.5px] shadow-lg p-[5px] w-[24%] h-[120px] ml-[5px]">
                <div class="box_ flex flex-wrap  ">
                    <router-link :to="redirectUrl(art)">
                        <h1
                            class="text-[14px] font-semibold hover:text-titleColor mb-[10px] w-full truncate-title h-[40px]">
                            {{ art.title }}</h1>
                    </router-link>
                    <h2 class="text-titleColor text-[12px] hover:underline">{{ art.user.display_name }}</h2>

                    <div class="other_i flex justify-start items-center w-full mr-[20px]  pb-[20px]">
                        <div class="flex justify-around items-center">
                            <div class="flex justify-around items-center relative">
                                <!-- @mouseover="isDropdownView = true"
                                @mouseout="isDropdownView = false"> -->
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 16 16">
                                    <path fill="#9B9B9B"
                                        d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 0 1-2.335 2.348a7.326 7.326 0 0 1-7.889 0A7.615 7.615 0 0 1 1.721 8a7.594 7.594 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px]">{{ 0 }}</h1>
                                <!-- <div v-if="isDropdownView" class="dropdown">Lượt xem : {{ 0 }}</div> -->
                            </div>
                            <div class="flex items-center relative">
                                <!-- @mouseover="isDropdownBookmark = true"
                                @mouseout="isDropdownBookmark = false"> -->
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 24 24">
                                    <path fill="#9B9B9B"
                                        d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px">{{ 0 }}</h1>
                                <!-- <div v-if="isDropdownBookmark" class="dropdown">Xem danh sách bookmark : {{ 0 }}</div> -->
                            </div>
                            <div class="flex items-center relative">
                                <!-- @mouseover="isDropdownComment = true"
                                @mouseout="isDropdownComment = false"> -->
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 1792 1408">
                                    <path fill="#9B9B9B"
                                        d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257m384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230" />
                                </svg>
                                <h1 class="pr-[15px] text-[15px">{{ 0 }}</h1>
                                <!-- <div v-if="isDropdownComment" class="dropdown">Di chuyển đến phần bình luận : {{ 0 }} -->
                            </div>
                        </div>
                        <div class="flex justify-center items-center">
                            <div class="flex-wrap gap-[1px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                    <path fill="#747272"
                                        d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="top-[-2px]"
                                    viewBox="0 0 256 256">
                                    <path fill="#747272"
                                        d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                                </svg>
                            </div>
                            <div> {{ 0 }}</div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
        <div class="flex justify-center items-center mt-[10px]">
            <svg v-for="(dot2, index) in dots2" :key="index" @click="setSlide2(index)"
                xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"
                :fill="currentSlide2 === index ? 'blue' : '#9B9B9B'" class="cursor-pointer">
                <path d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2" />
            </svg>
        </div>
    </div>

    <div class="comment_ w-[100%] mt-[20px] px-[4%]">
        <h1 class="font-bold text-[17px]">Bình luận</h1>
        <div class="comment_box_ mb-[10px]">
            <router-link to="/login" v-if="getLoginApiStatus != true">
                <div
                    class="w-full h-[100px] border-borderBox border-[1.5px] flex justify-center items-center text-textDisplayColor">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="none" stroke="#9B9B9B" stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1" />
                    </svg> Đăng nhập để bình luận
                </div>
            </router-link>
            <div v-else class="w-full flex flex-wrap items-center border-borderBox border-[1.5px] p-[5px]">
                <div
                    class="w-[80%]  mb-[20px]  ml-[40px] pt-[10px] border-borderBox border-b-[1.5px] border-t-0 border-l-0 border-r-0 flex justify-start items-start">
                    <button class="w-[100px] h-60px">Viết</button>
                    <button class="w-[100px] h-60px">Xem trước</button>
                </div>
                <div class="w-[80%] flex justify-start ml-[40px] items-start">
                    <img class="rounded-[50%] w-[40px] h-[40px]"
                        :src="getUserProfile.avt_url ? getUserProfile.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                        alt="Avatar">
                    <input v-model="this.text"
                        class="w-full px-[5px] h-[50px] ml-[10px] border-borderBox border-[1.5px] flex justify-start items-start"
                        placeholder="Để lại bình luận của bạn" />
                </div>
                <div class="w-[80%] flex justify-end items-center pt-[10px] ml-[40px]">
                    <button
                    @click="createNewComment"
                        class="bg-blue-400 text-white w-[100px] h-[50px] text-[18px]font-semibold flex justify-center items-center rounded-sm">Bình
                        luận</button>
                </div>
            </div>
        </div>
        <ul class="flex flex-wrap justify-start items-center mt-[15px]">
            <li v-for="(cmt1, index) in this.comments" :key="index"
                class="border-borderBox border-[1.5px] shadow-lg p-[5px] w-full h-auto ml-[5px] mb-[10px]">
                <div class="user_info w-full flex flex-wrap justify-start items-center">
                    <div class="avt_  flex justify-end mr-[10px]">
                        <img class="rounded-[50%] w-[40px] h-[40px]"
                            :src="cmt1.user.avt_url ? cmt1.user.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                            alt="Avatar">
                    </div>
                    <div class="w-[50%] flex flex-wrap">
                        <div class="info_ w-full flex justify-start">
                            <div class="flex justify-start items-start">
                                <div class="user_i font-bold text-nameColor hover:underline mr-[10px] text-[12px]">{{
                                    cmt1.user.display_name }}</div>
                                <div class="text-[12px] font-semibold text-[#9B9B9B]">{{ cmt1.user.username }}</div>
                            </div>
                        </div>
                        <div class="time_ w-full inline-block text-[10px]">{{ timeAgo(cmt1.created_at) }}</div>
                    </div>
                </div>
                <div class="comment_ w-full px-[20px] pt-[20px]  ">
                    <div v-html="cmt1.content" class="w-full"></div>
                    <div class="other_ w-full flex justify-start items-center text-[15px] mb-[20px] pb-[20px]">
                        <div class="flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
                                <path fill="#747272"
                                    d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                            </svg>
                            <div class="font-bold text-iconColor flex justify-center"> {{ 0 }}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256">
                                <path fill="#747272"
                                    d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                            </svg>
                        </div>
                        <h1 class="mx-[10px]">|</h1>
                        <div @click="toggleReply(cmt1.comment_id)" class=" text-blue-400 hover:underline">Trả lời</div>
                        <div class="mx-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                                <path fill="#9B9B9B"
                                    d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                            </svg>
                        </div>
                    </div>

                    <div v-if="getLoginApiStatus == true && replyOpen[cmt1.comment_id]"
                        class="w-full flex flex-wrap items-center ] p-[5px]">
                        <div
                            class="w-[80%]  mb-[20px]  ml-[40px] pt-[10px] border-borderBox border-b-[1.5px] border-t-0 border-l-0 border-r-0 flex justify-start items-start">
                            <button class="w-[100px] h-60px">Viết</button>
                            <button class="w-[100px] h-60px">Xem trước</button>
                        </div>
                        <div class="w-[80%] flex justify-start ml-[40px] items-start">
                            <img class="rounded-[50%] w-[40px] h-[40px]"
                                :src="getUserProfile.avt_url ? getUserProfile.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                                alt="Avatar">
                            <input v-model="this.text"
                                class="w-full px-[5px] h-[50px] ml-[10px] border-borderBox border-[1.5px] flex justify-start items-start"
                                placeholder="Để lại bình luận của bạn" />
                        </div>
                        <div class="w-[80%] flex justify-end items-center pt-[10px] ml-[40px]">
                            <button
                            @click="toggleReply(cmt1.comment_id)"
                                class="w-[100px] h-[50px] text-[18px]font-semibold flex justify-center items-center rounded-sm">Hủy</button>
                            <button
                            @click="replyComment(cmt1.comment_id,cmt1.comment_id)"
                                class="bg-blue-400 text-white w-[100px] h-[50px] text-[18px]font-semibold flex justify-center items-center rounded-sm">Reply</button>
                        </div>
                    </div>

                    <div v-if="cmt1.replies != null" class="reply_cmt_ w-full flex flex-wrap">
                        <ul class="flex flex-wrap justify-start items-center">
                            <li v-for="(cmt2, indexx) in cmt1.replies" :key="indexx"
                                class="border-borderBox border-[1.5px] shadow-lg p-[5px] w-full h-auto ml-[5px] mb-[10px]">
                                <div class="user_info w-full flex flex-wrap justify-start items-center">
                                    <div class="avt_  flex justify-end mr-[10px]">
                                        <img class="rounded-[50%] w-[40px] h-[40px]"
                                            :src="cmt2.user.avt_url ? cmt2.user.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                                            alt="Avatar">
                                    </div>
                                    <div class="w-[50%] flex flex-wrap">
                                        <div class="info_ w-full flex justify-start">
                                            <div class="flex justify-start items-start">
                                                <div
                                                    class="user_i font-bold text-nameColor hover:underline mr-[10px] text-[12px]">
                                                    {{
                                                        cmt2.user.display_name }}</div>
                                                <div class="text-[12px] font-semibold text-[#9B9B9B]">{{
                                                    cmt2.user.username }}</div>
                                            </div>
                                        </div>
                                        <div class="time_ w-full inline-block text-[10px]">{{ timeAgo(cmt2.created_at)
                                            }}</div>
                                    </div>
                                </div>
                                <div class="comment_ w-full px-[20px] pt-[20px]  ">
                                    <div class="w-full flex justify-start">
                                        <div class="text-blue-400 hover:underline mr-[5px]">{{ cmt2.reply_user }}
                                        </div>
                                        <div v-html="cmt2.content" class="w-full"></div>
                                    </div>
                                    <div
                                        class="other_ w-full flex justify-start items-center text-[15px] mb-[20px] pb-[20px]">
                                        <div class="flex justify-start items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                                viewBox="0 0 256 256">
                                                <path fill="#747272"
                                                    d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                                            </svg>
                                            <div class="font-bold text-iconColor flex justify-center"> {{ 0 }}</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                                viewBox="0 0 256 256">
                                                <path fill="#747272"
                                                    d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                                            </svg>
                                        </div>
                                        <h1 class="mx-[10px]">|</h1>
                                        <div 
                                        @click="toggleReply(cmt2.comment_id)"
                                        class=" text-blue-400 hover:underline">Trả lời</div>
                                        <div class="mx-[10px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                                viewBox="0 0 24 24">
                                                <path fill="#9B9B9B"
                                                    d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div v-if="getLoginApiStatus == true && replyOpen[cmt2.comment_id]"
                                        class="w-full flex flex-wrap items-center ] p-[5px]">
                                        <div
                                            class="w-[80%]  mb-[20px]  ml-[40px] pt-[10px] border-borderBox border-b-[1.5px] border-t-0 border-l-0 border-r-0 flex justify-start items-start">
                                            <button class="w-[100px] h-60px">Viết</button>
                                            <button class="w-[100px] h-60px">Xem trước</button>
                                        </div>
                                        <div class="w-[80%] flex justify-start ml-[40px] items-start">
                                            <img class="rounded-[50%] w-[40px] h-[40px]"
                                                :src="getUserProfile.avt_url ? getUserProfile.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                                                alt="Avatar">
                                            <input v-model="this.text"
                                                class="w-full px-[5px] h-[50px] ml-[10px] border-borderBox border-[1.5px] flex justify-start items-start"
                                                placeholder="Để lại bình luận của bạn" />
                                        </div>
                                        <div class="w-[80%] flex justify-end items-center pt-[10px] ml-[40px]">
                                            <button
                                             @click="toggleReply(cmt2.comment_id)"
                                                class="w-[100px] h-[50px] text-[18px]font-semibold flex justify-center items-center rounded-sm">Hủy</button>
                                            <button
                                            @click=" replyComment(cmt1.comment_id,cmt2.comment_id)"
                                                class="bg-blue-400 text-white w-[100px] h-[50px] text-[18px]font-semibold flex justify-center items-center rounded-sm">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import { getArticleAuth, getArticleDetails, getArticlesRelateByAuthor, getArticleRelate } from '@/services/articles.service';
import { getComments,  createComment} from '@/services/comment.service';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/vi';
import { mapGetters } from 'vuex';
dayjs.locale('vi');
dayjs.extend(relativeTime);

const customLocale = {
    name: 'vi',
    relativeTime: {
        future: 'trong %s',
        past: '%s trước',
        s: 'vài giây',
        m: '1 phút',
        mm: '%d phút',
        h: '1 giờ',
        hh: '%d giờ',
        d: '1 ngày',
        dd: '%d ngày',
        M: '1 tháng',
        MM: '%d tháng',
        y: '1 năm',
        yy: '%d năm'
    }
};

dayjs.locale(customLocale, null, true);
export default {
    name: 'ArticleView',
    data() {
        return {
            isDropdownReputation: false,
            isDropdownFollower: false,
            isDropdownArticles: false,
            isDropdownView: false,
            isDropdownComment: false,
            isDropdownBookmark: false,
            isDropdownOptions: false,
            isOpenDropdownOptions: false,
            article: {
                created_at: null,
                is_accept: null,
                title: null,
                content: null,
                article_id: null,
            },
            user: {
                username: null,
                avt_url: null,
                display_name: null,
                user_follow: 0,
                reputation: 0,
                article: 0,
            },
            comments: [],
            relate: [],
            relateAuth: [],
            currentSlide: 0,
            currentSlide2: 0,
            slides: [],
            slides2: [],
            slideInterval: null,
            slideInterval2: null,
            text: null,
            replyOpen: [],
            count_comments: null,
        }
    },
    created() {
        this.count_comments = this.comments.length;
        for (let comment in this.comments) {
            this.count_comments += comment.replies.length
        }
        this.replyOpen = Array(this.count_comments).fill(false);
    },
    computed: {
        articleUrl() {
            return this.$route.params.url;
        },
        currentItems() {
            return this.slides[this.currentSlide] || [];
        },
        dots() {
            return Array(Math.ceil(this.relate.length / 4)).fill(0);
        },
        currentItems2() {
            return this.slides2[this.currentSlide2] || [];
        },
        dots2() {
            return Array(Math.ceil(this.relateAuth.length / 4)).fill(0);
        },
        ...mapGetters("auth", {
            getUserProfile: "getUserProfile",
            getLoginApiStatus: "getLoginApiStatus",
            getLogoutStatus: "getLogout",
        })
    },
    props: {
        relate: Array,
        relateAuth: Array,
    },
    watch: {
        relate(newVal) {
            this.initializeSlides();
        },
        relateAuth(newVal) {
            this.initializeSlides2();
        }
    },
    async mounted() {
        await this.getArticles();

        await this.getArticlesRelates();
        this.slideInterval = setInterval(this.nextSlide, 5000);

        await this.getArticlesRelatesAuth();
        this.slideInterval2 = setInterval(this.nextSlide2, 5000);

        await this.getCommentByArticle();
    },

    methods: {
        async getArticlesAuth() {
            const response = await getArticleAuth(this.articleUrl)
            this.article = response.data

        },
        //article
        async getArticles() {
            const response = await getArticleDetails(this.articleUrl)
            this.article = response.data
            this.user = response.data.user
        },
        async getArticlesRelates() {
            const response = await getArticleRelate(this.articleUrl)
            this.relate = response.data

        },
        async getArticlesRelatesAuth() {
            const response = await getArticlesRelateByAuthor(this.articleUrl)
            this.relateAuth = response.data

        },

        //comment
        async getCommentByArticle() {
            const response = await getComments(this.article.article_id)
            this.comments = response.data
            console.log(this.comments)
        },
        async createNewComment(){
            let data = {
                "content" : this.text,
                "article_id" : this.article.article_id
            } ;
            const response = await createComment(data);
            window.location.reload();
        },
        async replyComment(author, reply){
            let data = {
                "content" : this.text,
                "article_id" : this.article.article_id,
                "author_comment_root" : author,
                "reply_to" : reply,
            }
            const response = await createComment(data);
            window.location.reload();
        },

        //other function
        timeAgo(date) {
            return dayjs().to(dayjs(date));
        },
        toggleDropdown() {
            console.log("cli");
            this.isOpenDropdownOptions = !this.isOpenDropdownOptions;
        },
        setSlide(index) {
            this.currentSlide = index;
        },
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.dots.length;
        },
        initializeSlides() {
            this.slides = [];
            for (let i = 0; i < this.relate.length; i += 4) {
                this.slides.push(this.relate.slice(i, i + 4));
            }
        },
        setSlide2(index) {
            this.currentSlide2 = index;
        },
        nextSlide2() {
            this.currentSlide2 = (this.currentSlide2 + 1) % this.dots2.length;
        },
        initializeSlides2() {
            this.slides2 = [];
            for (let i = 0; i < this.relateAuth.length; i += 4) {
                this.slides2.push(this.relateAuth.slice(i, i + 4));
            }
        },
        redirectUrl(article) {
            return `/users/articles/${article.address_url}`;
        },
        toggleReply(index) {
            this.replyOpen[index] = !this.replyOpen[index];
        }

    }
}
</script>