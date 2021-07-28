<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Calesvol's Website </q-toolbar-title>
        <div @click="toast">建设中</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <q-item clickable v-ripple @click="tips">
          <q-item-section side>
            <q-avatar size="48px">
              <img src="../image/avatar.jpg" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Calesvol</q-item-label>
            <q-item-label caption>📖 On study</q-item-label>
          </q-item-section>
          <q-item-section side>online</q-item-section>
        </q-item>
        <EssentialLink
          v-for="(link, index) in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="judgmentRoute(link, index)"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">请输入秘钥</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="secret"
          autofocus
          @keyup.enter="confirmSecret"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="取消" @click="cancelSecret" />
        <q-btn flat label="确认" @click="confirmSecret" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { linksList } from "../statics/data"

const $route = useRouter();
const { notify } = useQuasar();

const essentialLinks = linksList;

const leftDrawerOpen = ref(false);
const prompt = ref(false);
const secret = ref(null);

// 侧边栏
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// 判断路由跳转
const judgmentRoute = (item, index) => {
  const currentPath = $route.currentRoute.value.fullPath;
  if (currentPath === "/" && item.path === "/") {
    notify({
      message: "你已经在首页啦",
      position: "center",
      color: "blue",
      icon: "home",
    });
    return;
  }
  if (item.path === "/" && item.path !== currentPath) {
    const delta = ($route.getRoutes().length - 1) / 2 - 1;
    // notify({
    //   message: "正在回到首页，请稍后...",
    //   position: "top",
    //   color: "pink",
    //   spinner: true,
    //   timeout: 1000,
    // });
    // setTimeout(() => {
    //   $route.go(-delta);
    // }, 1500);
    $route.go(-delta);
    return;
  }
  if (item.path !== currentPath) {
    if (index > 1) {
      prompt.value = true;
      return;
    }
    $route.push(item.path);
  }
};

//取消输入
const cancelSecret = () => {
  prompt.value = false;
  secret.value = null;
};

//确认秘钥
const confirmSecret = () => {
  if (secret.value !== "calesvol") {
    notify({
      message: "秘钥错误！",
      position: "top",
      color: "red",
      icon: "warning",
    });
    return;
  }
  prompt.value = false;
  $route.push("/work");
  secret.value = null;
};

const tips = () => {
  notify({
    message: "点了又没用...",
    position: "center",
    color: "pink",
    icon: "warning",
  });
};

const toast = () => {
  notify({
    message: "别急别急，还早呢...",
    position: "top",
    color: "red",
    icon: "warning",
  });
};
</script>
