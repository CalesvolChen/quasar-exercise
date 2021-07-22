<template>
  <q-page class="flex">
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
    <q-carousel
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      arrows
      v-model="slide"
      infinite
    >
      <q-carousel-slide
        v-for="(item, index) in swiper"
        :key="`swiper-${index}`"
        :name="index + 1"
        :img-src="item.img"
      />
      <!-- <q-carousel-slide :name="2" img-src="" />
      <q-carousel-slide :name="3" img-src="" />
      <q-carousel-slide :name="4" img-src="" /> -->
    </q-carousel>
    <q-parallax :src="require('../statics/img/bgImg.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
// import useRoute from "../router"
import { useRouter, useRoute } from "vue-router";

const swiper = [
  {
    img: "../statics/img/swiper1.jpg",
  },
  {
    img: "../statics/img/swiper2.jpg",
  },
  {
    img: "../statics/img/swiper3.jpg",
  },
  {
    img: "../statics/img/swiper4.jpg",
  },
];
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
