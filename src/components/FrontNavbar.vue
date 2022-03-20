<script setup lang="ts">
import { onMounted, ref } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();
const isSiderbar = ref(false);

function toggleSidebar() {
  isSiderbar.value = !isSiderbar.value;
}

onMounted(() => {
  navActive.upadteActiveMap('home');
});
</script>

<template>
  <header>
    <!-- logo -->
    <router-link
      :class="{ active: navActive.getActivePage('home') }"
      class="logo"
      @click="navActive.upadteActiveMap('home')"
      to="/"
    >
    PHCY
      <!-- <img src="@/assets/img/logo.png" class="logo" alt="" /> -->
    </router-link>
    <nav>
      <!-- navbar -->
      <ul id="navbar" :class="{ active: isSiderbar }">
        <li>
          <router-link
            :class="{ active: navActive.getActivePage('home') }"
            @click="navActive.upadteActiveMap('home')"
            to="/"
            >Home
          </router-link>
        </li>
        <li>
          <router-link
            :class="{ active: navActive.getActivePage('shop') }"
            @click="navActive.upadteActiveMap('shop')"
            to="/shop"
            >Shop
          </router-link>
        </li>
        <li>
          <router-link
            :class="{ active: navActive.getActivePage('blog') }"
            @click="navActive.upadteActiveMap('blog')"
            to="/blog"
            >Blog
          </router-link>
        </li>
        <li>
          <router-link
            :class="{ active: navActive.getActivePage('about') }"
            @click="navActive.upadteActiveMap('about')"
            to="/about"
            >About
          </router-link>
        </li>
        <li>
          <router-link
            :class="{ active: navActive.getActivePage('contact') }"
            @click="navActive.upadteActiveMap('contact')"
            to="/contact"
            >Contact
          </router-link>
        </li>
        <!-- cart -->
        <li id="lg-bag">
          <router-link
            :class="{ active: navActive.getActivePage('cart') }"
            @click="navActive.upadteActiveMap('cart')"
            to="/cart"
            ><i class="bi bi-bag"></i>
          </router-link>
        </li>
        <!-- close navbar -->
        <a href="javascript:void(0)" id="close" @click="toggleSidebar">
          <i class="bi bi-x-lg"></i>
          <span class="d-none">Close</span>
        </a>
      </ul>
    </nav>
    <!-- mobile cart and hambuger -->
    <div id="mobile">
      <router-link to="/"><i class="bi bi-bag"></i></router-link>
      <a href="javascript:void(0)" @click="toggleSidebar">
        <i id="bar" class="bi bi-list"></i>
        <span class="d-none">hambuger</span>
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
/* Header */
header {
  @include row-flex(space-between, center, row, nowrap);
  padding: 20px 80px;
  background: #e3e6f3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  .logo {
    @include font-style(16px, 900, #088178);
  }
}

#navbar {
  @include row-flex(center, center, row, wrap);

  li {
    padding: 0 20px;
    position: relative;

    & a {
      @include font-style(16px, 600, #1a1a1a);
      transition: 0.3 ease;

      &:hover,
      &.active {
        color: #088178;
      }

      &.active::after,
      &:hover::after {
        content: '';
        width: 30%;
        height: 2px;
        background: #088178;
        position: absolute;
        bottom: -4px;
        left: 20px;
      }
    }
  }
}

#mobile {
  display: none;
  align-items: center;
}

#close {
  display: none;
}

/* Media Query */
@media (max-width: 768px) {
  #navbar {
    @include row-flex(flex-start, flex-start, column, wrap);
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    background-color: #e3e6f3;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 80px 0 0 10px;
    transition: 0.3s;
  }

  #navbar.active {
    right: 0px;
  }

  #navbar li {
    margin-bottom: 25px;
  }

  #mobile {
    display: flex;
    align-items: center;

    i {
      @include font-style(24px, 500, #1a1a1a);
      padding-left: 20px;
    }
  }

  #close {
    display: initial;
    position: absolute;
    top: 30px;
    left: 30px;
    color: #222;
    font-size: 24px;
  }

  #lg-bag {
    display: none;
  }
}

@media (max-width: 477px) {
  header {
    padding: 20px 30px;
  }
}
</style>
