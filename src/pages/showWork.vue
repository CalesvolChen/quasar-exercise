<template>
  <div class="q-pa-md">
    <q-btn
      style="font-size: 30px"
      label="测试接口"
      color="primary"
      push
      @click="toast"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { poemsApi } from "boot/axios"
export default {
  setup() {
    const $route = useRouter();
    return {
      toast() {
        poemsApi().then(res => {
          console.log(res);
        })
        // console.log($route.currentRoute.value);
      },
    };
  },
};
</script>

<style></style>
