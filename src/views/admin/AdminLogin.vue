<script setup lang="ts">
import axios from 'axios';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const router = useRouter();

const user = reactive({
  username: '',
  password: '',
});

// const message = ref('你好我是');

const schema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

async function login() {
  const url = `${process.env.VUE_APP_API}/admin/signin`;
  await axios
    .post(url, user)
    .then((res) => {
      const { expired, token } = res.data;
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
      router.push('/admin');
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
}
</script>

<template>
  <div class="login-bg">
    <div class="row justify-content align-items-center w-100 vh-100 overflow-hidden">
      <div class="login text-center text-white my-4">
        <h2 class="mb-3">PHCY</h2>

        <Form autocomplete="off" :validation-schema="schema">
          <div class="input-group mb-3">
            <span class="input-group-text border-0 bg-white">
              <i class="bi bi-envelope-fill"></i>
            </span>
            <Field
              name="email"
              type="email"
              class="form-control"
              placeholder="Enter your Email Address"
              v-model="user.username"
            />
          </div>
          <!-- <ErrorMessage name="email" class="fw-bold text-danger" as="p">
            <p>{{message}}</p>
          </ErrorMessage> -->
          <ErrorMessage name="email" class="fw-bold text-danger"> </ErrorMessage>
          <div class="input-group mt-3 mb-3">
            <span class="input-group-text border-0 bg-white"><i class="bi bi-key-fill"></i></span>
            <Field
              name="password"
              type="password"
              class="form-control"
              placeholder="Enter your Password"
              v-model="user.password"
            />
          </div>
          <ErrorMessage name="password" class="fw-bold text-danger"></ErrorMessage>
          <button type="button" class="btn btn-primary mt-3 w-100" @click="login">Login</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-bg {
  //https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxGcUY2VHl1NHoyUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60
  background: url('@/assets/img/adminBG.jpg') no-repeat center center;
  background-size: cover;
}

.login {
  background-color: #434e5a;
  opacity: 0.9;
  padding: 20px;
  border-radius: 10px;
  max-width: 450px;
  margin: auto;
  width: 100%;

  input {
    height: 42px;
    border-radius: 5px;
    border: 0;
    font-size: 18px;
    letter-spacing: 2px;

    &:focus {
      box-shadow: none; // !important
    }
  }

  button:hover {
    background-color: #295166;
    border: 1px solid #daf1ff;
  }
}
</style>
