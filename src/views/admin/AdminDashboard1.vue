<script setup lang="ts">
import { ref } from 'vue';

const isSiderbar = ref(false);

function toggleSidebar() {
  isSiderbar.value = !isSiderbar.value;
}
</script>

<template>
  <div class="admin-wrap">
    <!-- SIDEBAR -->
    <section id="sidebar" :class="{ hide: isSiderbar }">
      <router-link to="/" class="brand">
        <span class="text">PHCY</span>
      </router-link>

      <ul class="side-menu menu-top">
        <li class="active">
          <router-link to="/">
            <i class="bi bi-border-all"></i>
            <span class="text">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="bi bi-file-earmark-text"></i>
            <span class="text">Orders</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="bi bi-archive"></i>
            <span class="text">Products</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="bi bi-ticket-perforated"></i>
            <span class="text">Coupon</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="bi bi-gear"></i>
            <span class="text">Settings</span>
          </router-link>
        </li>
        <li>
          <router-link class="logout" to="/">
            <i class="bi bi-door-closed"></i>
            <span class="text">Logout</span>
          </router-link>
        </li>
      </ul>
    </section>

    <!-- CONTENT -->
    <section id="content">
      <!-- NAVBAR -->
      <nav>
        <a href="javascript:void(0)" @click="toggleSidebar">
          <i id="bar" class="bi bi-list"></i>
          <span class="d-none">hambuger</span>
        </a>
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
          <div class="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" class="search-btn"><i class="bi bi-search"></i></button>
          </div>
        </form>
        <a href="#" class="notification">
          <i class="bi bi-bell"></i>
          <span class="num">8</span>
        </a>
        <a href="#" class="profile">
          <img src="@/assets/img/people.png" alt="" />
          <span class="d-none">profile</span>
        </a>
      </nav>
      <!-- MAIN -->
      <main>
        <div class="head-title">
          <div class="left">
            <h1>Dashnoard</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li><i class="bi bi-chevron-right"></i></li>
              <li>
                <a href="#" class="active">Home</a>
              </li>
            </ul>
          </div>
          <a href="#" class="add-product">
            <i class="bi bi-archive"></i>
            <span class="text">Add Product</span>
          </a>
        </div>

        <ul class="box-info">
          <li>
            <i class="bi bi-clipboard-check"></i>
            <span class="text">
              <h3>1020</h3>
              <p>New Order</p>
            </span>
          </li>
          <li>
            <i class="bi bi-person"></i>
            <span class="text">
              <h3>2834</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i class="bi bi-coin"></i>
            <span class="text">
              <h3>$2543</h3>
              <p>Total Sales</p>
            </span>
          </li>
        </ul>

        <div class="table-data">
          <div class="order">
            <div class="head">
              <h3>Recent Orders</h3>
              <i class="bi bi-search"></i>
              <i class="bi bi-filter"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="@/assets/img/people.png" alt="" />
                    <p>Jhon Doe</p>
                  </td>
                  <td>01-10-2022</td>
                  <td>
                    <span class="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="@/assets/img/people.png" alt="" />
                    <p>Jhon Doe</p>
                  </td>
                  <td>01-10-2022</td>
                  <td>
                    <span class="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="@/assets/img/people.png" alt="" />
                    <p>Jhon Doe</p>
                  </td>
                  <td>01-10-2022</td>
                  <td>
                    <span class="status process">Process</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="@/assets/img/people.png" alt="" />
                    <p>Jhon Doe</p>
                  </td>
                  <td>01-10-2022</td>
                  <td>
                    <span class="status completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="@/assets/img/people.png" alt="" />
                    <p>Jhon Doe</p>
                  </td>
                  <td>01-10-2022</td>
                  <td>
                    <span class="status completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="todo">
            <div class="head">
              <h3>Todos</h3>
              <i class="bi bi-plus-lg"></i>
              <i class="bi bi-filter"></i>
            </div>
            <ul class="todo-list">
              <li class="completed">
                <p>Todo List</p>
                <i class="bi bi-three-dots-vertical"></i>
              </li>
              <li class="not-completed">
                <p>Todo List</p>
                <i class="bi bi-three-dots-vertical"></i>
              </li>
              <li class="completed">
                <p>Todo List</p>
                <i class="bi bi-three-dots-vertical"></i>
              </li>
              <li class="not-completed">
                <p>Todo List</p>
                <i class="bi bi-three-dots-vertical"></i>
              </li>
              <li class="completed">
                <p>Todo List</p>
                <i class="bi bi-three-dots-vertical"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<style lang="scss" scoped>
