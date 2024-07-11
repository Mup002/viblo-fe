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
  import Footer from '@/components/Footer.vue';
  import Nav from '@/components/Nav.vue';
  export default {
    name: 'DefaultLayout',
    components: {
      Header,
      Footer,
      Nav
    }
  };
  </script>
  