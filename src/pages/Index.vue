<template>
  <q-page class="flex flex-center">
    <!-- <q-btn
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
    /> -->
    <div class="q-pa-md w100">
      <q-carousel animated v-model="slide" height="500px" vertical arrows navigation infinite >
        <q-carousel-slide
          v-for="(item, index) in swiper"
          :key="`swiper-${index}`"
          :name="index + 1"
          :img-src="item.img"
        />
      </q-carousel>
    </div>
    <q-parallax :src="require('../statics/img/bgImg.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter, useRoute } from "vue-router";

const swiper = [
  {
    img: require("../statics/img/swiper/swiper1.jpg"),
  },
  {
    img: require("../statics/img/swiper/swiper2.jpg"),
  },
  {
    img: require("../statics/img/swiper/swiper3.jpg"),
  },
  {
    img: require("../statics/img/swiper/swiper4.jpg"),
  },
];
export default defineComponent({
  name: "PageIndex",
  setup() {
    const $route = useRouter();
    const { notify } = useQuasar();
    const slide = ref(1);
    return {
      swiper,
      slide,
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

<style scoped>
.w100 {
  width: 100%;
}
</style>
