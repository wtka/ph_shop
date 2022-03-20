<script setup lang="ts">
import { onMounted } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();

onMounted(() => {
  navActive.upadteActiveMap('shop');
});
</script>

<template>
  <section id="page-header">
    <h2>#stayhome</h2>
    <p>Save more with coupons & up to 70% off!</p>
  </section>

  <section id="product" class="section-p1">
    <div class="pro-container">
      <router-link class="pro" to="/product">
        <img src="@/assets/img/products/f1.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </router-link>
      <div class="pro">
        <img src="@/assets/img/products/f2.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/f3.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/f4.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/f5.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/f6.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/f7.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/f8.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>

      <div class="pro">
        <img src="@/assets/img/products/n1.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n2.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n3.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n4.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n5.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n6.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n7.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
      <div class="pro">
        <img src="@/assets/img/products/n8.jpg" alt="" />
        <div class="des">
          <span>adidas</span>
          <h5>Cartoon Astronaut T-Shirts</h5>
          <div class="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <h4>$78</h4>
        </div>
        <a href="">
          <i class="bi bi-cart cart"></i>
          <span class="d-none">Cart</span>
        </a>
      </div>
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
#product {
  text-align: center;
  .pro-container {
    @include row-flex(space-between, center, row, wrap);
    padding-top: 20px;
  }

  .pro {
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid #cce7d0;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;

    &:hover {
      box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
    }

    img {
      width: 100%;
      border-radius: 20px;
    }
  }
}

#product {
  .des {
    text-align: start;
    padding: 10px 0;

    span {
      @include font-style(12px, 400, #606063);
    }

    h5 {
      padding-top: 7px;
      @include font-style(14px, 500, #1a1a1a);
    }

    i {
      @include font-style(12px, 500, #f3b519);
    }

    h4 {
      padding-top: 7px;
      @include font-style(15px, 700, #088178);
    }
  }
}

#product .cart {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  font-weight: 500;
  color: #088178;
  border: 1px solid #cce7d0;
  position: absolute;
  bottom: 20px;
  right: 10px;
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

  #product .pro-container {
    justify-content: center;

    .pro {
      margin: 15px;
    }
  }

  #newsletter .form {
    width: 70%;
  }
}

@media (max-width: 477px) {
  .section-p1 {
    padding: 20px;
  }

  #header {
    padding: 10px 30px;
  }

  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 32px;
  }

  #product .pro {
    width: 100%;
  }

  #newsletter {
    padding: 40px 20px;

    .form {
      width: 100%;
    }
  }
}
</style>