* {
  // margin: 0;
  padding: 0;
  // box-sizing: border-box;
}

:root {
  --poppins: 'Poppins', sans-serif;
  --lato: 'Lato', sans-serif;

  --light: #f9f9f9;
  --blue: #3c91e6;
  --light-blue: #cfe8ff;
  --grey: #eee;
  --dark-grey: #aaaaaa;
  --dark: #342e37;
  --red: #db504a;
  --yellow: #ffce26;
  --light-yellow: #fff2c6;
  --orange: #fd7238;
  --light-orange: #ffe0d3;
}

.admin-wrap {
  background: #eee;
  height: 100vh;
  overflow-x: hidden;
}

#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #f9f9f9;
  z-index: 2000;
  transition: 0.3s ease;
  overflow-x: hidden;

  &.hide {
    width: 60px;

    .side-menu li a {
      width: calc(48px - (4px * 2));
      transition: 0.3s ease;
    }

    & ~ #content {
      width: calc(100% - 60px);
      left: 60px;
    }
  }

  .brand {
    font-size: 24px;
    font-weight: 700;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3c91e6;
    position: sticky;
    top: 0;
    left: 0;
    background: #f9f9f9;
    z-index: 500;
    padding-bottom: 20px;
    box-sizing: content-box;
  }

  .side-menu {
    width: 100%;
    margin-top: 48px;

    li {
      height: 48px;
      background: transparent;
      margin-left: 6px;
      border-radius: 48px 0 0 48px;
      padding: 4px;

      &.active {
        // background: #eee;
        // position: relative;

        // &::before {
        //   content: '';
        //   position: absolute;
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        //   top: -40px;
        //   right: 0;
        //   box-shadow: 20px 20px 0 #eee;
        //   z-index: -1;
        // }

        // &::after {
        //   content: '';
        //   position: absolute;
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        //   bottom: -40px;
        //   right: 0;
        //   box-shadow: 20px -20px 0 #eee;
        //   z-index: -1;
        // }

        a {
          color: #3c91e6;
        }
      }

      a {
        width: 100%;
        height: 100%;
        background: #f9f9f9;
        display: flex;
        align-items: center;
        border-radius: 48px;
        font-size: 16px;
        color: #342e37;
        white-space: nowrap;
        overflow-x: hidden;

        &:hover {
          color: #3c91e6;
        }

        i {
          min-width: calc(60px - ((4px + 6px) * 2));
          display: flex;
          justify-content: center;
        }
      }

      .logout {
        color: #db504a;
      }
    }
  }
}

