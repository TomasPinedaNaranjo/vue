<template>
  <BaseLayout 
    :header-title="DASHBOARD_TEXTS.header.title"
    :header-subtitle="DASHBOARD_TEXTS.header.subtitle"
    :user="user"
  >
    <WelcomeSection 
      :title="DASHBOARD_TEXTS.welcome.title"
      :description="DASHBOARD_TEXTS.welcome.description"
    />

    <ModuleGrid
      :modules="availableModules"
      :selected-module="selectedModule"
      :button-text="DASHBOARD_TEXTS.buttons.accessModule"
      @select="selectModule"
    />
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout.vue'
import WelcomeSection from './WelcomeSection.vue'
import ModuleGrid from './ModuleGrid.vue'
import { useModules } from '../composables/useModules.js'
import { useUser } from '../composables/useUser.js'
import { DASHBOARD_TEXTS } from '../constants/texts.js'

export default {
  name: 'Dashboard',
  components: {
    BaseLayout,
    WelcomeSection,
    ModuleGrid
  },
  setup() {
    const { selectedModule, availableModules, selectModule } = useModules()
    const { user } = useUser()

    return {
      selectedModule,
      availableModules,
      selectModule,
      user,
      DASHBOARD_TEXTS
    }
  }
}
</script>