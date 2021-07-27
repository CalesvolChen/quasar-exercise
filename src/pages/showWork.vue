<template>
  <div class="q-pa-md">
    <q-btn
      style="font-size: 30px"
      label="查看当前路由"
      color="primary"
      push
      @click="toast"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $route = useRouter();
    return {
      toast() {
        console.log($route);
        // console.log($route.currentRoute.value);
      },
    };
  },
};
</script>

<style></style>
