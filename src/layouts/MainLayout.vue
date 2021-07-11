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
        <div>建设中</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <q-item clickable v-ripple>
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

const linksList = [
  {
    title: "个人主页",
    caption: "CalesvolChen",
    icon: "home",
    path: "/hello"
  },
  {
    title: 'Github',
    caption: 'github.com/CalesvolChen',
    icon: 'code',
    link: 'https://github.com/CalesvolChen'
  }
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
