<template>
    
    <div class="main_content mt-[40px] flex">
        <div class="r_content w-[70%]  items-center pl-[5%]">
            <div class="w-full relative">
                <h1
                    class="w-full mx-auto pl-[10%] mb-[20px] flex justify-center items-center text-textDisplayColor text-[15px]">
                    Series không có bài viết nào sẽ chỉ được hiển thị trên trang cá nhân của người dùng và sẽ không được
                    hiển thị ở đây.
                </h1>
                <div
                    class="w-[150px] h-[40px] rounded-sm bg-bgUpBtn float-right flex justify-center items-center hover:bg-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="white" d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6z" />
                    </svg>
                    <h1 class="text-[15px] text-white font-semibold">TẠO SERIES MỚI</h1>
                </div>
            </div>
            <ul class="flex-wrap items-center w-full mt-[20px]">
                <li v-for="(serie, index) in this.serieList" :key="index">
                    <div class="w-[100%] flex justify-start pl-[10%]  mb-[6px] mx-[auto] pb-[8px]">
                        <div class="avt_ w-[6%] flex justify-end border-b-[1px]">
                            <img class="mx-4 rounded-[50%] w-[40px] h-[40px]"
                                :src="serie.user.avt_url ? serie.user.avt_url : 'https://images.viblo.asia/60x60/d1cbe1cf-3a91-41c1-a7b4-49c51e3db42a.jpg'"
                                alt="Avatar">
                        </div>
                        <div class="body_ w-[80%] flex-wrap border-b-[1px] ">
                            <div class="flex justify-start items-center text-[12px]">
                                <div class="user_i text-nameColor hover:underline">{{ serie.user.display_name }}</div>
                                <div class="time_up ml-[20px] relative" @mouseover="showDropdownTime(index)"
                                    @mouseout="hideDropdownTime(index)">
                                    {{ timeAgo(serie.created_at) }}
                                    <div v-if="isDropdownTime[index]" class="dropdown">
                                        {{ formatDate(serie.created_at) }}
                                    </div>
                                </div>
                                <div class="url_ ml-[40px]">
                                    <router-link>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 24 24">
                                            <path fill="#747272" fill-rule="evenodd"
                                                d="M11.874 11h.252c.444-1.725 2.01-3 3.874-3h2a4 4 0 1 1 0 8h-2a4.002 4.002 0 0 1-3.874-3h-.252A4.002 4.002 0 0 1 8 16H6a4 4 0 1 1 0-8h2a4.002 4.002 0 0 1 3.874 3m-2.124.031A2 2 0 0 0 8 10H6a2 2 0 1 0 0 4h2a2 2 0 0 0 1.75-1.031a1 1 0 0 1 0-1.938M14 12.97A2 2 0 0 0 15.75 14h2a2 2 0 1 0 0-4h-2A2 2 0 0 0 14 11.031a1 1 0 0 1 0 1.938" />
                                        </svg>
                                    </router-link>
                                </div>
                            </div>
                            <div class="title_ flex w-full mt-[10px]">
                                <h1 class=" mr-[20px] font-bold text-[16px] hover:text-nameColor">{{ serie.title }}</h1>
                                <div class="">
                                    <ul class="flex justify-center items-center">
                                        <li class="mr-[4px] h-[20px] flex items-center border rounded-[5px] text-[12px] bg-tagBg hover:bg-tagBgHover"
                                            v-for="(tag, indexx) in serie.tags" :key="indexx">
                                            {{ tag.tagname }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tag_"> </div>
                            <div class="other_i flex justify-between items-center w-full">
                                <div class="flex justify-around items-center">
                                    <div class="flex justify-around items-center">
                                        <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em"
                                            height="1.2em" viewBox="0 0 16 16">
                                            <path fill="#747272"
                                                d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 0 1-2.335 2.348a7.326 7.326 0 0 1-7.889 0A7.615 7.615 0 0 1 1.721 8a7.594 7.594 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5" />
                                        </svg>
                                        <h1 class="pr-[5px]">{{ 0 }}</h1>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em"
                                            height="1.2em" viewBox="0 0 24 24">
                                            <path fill="#747272"
                                                d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                                        </svg>
                                        <h1 class="pr-[5px]">{{ 0 }}</h1>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em"
                                            height="1.2em" viewBox="0 0 1792 1408">
                                            <path fill="#747272"
                                                d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257m384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230" />
                                        </svg>
                                        <h1 class="pr-[5px]">{{ 0 }}</h1>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em"
                                            viewBox="0 0 1792 1792">
                                            <path fill="#747272"
                                                d="M768 1664h896v-640h-416q-40 0-68-28t-28-68V512H768zm256-1440v-64q0-13-9.5-22.5T992 128H288q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h704q13 0 22.5-9.5t9.5-22.5m256 672h299l-299-299zm512 128v672q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-160H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88" />
                                        </svg>
                                        <h1 class="pr-[5px]">{{ serie.articles }}</h1>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="flex-wrap ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 256 256">
                                            <path fill="#747272"
                                                d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                            viewBox="0 0 256 256">
                                            <path fill="#747272"
                                                d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                                        </svg>
                                    </div>
                                    <div> {{ 0 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="flex justify-center items-center w-full px-[5%] ">
                <div class="w-[40px] h-[40px] border-black border-[2px] flex items-center justify-center mr-[4px]"
                    @click="prevPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20">
                        <path fill="#625b5b" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
                    </svg>
                </div>
                <ul class="flex justify-center items-center">
                    <li v-for="(item, index) in items" :key="index">
                        <div class="w-[40px] h-[40px] border-[2px] border-black  flex items-center justify-center mr-[4px]"
                            :class="{ 'border-borderPage': currentPage == (index + 1) }" @click="changePage(index + 1)">
                            {{ index + 1 }}
                        </div>
                    </li>
                </ul>
                <div class="w-[40px] h-[40px] border-black border-[2px] flex items-center justify-center mr-[4px]"
                    @click="nextPage()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20">
                        <path fill="#625b5b" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="l_content w-[30%] mx-[10px] h-full pr-[10%] overflow-y-auto">
            <h1 class="text-nameColor">CÂU HỎI MỚI NHẤT</h1>
            <ul class="flex justify-start items-center flex-col">
                <li v-for="(question, index) in this.questionList" :key="index"
                    class="w-full flex flex-col border border-textDisplayColor pb-[5px] border-t-0 border-b-1 border-r-0 border-l-0 justify-center items-center mx-[2px]">
                    <div class="w-full mb-[20px]">
                        <h1 class="hover:text-nameColor">{{ question.title }}</h1>
                    </div>
                    <div class="w-full mb-[10px]">
                        <div class="flex justify-start items-center">
                            <div class="flex justify-center items-center mr-[5px]">
                                <div class="flex-wrap ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 256 256">
                                        <path fill="#747272"
                                            d="M215.39 163.06A8 8 0 0 1 208 168H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 1.73 8.72" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                        viewBox="0 0 256 256">
                                        <path fill="#747272"
                                            d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66" />
                                    </svg>
                                </div>
                                <div class="pl-[2px]"> {{ question.votes }}</div>
                            </div>

                            <div class="flex items-center mr-[5px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <defs>
                                        <mask id="ipTBack0">
                                            <path fill="#555" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round"
                                                stroke-width="4"
                                                d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
                                                clip-rule="evenodd" />
                                        </mask>
                                    </defs>
                                    <path fill="#625b5b" d="M0 0h48v48H0z" mask="url(#ipTBack0)" />
                                </svg>
                                <h1 class="pr-[5px] pl-[2px]">{{ 0 }}</h1>
                            </div>
                            <div class="flex items-center mr-[5px]">
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 16 16">
                                    <path fill="#747272"
                                        d="M8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5c-1.486-2.968-4.511-5-8-5m3.945 2.652c.94.6 1.737 1.403 2.335 2.348a7.594 7.594 0 0 1-2.335 2.348a7.326 7.326 0 0 1-7.889 0A7.615 7.615 0 0 1 1.721 8a7.594 7.594 0 0 1 2.52-2.462a4 4 0 1 0 7.518 0c.062.037.124.075.185.114zM8 6.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 6.5" />
                                </svg>
                                <h1 class="pr-[5px] pl-[2px]">{{ 0 }}</h1>
                            </div>
                            <div class="flex items-center mr-[5px]">
                                <svg class="pr-[5px]" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                    viewBox="0 0 1792 1408">
                                    <path fill="#747272"
                                        d="M1408 512q0 139-94 257t-256.5 186.5T704 1024q-86 0-176-16q-124 88-278 128q-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5t2-6l2.5-5l3.5-5.5l4-5l4.5-5l4-4.5q5-6 23-25t26-29.5t22.5-29t25-38.5t20.5-44Q142 841 71 736T0 512q0-139 94-257T350.5 68.5T704 0t353.5 68.5T1314 255t94 257m384 256q0 120-71 224.5T1526 1169q10 24 20.5 44t25 38.5t22.5 29t26 29.5t23 25q1 1 4 4.5t4.5 5t4 5t3.5 5.5l2.5 5l2 6l.5 6.5l-1 6.5q-3 14-13 22t-22 7q-50-7-86-16q-154-40-278-128q-90 16-176 16q-271 0-472-132q58 4 88 4q161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152q129 71 204 178t75 230" />
                                </svg>
                                <h1 class="pr-[5px] pl-[2px]">{{ 0 }}</h1>
                            </div>

                        </div>
                    </div>
                    <h1 class="w-full text-textDisplayColor hover:text-black">{{ question.user.display_name }}</h1>
                </li>
            </ul>
        </div>
        <button v-show="showButton" @click="scrollToTop"
            class="fixed bottom-4 right-4 bg-bgUpBtn text-[#ffff] px-4 py-2 rounded shadow flex items-center justify-center w-[50px] h-[50px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                <path fill="#ffff" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                    d="M5 24L24 6l19 18H31v18H17V24z" />
            </svg>
        </button>
    </div>
</template>
<script>
import axios from "axios"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/vi';
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
    components: {

    },
    data() {
        return {
            serieList: [],
            questionList: [],
            currentPage: 1,
            isDropdownTime: [],
            title: true,
            isDropdownTitle: false,
            showContent: false,
            isDropdownContent: false,
            pageInfo: null,
            items: Array.from({ length: 10 }),
            showButton: false

        }
    },
    async created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    async mounted() {
        this.getSerieListByPage(this.currentPage);
        this.getQuestionLatest();
        if (this.pageInfo.current_page != this.currentPage) {
            this.currentPage = this.pageInfo.current_page;
        }

    },
    methods: {
        async getSerieListByPage(pageNumber) {
            try {
                const response = await axios.get(`http://viblo.local/api/v1/series?page=${pageNumber}`)
                this.serieList = response.data.data
                this.pageInfo = response.data.page
            } catch (error) {
                console.log(error)
            }
        },
        timeAgo(date) {
            return dayjs().to(dayjs(date));
        },
        formatDate(date) {
            return dayjs(date).format('DD/MM/YYYY HH:mm (A)');
        },
        showDropdownTime(index) {
            this.isDropdownTime.splice(index, 1, true);
        },
        hideDropdownTime(index) {
            this.isDropdownTime.splice(index, 1, false);
        },
        async getQuestionLatest() {
            try {
                const response = await axios.get('http://viblo.local/api/v1/questions/threeLatest')
                this.questionList = response.data
            } catch (error) {
                console.log(error);
            }

        },
        nextPage() {
            if (this.currentPage == this.pageInfo.last_page) {
                this.currentPage = this.pageInfo.last_page;
            } else {
                this.getSerieListByPage(this.currentPage++);
            }

        },
        prevPage() {
            if (this.currentPage == 1) {
                this.currentPage = 1;
            } else {
                this.getSerieListByPage(this.currentPage--);
            }
        },
        changePage(index) {
            this.getSerieListByPage(index);
            this.currentPage = index
        },
        handleScroll() {
            if (window.scrollY > window.innerHeight / 2) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>