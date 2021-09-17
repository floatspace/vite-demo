<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <TsDemo />
</template>

<script>
import HelloWorld from "/@comps/HelloWorld.vue";
import TsDemo from "/@comps/TsDemo.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TsDemo,
  },
};
</script>
