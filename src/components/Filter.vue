<template>
  <h2>Filters: </h2>
  <ul class="status">
    <li :class="{ 'active': filter === option }" v-for="option in filtersOptions" :key="option"
      @click="setFilter(option)">
      {{option}}
    </li>
  </ul>

</template>

<script>


export default {
  data() {
    return {
      filter: '',
      filtersOptions: [
        'All', 'Alive', "Female", "Male", "Genderless", "Unknow"
      ]
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
      console.log(filter);
      this.$emit('setFilter', filter);
    }
  }
}
</script>

<style scoped>
.active {
  color: white;
  font-weight: 900;
}

.status {
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 520px;
  justify-content: flex-start;
  margin-bottom: 2rem;
  margin-top: 2rem;
  background: #0000;
  color: black;
  border-radius: 999px;
  align-items: center;
  height: 2rem;
  border: 2px solid rgb(97, 222, 253);
  ;
  color: rgb(97, 222, 253);
  box-shadow: 0px 0px 18px #0a0a0a;
}

.status>li {
  margin-left: 1rem;
  font-size: 14pt;
  font-weight: 400;
}

.status>li:hover {
  cursor: pointer;
  transition: all 300ms;
  color: white
}
</style>