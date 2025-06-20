<script>
import ModuleCard from './ModuleCard.vue';

export default {
  name: 'ModuleGrid',
  components: {
    ModuleCard
  },
  props: {
    modules: {
      type: Array,
      required: true
    },
    selectedModule: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Acceder al Módulo'
    }
  },
  emits: ['select']
};
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
    <ModuleCard
      v-for="module in modules"
      :key="module.id"
      :module="module"
      :is-selected="selectedModule === module.id"
      :button-text="buttonText"
      @select="$emit('select', $event)"
    />
  </div>
</template>
