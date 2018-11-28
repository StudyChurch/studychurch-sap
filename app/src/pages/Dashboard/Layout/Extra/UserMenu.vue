<template>
  <div class="user">
    <div class="photo">
      <img :src="userData.avatar.full" alt="avatar"/>
    </div>
    <div class="info">
      <a data-toggle="collapse" :aria-expanded="!isClosed" @click.stop="toggleMenu" href="#">
           <span>
             {{userData.name}}
             <b class="caret"></b>
          </span>
      </a>
      <div class="clearfix"></div>
      <div>
        <collapse-transition>
          <ul class="nav" v-show="!isClosed">
            <slot>
              <li>
                <router-link to="/">
                  <span class="sidebar-mini-icon">DB</span>
                  <span class="sidebar-normal">My Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link to="/settings">
                  <span class="sidebar-mini-icon">S</span>
                  <span class="sidebar-normal">My Settings</span>
                </router-link>
              </li>
            </slot>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import { getUserData } from 'src/auth';

  export default {
    components: {
      CollapseTransition
    },
    props: {
      title: {
        type: String,
        default: 'James Amos'
      }
    },
    data() {
      return {
        isClosed: true,
        userData: getUserData()
      }
    },
    methods: {
      toggleMenu() {
        this.isClosed = !this.isClosed
      }
    }
  }
</script>
<style>
  .collapsed {
    transition: opacity 1s;
  }
</style>
