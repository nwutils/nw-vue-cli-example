<template>
  <div id="app">
    <img
      src="@/assets/logo.png"
      alt="Vue.js logo"
      title="Vue.js"
      class="logo"
    />
    <img
      v-if="isDesktop"
      src="@/assets/nw.png"
      alt="NW.js logo"
      title="NW.js"
      class="logo"
    />
    <HelloWorld :msg="message" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    message: function () {
      if (this.isDesktop) {
        return 'Welcome to your Vue.js Desktop App in NW.js!';
      }
      return 'Welcome to your Vue.js Web App!';
    }
  }
};
</script>

<style>
#app {
  margin-top: 60px;
  color: #2C3E50;
  font-family: 'Avenir', sans-serif;
  text-align: center;
}
.logo {
  max-height: 140px;
  margin: 0px 10px;
}
</style>
