<template>
  <q-page class="q-pa-md">
    这是一个博客
  </q-page>
</template>

<script setup>
import useClient from 'boot/notion.js'
const { client, databaseId } = useClient()
console.log(client)
</script>

<style></style>
