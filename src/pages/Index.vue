<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
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
export default defineComponent({
  name: "PageIndex",
  setup() {
    const $q = useQuasar();

    return {
      toast() {
        $q.notify({
          message: "你的宝正在想你哦",
          color: 'blue',
          icon: "announcement",
          avatar: '../image/avatar.jpg'
        });
      },
    };
  },
});
</script>
