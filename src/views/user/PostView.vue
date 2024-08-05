<template>
    <div class="w-full h-full min-h-screen bg-bgPost">
        <input v-model="title" class="title_ px-[15px] w-[90%] h-[40px] mx-[5%] border-2 mt-[30px] rounded-sm" placeholder="Tiêu đề">
        </input>
        <div class="w-[90%] mx-[5%] mt-[30px] relative">
            <input v-model="searchQuery" @input="onSearch" class="h-[40px] border-2 rounded-sm px-[15px] w-[70%]"
                placeholder="Gắn thẻ bài viết của bạn. Tối đa 5 thẻ. Ít nhất" />
            <ul v-if="suggestions.length > 0" class="suggestions-list ">
                <li v-for="tag in suggestions" :key="tag.tag_id" @click="addTag(tag)" class="">
                    {{ tag.tagname }}
                </li>
            </ul>
            <div v-if="selectedTags.length > 0" class="selected-tags">
                <span v-for="tag in selectedTags" :key="tag.tag_id" class="tag-item">
                    {{ tag.tagname }}
                    <button @click="removeTag(tag)" class="remove-tag">x</button>
                </span>
            </div>
            <div class="h-[40px] border-2 rounder-sm px-[15px] w-[10%] float-right flex items-center justify-center bg-white hover:text-blue-400"
                @click="toggleDropdown">Lưu <svg class="ml-[2px]" xmlns="http://www.w3.org/2000/svg" width="1em"
                    height="1em" viewBox="0 0 24 24">
                    <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5" />
                </svg></div>
            <transition name="fade" class="mt-[10px] mr-[10px] h-[300px]">
                <div v-if="isDropdownVisible"
                    class="dropdown-menu w-[250px] flex flex-wrap justify-center drop_ bg-white">
                    <div
                        class="flex flex-wrap items-center w-full h-[200px] z-[100]  border-1 pl-[5px] border-t-0 border-l-0 border-r-0 border-b-[2px] mx-[10px]">
                        <div class="w-full ">
                            <h1 class="text-[15px] mt-[5px]">Xuất bản bài viết của bạn</h1>
                            <h2 class="text-[15px] mt-[5px]"><span class="font-semibold">Giấy phép: </span>All rights
                                reserved</h2>

                        </div>
                        <div class="checkbox-group w-full z-[50]  ">
                            <h3>Hiển thị:</h3>
                            <div class="checkbox-group flex justify-start">
                                <ul>
                                    <li v-for="(privacy, index) in this.privacies" :index="index">
                                        <div>
                                            <input type="radio" :id="'option' + privacy.privacy_id" name="checkboxGroup"
                                                v-model="selectedOption" :value="privacy.privacy_id">
                                            <label :for="'option' + privacy.privacy_id">{{ privacy.name }}</label><br>
                                        </div>
                                    </li>
                                </ul>
                                <div v-if="this.selectedOption == 2">
                                    <VueDatePicker v-model="this.date"></VueDatePicker>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex items-center mt-[20px]">
                           
                            <button
                                class="w-[80px] h-[40px] text-[12px] border-2 mt-[15px] bg-blue-100 rounded-md hover:bg-bgUpBtn"
                                @click="createNewArticle"
                                >Xuấtbản</button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="mx-[5%] mt-[50px] w-[90%] h-[50%]">
            <ckeditor class="h-[100%]" :editor="editor" v-model="editorData" :config="editorConfig"
                placeholder="dddddddddd"></ckeditor>
            <code>{{ editorData }}</code>
        </div>
    </div>
</template>

<script>
import { findTag } from '@/services/tag.service';
import { getPrivacies } from '@/services/privacy.service';
import {createArticle} from '@/services/articles.service';
import {
    HeadingButtonsUI,
    ClassicEditor, Bold, Strikethrough,
    Essentials, Italic, Paragraph, Undo,
    Link, Heading, Code, ListProperties,
    BlockQuote, Table, HorizontalLine, Image, ImageToolbar, ImageCaption, ImageStyle, ImageUpload, MediaEmbed, Alignment, IconView,
    


} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
import moment from 'moment';
import coreTranslations from 'ckeditor5/translations/es.js';
import premiumFeaturesTranslations from 'ckeditor5-premium-features/translations/es.js';
import { ref } from 'vue';
export default {
    name: 'CKEditor',
    data() {
        return {
            title:null,
            time: null,
            date: null,
            searchQuery: '',
            suggestions: [],
            selectedTags: [],
            selectedTagsId: [],
            privacies: [],
            privacy: null,
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
    async mounted() {
        await this.getAllPrivacies();
    },
    methods: {
        ////
        async onSearch() {
            if (this.searchQuery.trim() === '') {
                this.suggestions = [];
                return;
            }
            try {
                const response = await findTag(this.searchQuery);
                this.suggestions = response;
            } catch (error) {
                console.error(error);
            }
        },

        async getAllPrivacies() {
            const response = await getPrivacies();
            this.privacies = response;

        },

        async createNewArticle(){
            const payload = {
                'title' : this.title,
                'content' : this.editorData,
                'tags' : this.selectedTagsId,
                'privacy_id' : this.selectedOption,
                'published_at' : moment(this.date).format('YYYY-MM-DD HH:mm::ss')
            };
            // console.log(payload);
            const response = await createArticle(payload);
            const article = response;
            this.$router.push(`/users/articles/${article.address_url}`)
            // console.log(article.address_url);
        },
        ///
        addTag(tag) {
            if (this.selectedTags.length < 5 && !this.selectedTags.some(t => t.tag_id === tag.tag_id)) {
                this.selectedTags.push(tag);
                this.selectedTagsId.push(tag.tag_id);
                this.searchQuery = '';
                this.suggestions = [];
            }
        },
        removeTag(tag) {
            this.selectedTags = this.selectedTags.filter(t => t.tag_id !== tag.tag_id);
            this.selectedTagsId = this.selectedTagsId.filter(t => t !== tag.tag_id);
        },
        toggleDropdown() {
            this.isDropdownVisible = !this.isDropdownVisible;
        },
        format(date){
            moment(date).format('DD/MM/YYYY')
        }
    }

}
</script>name: 'CKEditor',
