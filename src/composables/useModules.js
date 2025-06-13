import { ref, computed } from 'vue'
import { modules } from '../data/modules.js'

export function useModules() {
  const selectedModule = ref('')
  const availableModules = ref(modules)

  const selectModule = (moduleId) => {
    selectedModule.value = moduleId
    console.log(`Navegando al módulo: ${moduleId}`)
    
    // Aquí puedes agregar la lógica de navegación
    // this.$router.push(`/${moduleId}`)
  }

  const getModuleById = (id) => {
    return availableModules.value.find(module => module.id === id)
  }

  const filteredModules = computed(() => {
    return availableModules.value
  })

  return {
    selectedModule,
    availableModules,
    selectModule,
    getModuleById,
    filteredModules
  }
} 