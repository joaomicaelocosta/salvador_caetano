<template>
  <div id="app">
    <div class="links">
      <router-link to="/home">Home</router-link>
      <router-link to="/search">Search</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.links {
  margin: 20px;
}
.links a {
  padding: 6px;
}
</style>