#content {
  position: relative;
  width: calc(100% - 280px);
  left: 280px;
  transition: 0.3s ease;

  nav {
    height: 56px;
    background: #f9f9f9;
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 24px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;

    // &::before {
    //   content: '';
    //   position: absolute;
    //   width: 40px;
    //   height: 40px;
    //   bottom: -40px;
    //   left: 0;
    //   border-radius: 50%;
    //   box-shadow: -20px -20px 0 #f9f9f9;
    // }

    a {
      color: #342e37;
    }

    i {
      cursor: pointer;
    }

    .nav-link {
      font-size: 16px;
      transition: 0.3s ease;

      &:hover {
        color: #3c91e6;
      }
    }

    form {
      max-width: 400px;
      width: 100%;
      margin-right: auto;

      .form-input {
        display: flex;
        align-items: center;
        height: 36px;

        input {
          flex-grow: 1;
          padding: 0 16px;
          height: 100%;
          border: none;
          outline: none;
          background: #eee;
          border-radius: 36px 0 0 36px;
          width: 100%;
        }

        button {
          width: 36px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #3c91e6;
          color: #f9f9f9;
          font-size: 18px;
          border: none;
          outline: none;
          border-radius: 0 36px 36px 0;
          cursor: pointer;
        }
      }
    }

    .notification {
      font-size: 20px;
      position: relative;

      .num {
        position: absolute;
        top: -6px;
        right: -6px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #f9f9f9;
        background: #db504a;
        color: #f9f9f9;
        font-weight: 700;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .profile img {
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}

main {
  width: 100%;
  padding: 36px 24px;
  max-height: calc(100vh - 56px);
  overflow-y: auto;

  .head-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;

    .left {
      h1 {
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #342e37;
      }

      .breadcrumb {
        display: flex;
        align-items: center;
        gap: 16px;

        li {
          color: #342e37;

          a {
            color: #aaaaaa;
            pointer-events: none;

            &.active {
              color: #3c91e6;
              pointer-events: unset;
            }
          }
        }
      }
    }

    .add-product {
      height: 36px;
      padding: 0 16px;
      border-radius: 36px;
      background: #3c91e6;
      color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
  }

  .box-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 24px;
    margin-top: 36px;

    li {
      padding: 24px;
      background: #f9f9f9;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 24px;

      i {
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background: #eee;
        font-size: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:nth-child(1) i {
        background: #cfe8ff;
        color: #3c91e6;
      }

      &:nth-child(2) i {
        background: #fff2c6;
        color: #ffce26;
      }

      &:nth-child(3) i {
        background: #ffe0d3;
        color: #fd7238;
      }

      .text h3 {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }

  .table-data {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 24px;
    width: 100%;
    color: #342e37;

    & > div {
      border-radius: 20px;
      background: #f9f9f9;
      padding: 24px;
      overflow-x: auto;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;

      h3 {
        margin-right: auto;
        font-size: 24px;
        font-weight: 600;
      }

      i {
        cursor: pointer;
      }
    }

    .order {
      flex-grow: 1;
      flex-basis: 500px;

      table {
        width: 100%;
        border-collapse: collapse;

        th {
          padding-bottom: 12px;
          font-size: 13px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        td {
          padding: 16px 0;

          img {
            width: 36px;
            width: 36px;
            border-radius: 50%;
            object-fit: cover;
          }

          .status {
            font-size: 10px;
            padding: 6px 16px;
            color: #f9f9f9;
            border-radius: 20px;
            font-weight: 700;
          }

          .status.completed {
            background: #3c91e6;
          }

          .status.process {
            background: #ffce26;
          }

          .status.pending {
            background: #fd7238;
          }
        }

        tr:hover {
          background: #eee;
        }

        tr td:first-child {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 6px;
        }
      }
    }

    .todo {
      flex-grow: 1;
      flex-basis: 300px;

      .todo-list {
        width: 100%;

        li {
          width: 100%;
          margin-bottom: 16px;
          background: #eee;
          border-radius: 10px;
          padding: 14px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          &:last-child {
            margin-bottom: 0;
          }

          &.completed {
            border-left: 10px solid #3c91e6;
          }

          &.not-completed {
            border-left: 10px solid #fd7238;
          }

          i {
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #sidebar {
    width: 200px;
  }
  #content {
    width: calc(100% - 60px);
    left: 200px;

    nav .nav-link {
      display: none;
    }
  }
}

@media screen and (max-width: 576px) {
  #content nav form .form-input {
    input {
      display: none;
    }

    button {
      width: auto;
      height: auto;
      background: transparent;
      border-radius: none;
      color: #342e37;
    }
  }

  #content nav .profile img {
    width: 48px;
  }

  .box-info {
    grid-template-columns: 1fr;
  }

  .table-data {
    .head {
      min-width: 420px;
    }

    .order table {
      min-width: 420px;
    }

    .todo .todo-list {
      min-width: 420px;
    }
  }
}
</style>
