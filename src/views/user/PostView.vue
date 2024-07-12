<template>
    <div class="w-full h-full min-h-screen bg-bgPost">
        <input class="title_ px-[15px] w-[90%] h-[40px] mx-[5%] border-2 mt-[30px] rounded-sm" placeholder="Tiêu đề">
        </input>
        <div class="w-[90%] mx-[5%] mt-[30px] relative">
            <input class="h-[40px] border-2 rounder-sm px-[15px] w-[70%] "
                placeholder="Gắn thẻ bài viết của bạn. Tối đa 5 thẻ. Ít nhất" />
            <div class="h-[40px] border-2 rounder-sm px-[15px] w-[10%] float-right flex items-center justify-center bg-white hover:text-blue-400"
                @click="toggleDropdown">Lưu <svg class="ml-[2px]" xmlns="http://www.w3.org/2000/svg" width="1em"
                    height="1em" viewBox="0 0 24 24">
                    <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5" />
                </svg></div>
            <transition name="fade" class="mt-[10px] mr-[10px] h-[300px]">
                <div v-if="isDropdownVisible" class="dropdown-menu w-[250px] flex flex-wrap justify-center drop_ bg-white">
                    <div class="flex flex-wrap items-center w-full h-[200px] z-[100]  border-1 pl-[5px] border-t-0 border-l-0 border-r-0 border-b-[2px] mx-[10px]">
                        <div class="w-full ">
                            <h1 class="text-[15px] mt-[5px]">Xuất bản bài viết của bạn</h1>
                            <h2 class="text-[15px] mt-[5px]"><span class="font-semibold">Giấy phép: </span>All rights
                                reserved</h2>
                            
                        </div>
                        <div class="checkbox-group w-full z-[50]  ">
                            <h3>Hiển thị:</h3>
                            <div class="checkbox-group flex justify-start">
                                <div>
                                    <input type="radio" id="option1" name="checkboxGroup" v-model="selectedOption"
                                        value="option1">
                                    <label for="option1">Option 1</label><br>
                                </div>

                                <div>
                                    <input type="radio" id="option2" name="checkboxGroup" v-model="selectedOption"
                                        value="option2">
                                    <label for="option2">Option 2</label><br>
                                </div>

                                <div>
                                    <input type="radio" id="option3" name="checkboxGroup" v-model="selectedOption"
                                        value="option3">
                                    <label for="option3">Option 3</label>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex items-center mt-[40px]">
                            <button class="w-[80px] h-[40px] text-[12px] border-2 mt-[15px] bg-blue-100 rounded-md hover:bg-bgUpBtn">Xuất bản</button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="mx-[5%] mt-[50px] w-[90%] h-[50%]">
            <ckeditor class="h-[100%]" :editor="editor" v-model="editorData" :config="editorConfig"
            placehoder="dddddddddd"></ckeditor>
            <code>{{ editorData }}</code>
        </div>
    </div>
</template>

<script>
import {
    HeadingButtonsUI,
    ClassicEditor, Bold, Strikethrough,
    Essentials, Italic, Paragraph, Undo,
    Link, Heading, Code, ListProperties,
    BlockQuote, Table, HorizontalLine, Image, ImageToolbar, ImageCaption, ImageStyle, ImageUpload, MediaEmbed, Alignment, IconView


} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

import coreTranslations from 'ckeditor5/translations/es.js';
import premiumFeaturesTranslations from 'ckeditor5-premium-features/translations/es.js';
// More imports...



// Style sheets imports...

export default {
    name: 'CKEditor',
    data() {
        return {
            selectedOption: null,
            isDropdownVisible: false,
            editor: ClassicEditor,
            editorData: null,
            editorConfig: {
                placeholder:
                'Nội dung',
                toolbar: [
                    'bold', 'italic', 'strikethrough', 'heading1', 'heading2', 'heading3', '|', 'code', 'blockQuote', 'bulletedList', 'numberedList', 'insertTable', 'horizontalLine', '|', 'link', 'imageUpload', 'mediaEmbed', '|', 'alignment:left', 'alignment:center', 'alignment:right', '|', 'iconView', 'undo', 'redo',
                ],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1', toolbarButton: 'heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2', toolbarButton: 'heading2' },
                        { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3', toolbarButton: 'heading3' },
                    ]
                },
                image: {
                    toolbar: [
                        'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
                    ]
                },
                alignment: {
                    options: ['left', 'center', 'right', 'justify']
                },
                plugins: [Bold, Essentials, Italic, Paragraph, Link, Heading, Strikethrough, Code, ListProperties, BlockQuote, Table, HorizontalLine, Image, ImageToolbar, ImageCaption, ImageStyle, ImageUpload, MediaEmbed, Alignment, IconView],
                translations: [coreTranslations, premiumFeaturesTranslations]
            }
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        }
    }

}
</script>name: 'CKEditor',
<!-- heading: {
    options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
    ]
}, -->