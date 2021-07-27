<template>
  <div class="q-pa-xl NotoSerifSC">
    <div class="text-h6">{{ title || "" }}</div>
    <div class="text-right text-h6 q-pt-md">
      {{ titleAuthor && `——${titleAuthor || ""}` }}
    </div>
  </div>
  <q-parallax :src="img">
    <div class="q-pa-md">
      <h2 class="text-white NotoSerifSC">{{ content || "" }}</h2>
    </div>
  </q-parallax>
</template>

<script>
import { defineComponent, ref } from "vue";
import { tipsApi, poemsApi } from "boot/axios";

export default defineComponent({
  name: "TipsCard",
  props: {
    img: String,
    current: {
      type: Number,
      default: -1,
    },
  },
  setup(props) {
    let title = ref(null);
    let titleAuthor = ref(null);
    let content = ref(null);
    if (props.current === 0) {
      tipsApi("i", 20, 30).then((res) => {
        if (res.status !== 200) {
          title.value = "网络错误";
          titleAuthor.value = "网络错误";
          return;
        }
        title.value = res.data.hitokoto;
        titleAuthor.value = res.data.from;
      });
    } else {
      poemsApi().then((res) => {
        if (res.status !== 200) {
          title.value = "网络错误";
          titleAuthor.value = "网络错误";
          return;
        }
        title.value = res.data.data.sentence;
        titleAuthor.value = res.data.data.author;
      });
    }
    poemsApi().then((res) => {
      if (res.status !== 200) {
        content.value = "网络错误";
        return;
      }
      content.value = res.data.data.sentence;
    });
    return {
      title,
      titleAuthor,
      content,
    };
  },
});
</script>
<style>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
