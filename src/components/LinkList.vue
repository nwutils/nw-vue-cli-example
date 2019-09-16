<template>
  <ul v-if="links">
    <li
      v-for="(link, linkIndex) in links"
      :title="link.url.replace('https://', '')"
      :key="'eco' + linkIndex"
    >
      <a
        href="#"
        data-test="link"
        @click.prevent="open(link.url)"
      >
        {{ link.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LinkList',
  props: {
    links: {
      type: Array,
      required: false,
      default: null,
      validator: function (links) {
        let valid = true;
        links.forEach(function (link) {
          if (
            !link.name ||
            !link.url ||
            !link.name.length ||
            !link.url.length ||
            typeof(link.name) !== 'string' ||
            typeof(link.url) !== 'string'
          ) {
            valid = false;
          }
        });
        return valid;
      }
    }
  },
  methods: {
    open: function (url) {
      window.nw.Shell.openExternal(url);
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0px;
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0px 10px;
}
a {
  color: #42B983;
}
</style>
