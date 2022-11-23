<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="titles">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Prueba tecnica para optar al puesto de desarrollador frontend.
    </h3>
  </div>
</template>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.titles{
  margin-bottom: 2rem;
}

.titles h1,
.titles h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .titles h1,
  .titles h3 {
    text-align: left;
  }
}
</style>
