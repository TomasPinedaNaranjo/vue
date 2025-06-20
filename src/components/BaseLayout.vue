<script>
import AppHeader from './AppHeader.vue';

export default {
  name: 'BaseLayout',
  components: {
    AppHeader
  },
  props: {
    headerTitle: {
      type: String,
      default: 'ERP Sistema'
    },
    headerSubtitle: {
      type: String,
      default: 'Panel de Control Principal'
    },
    user: {
      type: Object,
      default: () => ({
        name: 'Usuario Ejemplo',
        role: 'Administrador'
      })
    }
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <AppHeader :title="headerTitle" :subtitle="headerSubtitle" :user="user" />

    <!-- Contenido Principal -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>
  </div>
</template>
