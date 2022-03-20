<script setup lang="ts">
import Navbar from '@/components/FrontNavbar.vue';
import Footer from '@/components/FrontFooter.vue';
</script>
<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<style lang="scss" scoped>
</style>
