<script setup lang="ts">
import { onMounted } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();

onMounted(() => {
  navActive.upadteActiveMap('shop');
});
</script>

<template>
  <section id="prodetails" class="section-p1">
    <div class="single-pro-img">
      <img id="main-img" class="w-100" src="@/assets/img/products/f1.jpg" alt="" />
      <div class="small-img-group">
        <div class="small-img-col">
          <img id="small-img" class="w-100" src="@/assets/img/products/f1.jpg" alt="" />
        </div>
        <div class="small-img-col">
          <img id="small-img" class="w-100" src="@/assets/img/products/f2.jpg" alt="" />
        </div>
        <div class="small-img-col">
          <img id="small-img" class="w-100" src="@/assets/img/products/f3.jpg" alt="" />
        </div>
        <div class="small-img-col">
          <img id="small-img" class="w-100" src="@/assets/img/products/f4.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="single-pro-details">
      <h6>Home / T-Shirt</h6>
      <h4>Men's Fashion T Shirt</h4>
      <h2>$139.00</h2>
      <select>
        <option value="">Select Size</option>
        <option value="">XL</option>
        <option value="">XXL</option>
        <option value="">Small</option>
        <option value="">Large</option>
      </select>
      <input type="number" value="1" />
      <button class="normal">Add To Cart</button>
      <h4>Product Details</h4>
      <span>
        The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric
        constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched
        comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle
        collar, and available in a range of colors, it offers it all in the ultimate head-turning
        package.
      </span>
    </div>
  </section>

  <section id="product" class="section-p1">
    <h2>Fratured Products</h2>
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

/* Product Page */
#prodetails {
  display: flex;
  margin-top: 20px;
  .single-pro-img {
    width: 40%;
    margin-right: 50px;
  }
}

.single-pro-details {
  width: 50%;
  padding-top: 30px;

  h4 {
    padding: 40px 0 20px 0;
  }

  h2 {
    font-size: 26px;
  }

  select {
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
}

.single-pro-details {
  input {
    width: 50px;
    height: 47px;
    padding-left: 10px;
    margin-right: 10px;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #088178;
    color: #fff;
  }

  span {
    line-height: 25px;
  }
}

#main-img {
  margin-bottom: 5px;
}

.small-img-group {
  @include row-flex(space-between, 0, row, nowrap);
}

.small-img-col {
  flex-basis: 24%;
  cursor: pointer;
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

  /* Single Product */
  #prodetails {
    display: flex;
    flex-direction: column;

    .single-pro-img {
      width: 100%;
      margin-right: 0px;
    }

    .single-pro-details {
      width: 100%;
    }
  }
}
</style>
