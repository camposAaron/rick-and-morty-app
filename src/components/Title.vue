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
    <h1>{{ msg }}</h1>
    <h3>Powered by 
      <a href='https://rickandmortyapi.com'>The Rick and Morty API</a>
    </h3>
  </div>
</template>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: rgb(97, 222, 253);
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
