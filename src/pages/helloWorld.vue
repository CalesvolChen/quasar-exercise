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
    const slide = ref(1);
    const fullscreen = ref(false);
    return {
      slide,
      fullscreen,
      toast() {
        console.log($route);
        // console.log($route.currentRoute.value);
      },
    };
  },
};
</script>

<style></style>
