<template>
  <q-page class="flex flex-center">
    <div class="w100">
      <q-carousel
        animated
        v-model="slide"
        height="500px"
        vertical
        arrows
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide
          v-for="(item, index) in swiper"
          :key="`swiper-${index}`"
          :name="index + 1"
          :img-src="item.img"
        />
      </q-carousel>
    </div>
    <tips-card
      v-for="(item, index) in tipsList"
      :key="`tips-${index}`"
      :img="item.img"
      :current="index"
    ></tips-card>
    <div class="q-pa-xl">
      <pre class="text-center">
来，封我为荡妇吧，不然对不起这春风浩荡里的遇见
我的野鸽子，你衔来桃花衔来杏花衔来炮弹
我备了酒备了背叛背了不死不归的决心
能让我在你身上找死吗？你的身体还如此干净
没有一口水晶棺材
我们有共同的情人：虚无，流逝，午夜里的红狐狸
我们雌雄同体，你有时候用女人的身体摩擦我
我偶尔用男人的狂妄摁倒你
这样的游戏只限于你我之间，不太好玩
走吧，我们去后山大干一场，把一个春天的花朵
都羞掉
至于前世我的逃脱我深表歉意
漏出了你的网，到现在我还是咸鱼一条
你不来翻动我，我就装死给这个春天看
你喜欢麦子，稻子，月光这些能养活人的东西
我不过贪喝了稗子酿的酒
就被你贬到这一轮的人世，这陌生的窑子里
      </pre>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

import TipsCard from "components/TipsCard.vue";

import { swiper } from "../statics/data";

const tipsList = [
  {
    img: require("../statics/img/bgImg.jpg"),
  },
].concat(swiper);

const $route = useRouter();
const { notify } = useQuasar();
const slide = ref(1);

// // 已阅
// const haveRead = (index) => {
//   cardList.value.splice(index, 1);
//   notify({
//     message: "操作成功",
//     color: "green",
//     textColor: "write",
//     position: "center",
//     icon: "check",
//   });
//   setTimeout(() => {
//     cardList.value.push({
//       title: "这是一个卡片",
//       author: "Calesvol",
//       content:
//         "让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。",
//     });
//   }, 1000);
// };
// //删除消息
// const delNews = (item) => {
//   notify({
//     message: "删不掉",
//     color: "yellow",
//     textColor: "black",
//     position: "center",
//     icon: "delete",
//   });
// };
</script>

<style scoped>
.w100 {
  width: 100%;
}
</style>
