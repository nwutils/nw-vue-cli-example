<template>
  <div id="app">
    <img
      src="@/assets/logo.png"
      alt="Vue.js logo"
      title="Vue.js"
      class="logo"
    />
    <img
      src="@/assets/nw.png"
      alt="NW.js logo"
      title="NW.js"
      class="logo"
    />
    <HelloWorld msg="Welcome to your Vue.js Desktop App in NW.js!" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    closeSplashAndShowApp: function () {
      const port = 4443;
      const net = window.nw.require('net');
      const client = new net.Socket();
      client.connect(port, 'localhost');
      client.write('loaded');
      window.nw.Window.get().show();
    }
  },
  created: function () {
    this.closeSplashAndShowApp();
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
