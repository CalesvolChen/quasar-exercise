<template>
  <div class="q-pa-md">
    <!-- <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      v-model:fullscreen="fullscreen"
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="../image/lw1.jpg"
      />
      <q-carousel-slide
        :name="2"
        img-src="../image/lw2.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="../image/lw3.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="../image/lw4.jpg"
      />

      <template v-slot:control>
        <q-carousel-control position="bottom-right" :offset="[18, 18]">
          <q-btn
            push
            round
            dense
            color="white"
            text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel> -->
    <q-btn
      style="font-size: 30px"
      label="查看当前路由"
      color="primary"
      push
      @click="toast"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $route = useRouter();
    const slide = ref(1);
    const fullscreen = ref(false);
    return {
      slide,
      fullscreen,
      toast() {
        console.log($route);
        // console.log($route.currentRoute.value);
      },
    };
  },
};
</script>

<style></style>
