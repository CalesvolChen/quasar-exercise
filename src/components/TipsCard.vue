<template>
  <q-parallax :src="require('../statics/img/bgImg.jpg')">
    <div class="q-pa-md" @click="replaceTips">
      <h2 class="text-white NotoSerifSC">{{ content }}</h2>
    </div>
  </q-parallax>
</template>

<script>
import { defineComponent, ref } from "vue";
import { tipsApi } from "boot/axios";

export default defineComponent({
  name: "TipsCard",
  setup() {
    let content = ref(null);
    let author = ref(null);
    tipsApi().then((res) => {
      if (res.status !== 200) {
        content.value = "网络错误";
        return;
      }
      content.value = res.data.hitokoto;
      author.value = res.data.from;
    });

    return {
      content,
      author,
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
