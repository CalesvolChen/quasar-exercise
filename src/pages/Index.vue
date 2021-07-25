<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md w100 opacity">
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
    <span>{{ test }}</span>
    <q-parallax :src="require('../statics/img/bgImg.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
    <pre>
      JavaScript 简介
        让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。

      什么是 JavaScript？
        JavaScript 最初被创建的目的是“使网页更生动”。

        这种编程语言写出来的程序被称为 脚本。它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。

        脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

        这方面，JavaScript 和 Java 有很大的区别。
    </pre>
    <q-parallax :src="require('../statics/img/swiper/swiper1.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
    <pre>
      JavaScript 简介
        让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。

      什么是 JavaScript？
        JavaScript 最初被创建的目的是“使网页更生动”。

        这种编程语言写出来的程序被称为 脚本。它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。

        脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

        这方面，JavaScript 和 Java 有很大的区别。
    </pre>
    <q-parallax :src="require('../statics/img/swiper/swiper2.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
    <pre>
      JavaScript 简介
        让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。

      什么是 JavaScript？
        JavaScript 最初被创建的目的是“使网页更生动”。

        这种编程语言写出来的程序被称为 脚本。它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。

        脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

        这方面，JavaScript 和 Java 有很大的区别。
    </pre>
    <q-parallax :src="require('../statics/img/swiper/swiper3.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
    <pre>
      JavaScript 简介
        让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。

      什么是 JavaScript？
        JavaScript 最初被创建的目的是“使网页更生动”。

        这种编程语言写出来的程序被称为 脚本。它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。

        脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

        这方面，JavaScript 和 Java 有很大的区别。
    </pre>
    <q-parallax :src="require('../statics/img/swiper/swiper4.jpg')">
      <h1 class="text-white">Calesvol</h1>
    </q-parallax>
    <pre>
      JavaScript 简介
        让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。

      什么是 JavaScript？
        JavaScript 最初被创建的目的是“使网页更生动”。

        这种编程语言写出来的程序被称为 脚本。它们可以被直接写在网页的 HTML 中，在页面加载的时候自动执行。

        脚本被以纯文本的形式提供和执行。它们不需要特殊的准备或编译即可运行。

        这方面，JavaScript 和 Java 有很大的区别。
    </pre>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

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
    const test = ref('1230')
    const url = 'https://v1.hitokoto.cn'
    const params = {
      c:'d',
    }
    // axios.post(url,params)
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.error(err);
    // })
    // let cardList = ref([
    //   {
    //     title: "这是一个卡片",
    //     author: "Calesvol",
    //     content:
    //       "让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。",
    //   },
    //   {
    //     title: "这是一个卡片",
    //     author: "Calesvol",
    //     content:
    //       "让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。",
    //   },
    //   {
    //     title: "这是一个卡片",
    //     author: "Calesvol",
    //     content:
    //       "让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。",
    //   },
    //   {
    //     title: "这是一个卡片",
    //     author: "Calesvol",
    //     content:
    //       "让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。",
    //   },
    // ]);
    return {
      swiper,
      // cardList,
      slide,
      test,
      // 已阅
      haveRead(index) {
        cardList.value.splice(index, 1);
        notify({
          message: "操作成功",
          color: "green",
          textColor: "write",
          position: "center",
          icon: "check",
        });
        setTimeout(() => {
          cardList.value.push({
            title: "这是一个卡片",
            author: "Calesvol",
            content:
              "让我们来看看 JavaScript 有什么特别之处，我们可以用它实现什么，以及哪些其他技术可以与其搭配产生奇妙的效果。",
          });
        }, 1000);
      },
      //删除消息
      delNews(item) {
        notify({
          message: "删不掉",
          color: "yellow",
          textColor: "black",
          position: "center",
          icon: "delete",
        });
      },
    };
  },
});
</script>

<style scoped>
.w100 {
  width: 100%;
}
.opacity {
  opacity: 1;
}
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
