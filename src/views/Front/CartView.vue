<script setup lang="ts">
import { onMounted } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();

onMounted(() => {
  navActive.upadteActiveMap('cart');
});
</script>

<template>
  <section id="page-header" class="about-header">
    <h2>#let's_talk</h2>
    <p>LEAVE A MESSAGE, We love to hear form you!</p>
  </section>

  <section id="cart" class="section-p1">
    <table width="100%">
      <thead>
        <tr>
          <td>Remove</td>
          <td>Image</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="bi bi-x-octagon"></i></td>
          <td><img src="@/assets/img/products/f1.jpg" alt="" /></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" /></td>
          <td>$118.19</td>
        </tr>
        <tr>
          <td><i class="bi bi-x-octagon"></i></td>
          <td><img src="@/assets/img/products/f2.jpg" alt="" /></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" /></td>
          <td>$118.19</td>
        </tr>
        <tr>
          <td><i class="bi bi-x-octagon"></i></td>
          <td><img src="@/assets/img/products/f3.jpg" alt="" /></td>
          <td>Cartoon Astronaut T-Shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" /></td>
          <td>$118.19</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="cart-add" class="section-p1">
    <div id="coupon">
      <h3>Apply Coupon</h3>
      <div>
        <input type="text" placeholder="Enter Your Coupon" />
        <button class="normal">Apply</button>
      </div>
    </div>

    <div id="subtotal">
      <h3>Cart Totals</h3>
      <table>
        <tr>
          <td>Cart Subtotal</td>
          <td>$ 335</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>$ 335</strong></td>
        </tr>
      </table>
      <button class="normal">Proceed to checkout</button>
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

#page-header {
  @include bg-img('@/assets/img/about/banner.png', no-repeat, cover, center);
}

#cart {
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    white-space: nowrap;

    img {
      width: 70px;
    }

    td:nth-child(1) {
      width: 100px;
      text-align: center;
    }

    td:nth-child(3) {
      width: 250px;
      text-align: center;
    }

    td:nth-child(2),
    td:nth-child(4),
    td:nth-child(5),
    td:nth-child(6) {
      width: 150px;
      text-align: center;
    }

    td:nth-child(5) {
      input {
        width: 70px;
        padding: 10px 5px 10px 15px;
      }
    }
  }
}

#cart {
  table {
    thead {
      border: 1px solid #e2e9e1;
      border-left: none;
      border-right: none;

      td {
        @include font-style(13px, 700, #000);
        text-transform: uppercase;
        padding: 18px 0;
      }
    }

    tbody {
      tr,
      td {
        padding-top: 15px;
      }

      td {
        font-size: 13px;
      }
    }
  }
}

#cart-add {
  @include row-flex(space-between, 0, row, wrap);
}

#coupon {
  width: 50%;
  margin-bottom: 30px;

  h3 {
    padding-bottom: 15px;
  }

  input {
    padding: 10px 20px;
    outline: none;
    width: 60%;
    margin-right: 10px;
    border: 1px solid #e2e9e1;
  }

  button {
    background-color: #088178;
    color: #fff;
    padding: 12px 20px;
  }
}

#subtotal {
  width: 50%;
  margin-bottom: 30px;
  border: 1px solid #e2e9e1;
  padding: 30px;

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;

    td {
      width: 50%;
      border: 1px solid #e2e9e1;
      padding: 10px;
      font-size: 13px;
    }
  }

  button {
    background-color: #088178;
    color: #fff;
    padding: 12px 20px;
  }
}

/* Media Query */
@media (max-width: 1200px) {
}

@media (max-width: 768px) {
  .section-p1 {
    padding: 40px 40px;
  }
}

@media (max-width: 477px) {
  h2 {
    font-size: 32px;
  }

  .section-p1 {
    padding: 20px;
  }

  #card-add {
    flex-direction: column;
  }

  #coupon {
    width: 100%;
  }

  #subtotal {
    width: 100%;
  }
}
</style>
