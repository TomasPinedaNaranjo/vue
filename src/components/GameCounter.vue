<script setup>
import { ref, computed } from 'vue'

const counter = ref(0)

const { minNumber, maxNumber } = defineProps({
  minNumber: {
    type: Number,
    required: true
  },
  maxNumber: {
    type: Number,
    required: true
  }
})

const randomNumber = ref(
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
)

const increment = () => {
  if (counter.value < maxNumber) {
    counter.value++
  }
}

const decrement = () => {
  if (counter.value > minNumber) {
    counter.value--
  }
}

const counterColor = computed(() => {
  return counter.value === randomNumber.value ? '#ff6b6b' : '#4ecdc4'
})
</script>

<template>
  <div class="counter-container" :style="{ backgroundColor: counterColor }">
    <button @click="decrement">-</button>
    <span class="counter-display">Contador: {{ counter }}</span>
    <button @click="increment">+</button>
    <p class="random-info">Número mágico: {{ randomNumber }}</p>
  </div>

  <p v-if="counter === randomNumber">¡Has adivinado el número!</p>
</template>

<style scoped>
.counter-container {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: background-color 0.3s ease;
  margin: 20px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 18px;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #555;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.counter-display {
  font-size: 24px;
  font-weight: bold;
  margin: 0 20px;
  color: #333;
}

.random-info {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}
</style>
