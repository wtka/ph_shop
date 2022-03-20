<script setup lang="ts">
import { onMounted } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();

onMounted(() => {
  navActive.upadteActiveMap('blog');
});
</script>

<template>
  <section id="page-header" class="blog-header">
    <h2>#readmore</h2>
    <p>Read all case studies about our products!</p>
  </section>

  <section id="blog">
    <div class="blog-box">
      <div class="blog-img">
        <img src="@/assets/img/blog/b1.jpg" alt="" />
      </div>
      <div class="blog-details">
        <h4>The Cotton-Jersry Zip-up Hoodie</h4>
        <p>
          Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse
          hexagon irony, godard...
        </p>
        <a href="#">CONTINUE READING</a>
      </div>
      <h1>13/01</h1>
    </div>
    <div class="blog-box">
      <div class="blog-img">
        <img src="@/assets/img/blog/b2.jpg" alt="" />
      </div>
      <div class="blog-details">
        <h4>How to Style a Quiff</h4>
        <p>
          Kickstarter man braid godard coloring book. Raclitte waistcoat selfies yr wolf chartreuse
          hexagon irony, godard...
        </p>
        <a href="#">CONTINUE READING</a>
      </div>
      <h1>13/04</h1>
    </div>
    <div class="blog-box">
      <div class="blog-img">
        <img src="@/assets/img/blog/b3.jpg" alt="" />
      </div>
      <div class="blog-details">
        <h4>Must-Have Skater Girl Items</h4>
        <p>
          Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse
          hexagon irony, godard...
        </p>
        <a href="#">CONTINUE READING</a>
      </div>
      <h1>12/01</h1>
    </div>
    <div class="blog-box">
      <div class="blog-img">
        <img src="@/assets/img/blog/b4.jpg" alt="" />
      </div>
      <div class="blog-details">
        <h4>Runway-Inspired Trands</h4>
        <p>
          Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse
          hexagon irony, godard...
        </p>
        <a href="#">CONTINUE READING</a>
      </div>
      <h1>16/01</h1>
    </div>
    <div class="blog-box">
      <div class="blog-img">
        <img src="@/assets/img/blog/b6.jpg" alt="" />
      </div>
      <div class="blog-details">
        <h4>AW20 Menswear Trends</h4>
        <p>
          Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse
          hexagon irony, godard...
        </p>
        <a href="#">CONTINUE READING</a>
      </div>
      <h1>10/03</h1>
    </div>
  </section>

  <section id="pagination" class="section-p1">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">
      <i class="bi bi-box-arrow-in-right"></i>
      <span class="d-none">Nextpage</span>
    </a>
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

/* Home Page */
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

/* Shop Page */
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

#page-header.blog-header {
  @include bg-img('@/assets/img/banner/b19.jpg', no-repeat, cover, center);
}

#blog {
  padding: 150px 150px 0 150px;

  .blog-box {
    @include row-flex(0, center, row, nowrap);
    width: 100%;
    padding-bottom: 90px;
    position: relative;
  }

  .blog-img {
    width: 50%;
    margin-right: 40px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .blog-details {
    width: 50%;

    a {
      @include font-style(11px, 700, #000);
      position: relative;
      transition: 0.3s;

      &::after {
        content: '';
        width: 50px;
        height: 1px;
        background-color: #000;
        position: absolute;
        top: 4px;
        right: -60px;
      }

      &:hover {
        color: #088178;

        &::after {
          background-color: #088178;
        }
      }
    }
  }

  h1 {
    @include font-style(70px, 700, #c9cbce);
    position: absolute;
    top: -40px;
    left: 0;
    z-index: -9;
  }
}

#pagination {
  text-align: center;

  a {
    @include font-style(16px, 600, #fff);
    background-color: #088178;
    padding: 15px 20px;
    margin: 10px;
    border-radius: 4px;
  }
}

/* Media Query */
@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .section-p1 {
    padding: 40px 40px;
  }

  #newsletter .form {
    width: 70%;
  }
}

@media (max-width: 477px) {
  .section-p1 {
    padding: 20px;
  }

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 32px;
  }

  #newsletter {
    padding: 40px 20px;

    .form {
      width: 100%;
    }
  }

  #blog {
    padding: 100px 20px 0 20px;

    .blog-box {
      @include row-flex(0, flex-start, column, nowrap);
    }

    .blog-img {
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
    }

    .blog-details {
      width: 100%;
    }
  }
}
</style>
