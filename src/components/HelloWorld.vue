<template>
  <div class="hello">
    <h1 data-test="message">
      {{ msg }}
    </h1>
    <h3 data-test="versions">
      You are using
      Vue.js (v{{ vueVersion }}),
      NW.js (v{{ versions.nw }}-{{ versions['nw-flavor'] }}),
      Node.js (v{{ versions.node }}),
      and
      Chromium (v{{ versions.chromium }}).
    </h3>

    <button
      v-if="devMode"
      data-test="toggleDevTools"
      @click="toggleDevTools"
    >
      <template v-if="showDevTools">
        Show
      </template>
      <template v-else>
        Hide
      </template>
      Developer Tools
    </button>

    <p>You can use the resources below to find more information around building your Vue App.</p>
    <LinkList :links="welcomeLinks" />

    <h3>Installed CLI Plugins</h3>
    <LinkList :links="pluginLinks" />

    <h3>Essential Links</h3>
    <LinkList :links="essentialLinks" />

    <h3>Ecosystem</h3>
    <LinkList :links="ecosystemLinks" />

    <hr />

    <FsExample />
  </div>
</template>

<script>
import Vue from 'vue';

import FsExample from '@/components/FsExample.vue';
import LinkList from '@/components/LinkList.vue';

export default {
  name: 'HelloWorld',
  components: {
    FsExample,
    LinkList
  },
  props: {
    msg: {
      type: String,
      default: 'Welcome to your Vue Desktop App in NW.js!'
    }
  },
  data: function () {
    return {
      showDevTools: true,
      welcomeLinks: [
        {
          name: 'nw-vue-cli-example',
          url: 'https://github.com/nwutils/nw-vue-cli-example'
        },
        {
          name: 'NW.js',
          url: 'https://nwjs.io'
        },
        {
          name: 'nw-vue-devtools',
          url: 'https://github.com/nwutils/nw-vue-devtools'
        },
        {
          name: 'nwjs-builder-phoenix',
          url: 'https://github.com/evshiron/nwjs-builder-phoenix'
        },
        {
          name: 'vue-cli',
          url: 'https://cli.vuejs.org'
        }
      ],
      pluginLinks: [
        {
          name: 'babel',
          url: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel'
        },
        {
          name: 'eslint',
          url: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint'
        },
        {
          name: 'unit-jest',
          url: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest'
        },
        {
          name: 'e2e-cypress',
          url: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress'
        }
      ],
      essentialLinks: [
        {
          name: 'Core Docs',
          url: 'https://vuejs.org'
        },
        {
          name: 'Forum',
          url: 'https://forum.vuejs.org'
        },
        {
          name: 'Community Chat',
          url: 'https://chat.vuejs.org'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/vuejs'
        },
        {
          name: 'News',
          url: 'https://news.vuejs.org'
        }
      ],
      ecosystemLinks: [
        {
          name: 'vue-router',
          url: 'https://router.vuejs.org'
        },
        {
          name: 'vuex',
          url: 'https://vuex.vuejs.org'
        },
        {
          name: 'vue-devtools',
          url: 'https://github.com/vuejs/vue-devtools#vue-devtools'
        },
        {
          name: 'vue-loader',
          url: 'https://vue-loader.vuejs.org'
        },
        {
          name: 'awesome-vue',
          url: 'https://github.com/vuejs/awesome-vue'
        }
      ]
    };
  },
  methods: {
    toggleDevTools: function () {
      if (this.showDevTools) {
        window.nw.Window.get().showDevTools();
      } else {
        window.nw.Window.get().closeDevTools();
      }
      this.showDevTools = !this.showDevTools;
    }
  },
  computed: {
    devMode: function () {
      return window.process.versions['nw-flavor'] === 'sdk';
    },
    versions: function () {
      return window.process.versions;
    },
    vueVersion: function () {
      return Vue.version;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0px 0px;
}
button {
  background: linear-gradient(0deg, #2EB277, #65E6AC);
  border-width: 3.4px;
  border-color: #35495E;
  border-radius: 8px;
  margin: 22px 0px 6px 0px;
  padding: 11px 17px;
  color: #050709;
  font-family: 'Trebuchet MS', Verdana, sans-serif;
  font-size: 19px;
  font-weight: bold;
}
</style>
