<template>
  <nav class="paginator">
    <ul>
      <li v-if="currentPage > 5" @click="prevPage()">
        prev
      </li>
      <li :class="{ 'active': currentPage === number }" v-for="number in pages" @click="setPage(number)">
        {{ number }}
      </li>
      <li v-if="pages.length === 5" @click="nextPages()">
        next
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

  props: {
    totalPages: Number,
    currentPage: Number,
    pages: Array
  },
  methods: {
    prevPage() {
      this.$emit('prevPages');
    },
    setPage(pageNumber) {
      this.$emit('setPage', pageNumber);
    },
    nextPages() {
      this.$emit('nextPages');
    },
  },

}
</script>

<style scoped>
.paginator {
  
  width: 30%;
}

.paginator ul {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  list-style: none;
}

.paginator ul>li {
  min-width: 2rem;
  height: 2rem;
  border: 1px solid whitesmoke;
  text-align: center;
  background-color: rgb(31, 30, 30);
  color: rgb(97, 222, 253);
  border-radius: 8px;
}

.paginator ul>li:hover {
  transform: scale(1.1, 1.1);
  cursor: pointer;
}

.active {
  font-size: 14pt;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .paginator {
    width: 70%;
    display: block;
    position: fixed;
    bottom: 0;
    margin-bottom: 5px;
  }
}
</style>

