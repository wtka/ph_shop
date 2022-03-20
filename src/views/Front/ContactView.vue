<script setup lang="ts">
import { onMounted } from 'vue';
import navActiveStore from '@/stores/navActive';

const navActive = navActiveStore();

onMounted(() => {
  navActive.upadteActiveMap('contact');
});
</script>

<template>
  <section id="page-header" class="about-header">
    <h2>#let's_talk</h2>
    <p>LEAVE A MESSAGE, We love to hear form you!</p>
  </section>

  <section id="contact-details" class="section-p1">
    <div class="details">
      <span>GET IN TOUCH</span>
      <h2>Vist one of our agency locations of contact us today</h2>
      <h3>Head Office</h3>
      <div>
        <li>
          <i class="bi bi-geo-alt"></i>
          <p>56 Glassford Street Glasgow G1 1UL New Yourk</p>
        </li>
        <li>
          <i class="bi bi-envelope"></i>
          <p>contact@example.com</p>
        </li>
        <li>
          <i class="bi bi-telephone"></i>
          <p>contact@example.com</p>
        </li>
        <li>
          <i class="bi bi-clock"></i>
          <p>Monday to Saturday: 9.00am to 16.pm</p>
        </li>
      </div>
    </div>

    <div class="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28921.254441321984!2d121.55480651667581!3d25.028752110053727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abadec7543c5%3A0x408dbd7aa34838cd!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A!5e0!3m2!1szh-TW!2stw!4v1647675932331!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
      ></iframe>
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

  <section id="form-details">
    <form action="">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to hear from you</h2>
      <input type="text" placeholder="Your Name" />
      <input type="mail" placeholder="E-mail" />
      <input type="text" placeholder="Subject" />
      <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
      <button class="normal">Submit</button>
    </form>

    <div class="people">
      <div>
        <img src="@/assets/img/people/1.png" alt="" />
        <p>
          <span>Jhon Doe</span> Senior Marketing Manager <br />
          Phone: + 000 123 000 77 88 <br />
          Email: contact@exmaple.com
        </p>
      </div>
      <div>
        <img src="@/assets/img/people/2.png" alt="" />
        <p>
          <span>William Smith</span> Senior Marketing Manager <br />
          Phone: + 000 123 000 77 88 <br />
          Email: contact@exmaple.com
        </p>
      </div>
      <div>
        <img src="@/assets/img/people/3.png" alt="" />
        <p>
          <span>Emma Stone</span> Senior Marketing Manager <br />
          Phone: + 000 123 000 77 88 <br />
          Email: contact@exmaple.com
        </p>
      </div>
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

#contact-details {
  @include row-flex(space-between, center, row, nowrap);

  .details {
    width: 40%;

    span {
      font-size: 12px;
    }

    h2 {
      font-size: 26px;
      line-height: 35px;
      padding: 20px 0;
    }

    h3 {
      font-size: 16px;
      padding-bottom: 15px;
    }

    li {
      display: flex;
      padding: 10px 0;

      i {
        font-size: 14px;
        padding-right: 22px;
      }

      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }

  .map {
    width: 55%;
    height: 400px;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

#form-details {
  @include row-flex(space-between, 0, row, nowrap);
  margin: 30px;
  padding: 80px;
  border: 1px solid #e1e1e1;

  form {
    width: 65%;
    @include row-flex(0, flex-start, column, nowrap);

    span {
      font-size: 12px;
    }

    h2 {
      font-size: 26px;
      line-height: 35px;
      padding: 20px 0;
    }

    input,
    textarea {
      width: 100%;
      padding: 12px 15px;
      outline: none;
      margin-bottom: 20px;
      border: 1px solid #e1e1e1;
    }

    button {
      background-color: #088178;
      color: #fff;
    }
  }
}

#form-details {
  .people {
    div {
      @include row-flex(0, flex-start, row, nowrap);
      padding-bottom: 25px;

      img {
        width: 65px;
        height: 65px;
        object-fit: cover;
        margin: 15px;
      }

      p {
        margin: 0;
        font-size: 13px;
        line-height: 25px;
      }

      span {
        display: block;
        @include font-style(16px, 600, #000);
      }
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

  #newsletter .form {
    width: 70%;
  }

  #form-details {
    padding: 40px;

    form {
      width: 50%;
    }
  }
}

@media (max-width: 477px) {
  h2 {
    font-size: 32px;
  }

  .section-p1 {
    padding: 20px;
  }

  #newsletter {
    padding: 40px 20px;

    .form {
      width: 100%;
    }
  }

  #contact-details {
    flex-direction: column;

    .details {
      width: 100%;
      margin-bottom: 30px;
    }

    .map {
      width: 100%;
    }
  }

  #form-details {
    margin: 10px;
    padding: 30px 10px;
    flex-wrap: wrap;

    form {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>
