<script setup lang="ts">
import { onMounted } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();

onMounted(() => {
  navActive.upadteActiveMap('about');
});
</script>

<template>
  <section id="page-header" class="about-header">
    <h2>#KnowUs</h2>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
  </section>

  <section id="about-head" class="section-p1">
    <img src="@/assets/img/about/a6.jpg" alt="" />
    <div>
      <h2>Who We Are?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus impedit placeat in
        dignissimos sit ducimus, molestias aperiam quae ab enim fugiat voluptas omnis necessitatibus
        cupiditate sed quam error dolorem voluptatem laudantium corporis nostrum totam voluptates
        quas! Corrupti sapiente accusamus, magnam aliquid eligendi, ex hic, dignissimos aut nostrum
        facilis autem!
      </p>

      <abbr title="">
        Create stunning images with as much or as little control as you like thanks to a choice of
        Basic and Creative modes.
      </abbr>
    </div>
  </section>

  <section id="feature" class="section-p1">
    <div class="fe-box">
      <img src="@/assets/img/features/f1.png" alt="" />
      <h6>Free Shipping</h6>
    </div>
    <div class="fe-box">
      <img src="@/assets/img/features/f2.png" alt="" />
      <h6>Online Order</h6>
    </div>
    <div class="fe-box">
      <img src="@/assets/img/features/f3.png" alt="" />
      <h6>Save Money</h6>
    </div>
    <div class="fe-box">
      <img src="@/assets/img/features/f4.png" alt="" />
      <h6>Promotions</h6>
    </div>
    <div class="fe-box">
      <img src="@/assets/img/features/f5.png" alt="" />
      <h6>Happy Sell</h6>
    </div>
    <div class="fe-box">
      <img src="@/assets/img/features/f6.png" alt="" />
      <h6>F24/7 Support</h6>
    </div>
  </section>

  <section id="newsletter" class="section-p1 section-m1">
    <div class="newstext">
      <h4>Sign Up for Newsletters</h4>
      <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
    </div>
    <div class="form">
      <input type="text" placeholder="Your email address" />
      <button class="normal">Sign Up</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../scss/helpers/front';

button.normal {
  @include font-style(14px, 600, #000);
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s;
}

#page-header {
  @include bg-img('@/assets/img/banner/b1.jpg', no-repeat, cover, center);
  @include row-flex(center, 0, column, nowrap);
  text-align: center;
  width: 100%;
  height: 40vh;
  padding: 14px;

  h2,
  p {
    color: #fff;
  }
}

#page-header.about-header {
  @include bg-img('@/assets/img/about/banner.png', no-repeat, cover, center);
}

#about-head {
  @include row-flex(0, center, row, nowrap);

  img {
    width: 50%;
    height: auto;
  }

  div {
    padding-left: 40px;
  }
}

#feature {
  @include row-flex(space-between, center, row, wrap);
  .fe-box {
    width: 180px;
    text-align: center;
    padding: 25px 15px;
    box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
    border: 1px solid #cce7d0;
    border-radius: 4px;
    margin: 15px 0;

    &:hover {
      box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
    }

    img {
      margin-bottom: 10px;
    }

    h6 {
      display: inline-block;
      padding: 9px 8px 6px 8px;
      line-height: 1;
      border-radius: 4px;
      color: #088178;
      background-color: #fddde4;
    }

    &:nth-child(2) h6 {
      background-color: #cdebbc;
    }

    &:nth-child(3) h6 {
      background-color: #d1e8f2;
    }

    &:nth-child(4) h6 {
      background-color: #cdd4f8;
    }

    &:nth-child(5) h6 {
      background-color: #f6dbf6;
    }

    &:nth-child(6) h6 {
      background-color: #fff2e5;
    }
  }
}

#newsletter {
  @include row-flex(space-between, center, row, wrap);
  @include bg-img('@/assets/img/banner/b14.png', no-repeat, cover, 20% 30%);
  background-color: #041e42;

  h4 {
    @include font-style(22px, 700, #fff);
  }

  p {
    @include font-style(14px, 600, #818ea0);
    span {
      color: #ffbd27;
    }
  }

  .form {
    display: flex;
    width: 40%;
  }

  input {
    height: 3.125rem;
    padding: 0 1.25em;
    font-size: 14px;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button {
    background: #088178;
    color: #fff;
    white-space: nowrap;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

/* Media Query */
@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .section-p1 {
    padding: 40px 40px;
  }

  #feature {
    justify-content: center;

    .fe-box {
      margin: 15px 15px;
    }
  }

  #newsletter .form {
    width: 70%;
  }
}

@media (max-width: 477px) {
  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 32px;
  }

  .section-p1 {
    padding: 20px;
  }

  #feature {
    justify-content: space-between;
    .fe-box {
      width: 155px;
      margin: 0 0 15px 0;
    }
  }

  #newsletter {
    padding: 40px 20px;

    .form {
      width: 100%;
    }
  }

  #about-head {
    flex-direction: column;

    img {
      width: 100%;
      margin-bottom: 20px;
    }

    div {
      padding-left: 0px;
    }
  }
}
</style>
