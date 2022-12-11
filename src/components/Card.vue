<script setup>

</script>

<template>

  <div class="card">
    <slot>Only displayed if no slot content</slot>
  </div>

</template>

<style scoped>
.card {
  display: flex;
  width: 30%;
  min-height: 6rem;
  flex-direction: column;
  background-color: rgb(208, 211, 44);
  border-radius: 18px;
  box-shadow: 0px 0px 8px #181515;
  color: black;
}
</style>