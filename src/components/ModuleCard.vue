<template>
  <div
    @click="$emit('select', module.id)"
    class="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
    :class="{ 'ring-4 ring-blue-500': isSelected }"
  >
    <div class="bg-gradient-to-br p-6 text-white" :class="module.color">
      <div class="text-4xl mb-4">{{ module.icon }}</div>
      <h3 class="text-xl font-bold mb-2">{{ module.name }}</h3>
      <p class="text-white text-opacity-90 text-sm">{{ module.description }}</p>
    </div>
    
    <div class="bg-white p-4">
      <button class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleCard',
  props: {
    module: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Acceder al Módulo'
    }
  },
  emits: ['select']
}
</script> 