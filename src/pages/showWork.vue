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

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { testApi } from "boot/axios";

const $route = useRouter();
const toast = () => {
  // console.log($route.currentRoute.value);
};
</script>

<style></style>
