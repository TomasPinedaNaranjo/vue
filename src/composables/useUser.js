import { ref } from 'vue'
import { defaultUser } from '../data/modules.js'

export function useUser() {
  const user = ref(defaultUser)

  const updateUser = (newUserData) => {
    user.value = { ...user.value, ...newUserData }
  }

  const getUserRole = () => {
    return user.value.role
  }

  const getUserName = () => {
    return user.value.name
  }

  return {
    user,
    updateUser,
    getUserRole,
    getUserName
  }
} 