<script setup>

import GameCounter from './components/GameCounter.vue'

const WIN_NUMBER = 0

const MAX_NUMBER = 10


</script>

<template>

  <h1>Hello World</h1>

  <GameCounter :minNumber="WIN_NUMBER" :maxNumber="MAX_NUMBER" />

</template>

<style scoped></style>
