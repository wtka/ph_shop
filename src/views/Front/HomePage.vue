<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goShop() {
  router.push('/shop');
}
</script>

<template>
  <section id="hero">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons & up to 70% off!</p>
    <button @click="goShop">Shop Now</button>
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

  <section id="product" class="section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Morden Design</p>
    <div class="pro-container">
      <div class="pro">
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
      </div>
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
    </div>
  </section>

  <section id="banner" class="section-m1">
    <h4>Repair Services</h4>
    <h2>Up to <span>70% off</span> - All T-Shirts & Accessories</h2>
    <button class="normal">Explore More</button>
  </section>

  <section id="product" class="section-p1">
    <h2>New Arrivals</h2>
    <p>Summer Collection New Morden Design</p>
    <div class="pro-container">
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

  <section id="md-banner" class="section-p1">
    <div class="banner-box">
      <h4>crazy deals</h4>
      <h2>buy 1 get 1 free</h2>
      <span>The best classic dress is on sale at cara</span>
      <button class="white">Learn More</button>
    </div>
    <div class="banner-box banner-box2">
      <h4>spring/summer</h4>
      <h2>upcomming season</h2>
      <span>The best classic dress is on sale at cara</span>
      <button class="white">Collection</button>
    </div>
  </section>

  <section id="sm-banner">
    <div class="banner-box">
      <h2>SEASONAL SALE</h2>
      <h3>Winter Collection -50% OFF</h3>
    </div>
    <div class="banner-box banner-box2">
      <h2>NEW FOOTWEAR COLLECTION</h2>
      <h3>Spring / Summber 2022</h3>
    </div>
    <div class="banner-box banner-box3">
      <h2>T-SHIRTS</h2>
      <h3>New Trendy Prints</h3>
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
button.white {
  @include font-style(13px, 600, #fff);
  padding: 11px 18px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #fff;
  outline: none;
  transition: 0.2s;
}

/* Home Page */
#hero {
  @include row-flex(center, flex-start, column, wrap);
  @include bg-img('@/assets/img/hero4.png', no-repeat, cover, top 25% right 0);
  height: 90vh;
  width: 100%;
  padding: 0 80px;

  h4 {
    padding-bottom: 15px;
  }

  h1 {
    color: #088178;
  }

  button {
    @include bg-img('@/assets/img/button.png', no-repeat, cover, center);
    @include font-style(15px, 700, #088178);
    background-color: transparent;
    border: 0;
    padding: 14px 80px 14px 65px;
    cursor: pointer;
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

#banner {
  @include row-flex(center, center, column, wrap);
  @include bg-img('@/assets/img/banner/b2.jpg', no-repeat, cover, center);
  text-align: center;
  width: 100%;
  height: 40vh;

  h4 {
    @include font-style(16px, 500, #fff);
  }

  h2 {
    @include font-style(30px, 500, #fff);
    padding: 10px 0;

    span {
      color: #ef3636;
    }
  }

  button:hover {
    background: #088178;
    color: #fff;
  }
}

#md-banner {
  @include row-flex(space-between, center, row, wrap);
  .banner-box {
    @include row-flex(center, flex-start, column, wrap);
    @include bg-img('@/assets/img/banner/b17.jpg', no-repeat, cover, center);
    min-width: 50%;
    height: 50vh;
    padding: 30px;

    &:hover button {
      background: #088178;
      border: 1px solid #088178;
    }
  }

  .banner-box2 {
    @include bg-img('@/assets/img/banner/b10.jpg', no-repeat, cover, center);
  }

  h4 {
    @include font-style(20px, 300, #fff);
  }

  h2 {
    @include font-style(28px, 800, #fff);
  }

  span {
    @include font-style(14px, 500, #fff);
    padding-bottom: 15px;
  }
}

#sm-banner {
  @include row-flex(space-between, center, row, wrap);
  padding: 0 80px;

  .banner-box {
    @include row-flex(center, flex-start, column, nowrap);
    @include bg-img('@/assets/img/banner/b7.jpg', no-repeat, cover, center);
    min-width: 30%;
    height: 30vh;
    padding: 20px;
    margin-bottom: 20px;
  }

  .banner-box2 {
    @include bg-img('@/assets/img/banner/b4.jpg', no-repeat, cover, center);
  }

  .banner-box3 {
    @include bg-img('@/assets/img/banner/b18.jpg', no-repeat, cover, center);
  }

  h2 {
    @include font-style(22px, 900, #fff);
  }

  h3 {
    @include font-style(15px, 800, #ec544e);
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

  #hero {
    height: 70vh;
    padding: 0 80px;
    background-position: top 30% right 30%;
  }

  #feature {
    justify-content: center;

    .fe-box {
      margin: 15px 15px;
    }
  }

  #product .pro-container {
    justify-content: center;

    .pro {
      margin: 15px;
    }
  }

  #banner {
    height: 20vh;
  }

  #md-banner {
    .banner-box {
      min-width: 100%;
      height: 30vh;
    }
  }

  #sm-banner {
    padding: 0 40px;

    .banner-box {
      width: 28%;
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

  #hero {
    padding: 0 20px;
    background-position: 55%;
  }

  #feature {
    justify-content: space-between;
    .fe-box {
      width: 155px;
      margin: 0 0 15px 0;
    }
  }
  #product .pro {
    width: 100%;
  }

  #banner {
    height: 40vh;
  }

  #md-banner {
    .banner-box {
      height: 40vh;
    }

    .banner-box2 {
      margin-top: 20px;
    }
  }

  #sm-banner {
    padding: 0 20px;

    .banner-box {
      width: 100%;
    }
  }

  #newsletter {
    padding: 40px 20px;

    .form {
      width: 100%;
    }
  }
}
</style>
