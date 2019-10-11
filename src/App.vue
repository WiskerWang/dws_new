<template>
  <div id="app">
    <navigation v-if="(mView === false)"></navigation>
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "./layout/navigation";

export default {
    name: 'home',
    data() {
        return {
            mView: false,
        };
    },
    components: {
        navigation,
    },
    methods: {

    },
    created() {
        const device =navigator.userAgent.split(" ")[1].split("(")[1].split(";")[0];
        console.log(device);
        if ( device === 'iPhone' || device === 'Linux' ) {
            console.log('mobile devices');
            this.mView = true;
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
