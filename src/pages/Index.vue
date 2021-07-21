<template>
  <q-page class="flex flex-center">
    <q-btn
      style="font-size: 50px"
      label="跳转轮播图"
      color="primary"
      padding="10px 20px"
      to="/hello"
    />
    <q-btn
      style="font-size: 50px"
      label="提示"
      color="primary"
      padding="10px 20px"
      @click="toast"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
// import useRoute from "../router"
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "PageIndex",
  setup() {
    const $route = useRouter();
    const { notify } = useQuasar();
    return {
      toast() {
        console.log($route);
        // notify({
        //   message: "哈哈哈",
        //   color: "blue",
        //   // icon: "announcement",
        //   avatar: require('../image/avatar.jpg')
        // });
      },
    };
  },
});
</script>
