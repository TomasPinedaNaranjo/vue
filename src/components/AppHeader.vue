<script>
  export default {
    name: 'AppHeader',
    props: {
      title: {
        type: String,
        default: 'ERP Sistema',
      },
      subtitle: {
        type: String,
        default: 'Panel de Control Principal',
      },
      user: {
        type: Object,
        default: () => ({
          name: 'Usuario Ejemplo',
          role: 'Administrador',
        }),
      },
    },
  };
</script>

<template>
  <header class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ title }}</h1>
          <p class="text-sm text-gray-600">{{ subtitle }}</p>
        </div>
        <div class="flex items-center space-x-4">
          <div class="text-right">
            <p class="text-sm font-medium text-gray-900">{{ user.name }}</p>
            <p class="text-xs text-gray-500">{{ user.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
