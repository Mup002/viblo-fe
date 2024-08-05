<template>
    <div class="footer_ min-h-[100%]">
        <div class="w-full h-[500px] px-[10%] mt-[10px] bg-footerBg">
            <div
                class="w-full border border-borderFooterColor h-[400px] border-b-[2px] border-t-0 border-l-0 border-r-0">
                <ul class="flex">
                    <li class="w-[50%] mt-[30px] text-textFooterColor">
                        <div class="">
                            <h1 class="text-[18px] font-semibold ">TÀI NGUYÊN</h1>
                            <ul class="flex flex-wrap mt-[20px] w-full justify-start items-center">
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/articles">Bài viết</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/organizations">Tổ chức</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/questions">Câu hỏi</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/tags">Tags</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/videos">Videos</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/authors">tác giả</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/discussion">Thảo luận</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/recommend-system">Đề xuất hệ thống</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/tools">Công cụ</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/machine-learning">Machine Learning</router-link>
                                </li>
                                <li class="w-[40%] items-center my-[5px]">
                                    <router-link to="/system-status">Trạng thái hệ thống</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="w-[30%] mt-[30px] text-textFooterColor">
                        <div class="flex justify-start flex-wrap relative">
                            <h1 class="text-[18px] font-semibold mb-[10px] w-full">DỊCH VỤ</h1>
                            <ul class="flex justify-start items-center flex-wrap w-full">
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/favicon.ico">
                                            <h1>Viblo</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex ">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-code.png">
                                            <h1>Viblo Code</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-ctf.png">
                                            <h1>Viblo CTF</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex ">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-cv.png">
                                            <h1>Viblo CV</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex ">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-learn.png">
                                            <h1>Viblo Learning</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-partner.png">
                                            <h1>Viblo Partner</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-battle.png">
                                            <h1>Viblo Battle</h1>
                                        </div>
                                    </router-link>
                                </li>
                                <li class="my-[5px] w-full">
                                    <router-link to="/">
                                        <div class="flex">
                                            <img class="mr-[2px]  w-[25px] h-[25px] box-border"
                                                src="https://viblo.asia/images/viblo-interview.ico">
                                            <h1>Viblo Interview</h1>
                                        </div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="w-[30%] mt-[30px] text-textFooterColor flex flex-wrap justify-start">
                        <div class="w-full h-[150px]">
                            <h1 class="text-[18px] font-semibold w-full pb-[10px]">ỨNG DỤNG DI ĐỘNG</h1>
                            <div class="w-full flex flex-wrap">
                                <div class="w-[40%] flex items-center h-[500px] justify-start flex-col">
                                    <router-link to="/">
                                        <img class="w-[500px] h-[50px] box-border"
                                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png">
                                    </router-link>
                                    <router-link to="/">
                                        <img class="w-[400px] h-[50px] box-border"
                                            src="https://viblo.asia/_nuxt/img/app-store-badge.8c4986ee4828b47d16f5cd694ef065f2.svg">
                                    </router-link>
                                </div>
                                <div class="w-[40%] px-[10px]">
                                    <router-link to="/">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAIAAAAkfEPpAAACEklEQVR42u3aUY6DMAwFQO5/6e4JKhXF7yUL488KBZhEcm1zfUQ9LgTQoYsC+hWIb+t/faCb19x9hp9Q0g7QoUOHXkZfShRDL/wLxMp9p9a5vT506NChb0RPJ8yVNaeSc9MBOnTo0N+CvgKdKI6gQ4cOHfoMysrzJBpz0KFDh/4E9EQimmqcJYqmR3UZoUOHDn1jgjrt98d+DQAdOvTHozcjsZGJxlzk3aFDhw69jN5Mqol10odjrDiCDh069DL6yjXpYfTUvarFIHTo0KEX0KcGAlMD6MSgIz0Qv10cQYcOHXoBfaphlG5UNRPs2AGFDh069I3oTaxE46xZfI19DQAdOnTog+iJwmQlwSaKo+ahgQ4dOvTT0acKimaynTpMS4cAOnTo0AvozRdrbmT6cNz+EwEdOnToG9F3DSjSSb45DIEOHTr0NnpiEJwoRtKIiaEKdOjQoZ+Inn7QxMZMDVjGng06dOjQD0FPFDVTiTqNODU0hw4dOvRT0CMNoOKHPitF1timQocOHXoBPR1TELuG6ZGGF3To0KEXvk+fiubQ+YRCb+nfC3To0KGH0BMJMz3QmDociQIQOnTo0E9BTyfM9NAg0fBa2jzo0KFDfxj6rmsSGwkdOnTob0dPI6Ybdo8qjqBDh/4q9PRgYaqQSQ/QoUOHDv2/oqcbQFPJNp14E4cJOnTo0BvoohPQoUMXofgD+J8kMHoXlkcAAAAASUVORK5CYII=">
                                    </router-link>
                                </div>
                            </div>

                        </div>

                        <div class="w-full">
                            <h1 class="text-[18px] font-semibold w-full pb-[10px]">LIÊN KẾT</h1>
                            <ul class="flex justify-start items-center">
                                <li class="mr-[10px]">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                            viewBox="0 0 24 24">
                                            <path fill="white"
                                                d="M13.355 22v-9.123h3.062l.459-3.555h-3.52v-2.27c0-1.03.285-1.731 1.761-1.731L17 5.32V2.14A25.233 25.233 0 0 0 14.257 2c-2.715 0-4.573 1.657-4.573 4.7v2.622h-3.07v3.555h3.07V22z" />
                                        </svg>
                                    </router-link>
                                </li>
                                <li class="mr-[10px]">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                            viewBox="0 0 48 48">
                                            <g fill="white" fill-rule="evenodd" clip-rule="evenodd">
                                                <path
                                                    d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24" />
                                                <path
                                                    d="M19.183 45.472c-.193-.25-.193-2.475 0-6.674c-2.072.072-3.38-.072-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371c-.728-1.17-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122c.893-.412.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583c.576-.832.525-2.603-.153-5.314c2.464-.315 4.365.46 5.703 2.326c.002.01 1.756-1.043 4.527-1.043c2.772 0 3.755.858 4.514 1.043c.76.185 1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583c-1.006 2.97-2.982 4.781-5.929 5.433c-.337.108-.506.282-.506.522c0 .36.456.399 1.114 2.086c.44 1.124.471 4.336.096 9.635c-.951.242-1.691.405-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a19.799 19.799 0 0 1-2.654-.424" />
                                            </g>
                                        </svg>
                                    </router-link>
                                </li>
                                <li class="mr-[10px]">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                            viewBox="0 0 128 128">
                                            <circle cx="63.624" cy="64.474" r="22.634" fill="white" />
                                            <path fill="white"
                                                d="M64 37h54.186c-9.944-20-30.64-33.633-54.562-33.633c-19.367 0-36.619 9.173-47.764 23.271l21.123 35.748C38.015 48.48 48 37.07 64 37m56.126 4H78.294c7.403 6 12.299 13.884 12.299 23.369c0 4.663-1.183 8.631-3.268 13.631h.015l-27.757 47.511c1.335.087 2.682-.022 4.04-.022c33.609 0 60.855-27.746 60.855-61.355c.001-8-1.546-15.134-4.352-23.134M63.624 91.445c-11.672 0-21.611-7.414-25.368-17.789L13.07 30.585C6.565 40.271 2.767 51.93 2.767 64.474c0 30.632 22.634 55.972 52.089 60.224l20.996-36.179a26.85 26.85 0 0 1-12.228 2.926" />
                                        </svg>
                                    </router-link>
                                </li>
                                <li class="mr-[10px]">
                                    <router-link to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.63em" height="1.5em"
                                            viewBox="0 0 26 24">
                                            <path fill="white"
                                                d="M7.819 12.629q-.132.263-.237.487t-.211.461q-.527 1.133-.948 2.304a14.97 14.97 0 0 0-.642 2.308l-.017.101q-.105.685-.145 1.37a4.476 4.476 0 0 0 .153 1.427l-.007-.032c.065.348.234.649.473.877l.001.001c.233.2.536.324.868.329h.001a1.6 1.6 0 0 0 .511-.028l-.01.002l.474-.105c.447-.13.835-.301 1.196-.514l-.024.013q.54-.316 1.067-.685a1.14 1.14 0 0 1 .255-.116l.008-.002a.468.468 0 0 1 .292.014l-.003-.001a.53.53 0 0 1 .351.392l.001.003a.437.437 0 0 1-.17.473l-.001.001c-.512.389-1.089.756-1.697 1.074l-.068.032c-.59.306-1.286.49-2.025.5h-.003a2.383 2.383 0 0 1-1.534-.444l.007.005a2.617 2.617 0 0 1-.917-1.285l-.005-.018a4.281 4.281 0 0 1-.263-1.307v-.009a8.225 8.225 0 0 1 .056-1.357l-.004.04c.169-1.402.498-2.678.972-3.881l-.037.106a31.92 31.92 0 0 1 1.706-3.711l-.086.174a.654.654 0 0 0 .079-.289v-.001a.904.904 0 0 0-.055-.296l.002.006q-.237-.658-.448-1.317l-.421-1.317a.245.245 0 0 0-.087-.175a.274.274 0 0 0-.199-.013l.002-.001q-.895.211-1.765.487a8.684 8.684 0 0 0-1.702.747l.042-.022a4.733 4.733 0 0 0-.601.415l.009-.007a7.14 7.14 0 0 0-.54.487a1.412 1.412 0 0 0-.421.89v.043c0 .345.119.663.319.913l-.002-.003c.188.293.415.541.678.746l.007.005q.395.303.816.566q.158.079.29.158l.263.158a.622.622 0 0 1 .271.325l.001.004a.45.45 0 0 1-.041.384l.001-.002a.477.477 0 0 1-.313.263l-.003.001a.6.6 0 0 1-.425-.054l.003.002a7.699 7.699 0 0 1-1.172-.696l.023.016a6.14 6.14 0 0 1-.996-.89l-.005-.006a3.74 3.74 0 0 1-.464-.682l-.01-.02a2.75 2.75 0 0 1-.261-.76l-.003-.017a2.253 2.253 0 0 1 .069-1.011l-.004.016a2.89 2.89 0 0 1 .466-.902l-.005.007c.215-.285.458-.532.729-.744l.009-.007c.261-.206.554-.394.865-.552l.03-.014a10.493 10.493 0 0 1 1.648-.716l.077-.023q.878-.29 1.804-.5c.039-.014.087-.027.137-.038l.008-.001c.058-.012.106-.026.153-.042l-.009.003q-.053-.237-.088-.474t-.066-.474a16.041 16.041 0 0 1-.196-1.94l-.001-.035a6.4 6.4 0 0 1 .235-1.994l-.011.045c.057-.285.139-.536.246-.773l-.009.022a2.83 2.83 0 0 1 .425-.676l-.003.004a2.358 2.358 0 0 1 1.177-.77l.017-.004a2.958 2.958 0 0 1 1.455.018L9.166.096a4.876 4.876 0 0 1 1.426.591l-.021-.012c.481.296.889.583 1.279.891l-.028-.021c.1.093.165.223.175.367v.002l.001.032a.461.461 0 0 1-.146.337a.502.502 0 0 1-.327.184h-.003a.524.524 0 0 1-.383-.106l.001.001q-.316-.211-.606-.421a6.835 6.835 0 0 0-.572-.377l-.033-.018a3.586 3.586 0 0 0-.699-.335l-.026-.008a2.463 2.463 0 0 0-.806-.132h-.025h.001h-.014c-.219 0-.426.054-.608.148l.007-.003a1.228 1.228 0 0 0-.458.429l-.003.005a2.042 2.042 0 0 0-.365.736L6.93 2.4a6.13 6.13 0 0 0-.155.797l-.003.033a8.488 8.488 0 0 0-.01 1.84l-.003-.036c.07.688.168 1.294.297 1.889l-.02-.111v.009a.14.14 0 0 0 .053.109c.034.025.077.04.124.04h.008q.737-.079 1.449-.145t1.422-.119a.958.958 0 0 0 .269-.081l-.006.002a.66.66 0 0 0 .209-.183l.001-.002a28.599 28.599 0 0 1 1.957-2.26l-.008.009a17.814 17.814 0 0 1 2.191-1.929l.047-.034a14.02 14.02 0 0 1 1.305-.886l.065-.036a6.445 6.445 0 0 1 1.481-.647l.047-.012a3.893 3.893 0 0 1 1.004-.184h.01a2.699 2.699 0 0 1 1.059.164l-.019-.006c.404.127.744.361.998.668l.003.004c.244.309.434.674.548 1.071l.005.022c.134.401.211.863.211 1.342v.012c0 .469-.029.932-.084 1.386l.005-.054q-.026.184-.053.351c-.022.138-.05.256-.084.372l.005-.021a.451.451 0 0 1-.196.328l-.002.001a.525.525 0 0 1-.385.088h.003a.514.514 0 0 1-.342-.183l-.001-.001a.505.505 0 0 1-.105-.398v.003q.026-.316.079-.645c.033-.194.052-.417.053-.645a5.79 5.79 0 0 0-.001-.795l.001.018a6.108 6.108 0 0 0-.112-.816l.007.04a1.5 1.5 0 0 0-.679-1.063l-.006-.004a1.782 1.782 0 0 0-1.33-.115l.013-.003a4.771 4.771 0 0 0-1.16.408l.027-.013q-.527.263-1.053.579a14.8 14.8 0 0 0-1.93 1.534l.007-.007q-.895.843-1.712 1.765q-.158.158-.316.342t-.29.342v.004a.052.052 0 0 1-.013.035a.101.101 0 0 0-.013.066v-.001h.29c1.496.019 2.947.124 4.373.31l-.186-.02c1.568.203 2.967.507 4.32.918l-.186-.049c.762.213 1.387.433 1.996.687l-.112-.042c.702.289 1.296.594 1.86.941l-.056-.032c.324.211.603.419.869.643l-.013-.011c.276.232.521.483.743.754l.008.01c.394.469.633 1.079.633 1.745l-.001.089v-.004a2.618 2.618 0 0 1-.841 1.723l-.002.002a5.343 5.343 0 0 1-1.133.864l-.026.014a8.954 8.954 0 0 1-1.278.593l-.065.021a.534.534 0 0 1-.372-.028l.003.001a.483.483 0 0 1-.262-.286l-.001-.003a.473.473 0 0 1 .001-.385l-.001.003a.573.573 0 0 1 .286-.301l.003-.001q.316-.158.645-.303a4.52 4.52 0 0 0 .633-.34l-.018.011c.185-.111.344-.224.494-.348l-.007.005q.224-.184.439-.395c.249-.24.414-.566.447-.929v-.014c0-.364-.128-.699-.342-.961l.002.003a3.422 3.422 0 0 0-.609-.654l-.006-.005a6.249 6.249 0 0 0-.722-.511l-.028-.016a10.552 10.552 0 0 0-1.915-.976l-.074-.025a19.122 19.122 0 0 0-1.965-.648l-.155-.036q-1.133-.29-2.277-.5a18.83 18.83 0 0 0-2.239-.286l-.065-.004q-.922-.053-1.857-.088t-1.857-.066h-.01a.69.69 0 0 0-.232.041l.005-.002a.283.283 0 0 0-.157.143l-.001.002L9.66 9.57q-.553.843-1.08 1.686a.247.247 0 0 0-.066.144v.001a.348.348 0 0 0 .013.174l-.001-.003q.474 1.08.988 2.133t1.119 2.067t1.277 1.975t1.435 1.856c.448.519.9.991 1.374 1.44l.009.008c.465.441.977.84 1.526 1.187l.041.024c.238.161.511.311.797.435l.033.013c.267.117.577.192.902.21h.007a1.392 1.392 0 0 0 .785-.162l-.007.004c.228-.133.412-.321.536-.546l.004-.007c.131-.208.235-.45.299-.707l.004-.017a6.63 6.63 0 0 0 .141-.767l.004-.036a10.322 10.322 0 0 0-.114-2.602l.009.061q-.211-1.251-.527-2.488q-.369-1.264-.843-2.475t-1.027-2.398a.819.819 0 0 1-.086-.192l-.002-.006a.304.304 0 0 1-.012-.2v-.004c0-.122.05-.232.132-.31a.541.541 0 0 1 .313-.158h.003a.511.511 0 0 1 .319.054l-.003-.001a.507.507 0 0 1 .236.26l.001.003q.184.421.395.856t.395.878q.553 1.343 1.001 2.738c.265.788.503 1.745.669 2.728l.016.116c.095.575.17 1.277.208 1.99l.002.052a7.372 7.372 0 0 1-.195 2.092l.01-.05q-.053.211-.132.439a3.743 3.743 0 0 1-.194.461l.01-.022c-.233.545-.638.98-1.145 1.244l-.014.007c-.319.157-.694.25-1.09.25c-.221 0-.435-.029-.639-.082l.017.004c-.53-.11-1-.297-1.425-.551l.021.012a11.699 11.699 0 0 1-1.276-.875l.025.019a15.09 15.09 0 0 1-2.013-1.906l-.015-.017q-.922-1.053-1.738-2.185a28.32 28.32 0 0 1-1.619-2.536l-.076-.145q-.777-1.383-1.435-2.857l-.053-.105zm-.526-4.636l.658 2.16q.395-.632.777-1.212t.803-1.185zm5.977 5.531h-.018c-.42 0-.801-.171-1.075-.448a1.362 1.362 0 0 1-.437-1.001l.002-.083v-.019c0-.415.172-.789.448-1.057a1.468 1.468 0 0 1 1.057-.448h.024h-.001h.018c.42 0 .801.171 1.075.448c.284.265.461.642.461 1.061v.02v-.001v.019c0 .418-.177.795-.46 1.06l-.001.001a1.51 1.51 0 0 1-1.075.448h-.015h.001z" />
                                        </svg>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="w-full py-[10px] h-[100px] flex items-center">
                <div class="w-[30%] flex items-center h-full">
                    <h1 class="text-[15px] text-textFooterColor">© 2024 Viblo. All rights reserved.</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer"
}
</script>
