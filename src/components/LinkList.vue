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
          const hasName = link.name && typeof(link.name) === 'string';
          const hasUrl = link.url && typeof(link.url) === 'string';
          if (!hasName || !hasUrl) {
            valid = false;
          }
        });
        return valid;
      }
    }
  },
  methods: {
    open: function (url) {
      if (this.isDesktop) {
        this.nw.Shell.openExternal(url);
      } else {
        window.open(url, '_blank');
      }
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
