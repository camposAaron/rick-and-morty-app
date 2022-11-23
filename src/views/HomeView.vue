<template>
  <main>
    <Filter @setFilter="setFilter" />
    <section id="list">
      <template v-for="character in characters" :key="character.id">
        <CharacterItem :character="character" />
      </template>
    </section>
  </main>
  <footer>
    <Paginator :totalPages="totalPages" :currentPage="currentPage" @SetPage="setPage" :pages="pages"
      @nextPages="nextPages" @prevPages="prevPages" />
  </footer>
</template>

<script>
//components
import CharacterItem from '../components/CharacterItem.vue';
import Filter from '../components/Filter.vue';
import Paginator from '../components/Paginator.vue';

import { getFilteredCharacters } from '../services/characters.service';


export default {
  data() {
    return {
      characters: [],
      currentPage: 1,
      totalPages: 0,
      pages: [],
      selectedFilter : ''
    };
  },
  components: {
    CharacterItem,
    Paginator,
    Filter
  },
  methods: {
    async setPage(number) {
      const { characters, info } = await getFilteredCharacters(this.selectedFilter,number );
      this.characters = characters;
      this.currentPage = number;
      //save on localstorage.
      // setCurrentPage(this.currentPage);
      this.totalPages = info.pages;
    },
    async nextPages() {
      const newCurrentPage = this.pages.pop() + 1;
      this.pages = [];
      const { characters, info } = await getFilteredCharacters( this.selectedFilter, newCurrentPage);
      this.characters = characters;
      this.currentPage = newCurrentPage;
      //save on localstorage.
      // setCurrentPage(this.currentPage);

      this.totalPages = info.pages;

      for (let i = this.currentPage; i < this.currentPage + 5; i++) {
        if (i <= this.totalPages)
          this.pages.push(i)
      }
    },
    async prevPages() {
      const newCurrentPage = this.pages.shift() - 5;
      this.pages = [];
      const { characters, info } = await getFilteredCharacters(this.selectedFilter, newCurrentPage);
      this.characters = characters;
      this.currentPage = newCurrentPage;
      //save on localstorage.
      // setCurrentPage(this.currentPage);
      this.totalPages = info.pages;

      for (let i = this.currentPage; i < this.currentPage + 5; i++) {
        if (i <= this.totalPages)
          this.pages.push(i)
      }
    },
    async setFilter(option) {
      this.pages = [];
      const { characters, info } = await getFilteredCharacters(option);
      this.characters = characters;
      this.currentPage = 1;
      this.totalPages = characters.length;
      for (let i = this.currentPage; i < this.currentPage + 5; i++) {
        this.pages.push(i)
      }

      this.selectedFilter = option;
    }
  },
  async mounted() {
    const { characters, info } = await getFilteredCharacters();
    this.characters = characters;

    // this.currentPage = getCurrentPage();
    this.currentPage = 1;
    console.log(this.currentPage);
    this.totalPages = info.pages;
    for (let i = this.currentPage; i < this.currentPage + 5; i++) {
      this.pages.push(i)
    }
  }
}
</script>



<style scoped>
#list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  row-gap: 30px;
}

footer {
  margin-top: 2rem;

}

@media (max-width: 1024px) {
  #list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  #list {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0px auto;
  }
}

@media (max-width: 400px) {
  #list {
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0px auto;
  }
}
</style>