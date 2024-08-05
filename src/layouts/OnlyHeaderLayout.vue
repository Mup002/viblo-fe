<template>
    <div>
      <Header /> 
      <Nav/>
      <router-view />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
 
  export default {
    name: 'DefaultLayout',
    components: {
      Header,
    }
  };
  </script>
  