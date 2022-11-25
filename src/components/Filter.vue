<template>
  <div class="filter-bar">
    <h2>Filters: </h2>
    <ul class="status">
      <li :class="{ 'active': filter === option }" v-for="option in filtersOptions" :key="option"
        @click="setFilter(option)">
        {{ option }}
      </li>
    </ul>
  </div>
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

.filter-bar {
  display: flex;
  flex-flow: row wrap;
  align-items: center
  ;
}

.filter-bar h2{
  padding-right: 1rem;
}
.active {
  color: white;
  font-weight: 900;
}

.status {
  display: flex;
  flex-direction: row;
  list-style: none;
  width: min-content;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  background: #0000;
  border-radius: 999px;
  align-items: center;
  height: 2rem;
  border: 2px solid rgb(97, 222, 253);
  color: rgb(97, 222, 253);
  box-shadow: 0px 0px 18px #0a0a0a;
  padding-left: 5px;
  padding-right: 20px;
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

@media(max-width : 500px) {
  .status>li {
    font-size: 8pt;
  }
}
</style>