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
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="judgmentRoute(link)"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const linksList = [
  {
    title: "Home",
    caption: "首页",
    icon: "home",
    path: "/",
  },
  {
    title: "Github",
    caption: "github.com/CalesvolChen",
    icon: "code",
    link: "https://github.com/CalesvolChen",
  },
  {
    title: "Gallery",
    caption: "作品展示",
    icon: "collections",
    path: "/work",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const $route = useRouter();
    const leftDrawerOpen = ref(false);
    const { notify } = useQuasar();

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      judgmentRoute(item) {
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
          $route.push(item.path);
        }
      },
      tips() {
        notify({
          message: "点了又没用...",
          position: "center",
          color: "pink",
          icon: "warning",
        });
      },
      toast() {
        notify({
          message: "别急别急，还早呢...",
          position: "top",
          color: "red",
          icon: "warning",
        });
      },
    };
  },
});
</script>
