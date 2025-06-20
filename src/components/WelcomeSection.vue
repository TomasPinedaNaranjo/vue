<script>
export default {
  name: 'WelcomeSection',
  props: {
    title: {
      type: String,
      default: 'Bienvenido al Sistema ERP'
    },
    description: {
      type: String,
      default: 'Selecciona el módulo con el que deseas trabajar'
    }
  }
};
</script>

<template>
  <div class="mb-8">
    <h2 class="text-3xl font-bold text-gray-900 mb-2">
      {{ title }}
    </h2>
    <p class="text-lg text-gray-600">
      {{ description }}
    </p>
  </div>
</template>
