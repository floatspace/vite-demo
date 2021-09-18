<!------------------------------ 
 组件说明: TS组件测试 
 ------------------------------->
<template>
  <div v-if="state && state.length" class="demo">{{ state[0].name }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Course {
  id: number;
  name: string;
}
export default defineComponent({
  name: "TsDemo",
  setup() {
    const state = ref<Course[]>([]);
    setTimeout(() => {
      state.value.push({ id: 1, name: "全栈架构师~" });
    }, 600);

    fetch("/api/users")
      .then(response => response.json())
      .then(json => console.log(json));

    return { state };
  },
});
</script>

<style lang="scss" scoped>
.demo {
  font-size: 18px;
  color: blue;
}
</style>
