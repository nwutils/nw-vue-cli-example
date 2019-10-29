<template>
  <div>
    <div v-if="error">
      There was an error attempting to read from the file system.
    </div>

    <button
      data-test="fs-example-button"
      @click="getCurrentDirectory"
    >
      <template v-if="!error">
        Click for File System example
      </template>
      <template v-else>
        Try again for File System example
      </template>
    </button>

    <template v-if="contents">
      <p>
        The contents of the current working directory:
      </p>
      <div class="contents">
        <div
          v-for="(file, fileIndex) in contents"
          class="file"
          :key="'file' + fileIndex"
        >
          {{ file }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'FsExample',
  data: function () {
    return {
      contents: null,
      error: false
    };
  },
  methods: {
    getCurrentDirectory: function () {
      const fs = window.nw.require('fs');
      try {
        this.contents = fs.readdirSync('.');
        this.error = false;
      } catch (err) {
        this.error = true;
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
button {
  background: linear-gradient(0deg, #2EB277, #65E6AC);
  border-width: 3.4px;
  border-color: #35495E;
  border-radius: 8px;
  margin: 22px 0px 6px 0px;
  padding: 11px 17px;
  color: #050709;
  font-family: 'Trebuchet MS', Verdana, sans-serif;
  font-size: 16px;
  font-weight: bold;
}

.contents {
  display: flex;
  flex-flow: wrap;
}
.file {
  flex-grow: 1;
  min-width: 200px;
  background: #DDD;
  margin: 5px;
  padding: 11px;
}
</style>
