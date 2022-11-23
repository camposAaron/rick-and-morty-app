<template>
  <main>
    <section id="list">
      <template v-for="character in characters" :key="character.id">
        <CharacterItem :character="character" />
      </template>
    </section>
  </main>
  <footer>
    <Paginator :totalPages="totalPages" :currentPage="currentPage" @SetPage="setPage" :pages="pages"
      @nextPages="nextPages" @prevPages="prevPages"/>
  </footer>
</template>

<script>
//components
import CharacterItem from '../components/CharacterItem.vue';
import Paginator from '../components/Paginator.vue';

import { getCharacters } from '../services/characters.service';

export default {
  data() {
    return {
      characters: [],
      currentPage: 1,
      totalPages: 0,
      pages: []
    };
  },
  components: {
    CharacterItem,
    Paginator
  },
  methods: {
    async setPage(number) {
      const { characters, info } = await getCharacters(number);
      this.characters = characters;
      this.currentPage = number;
      this.totalPages = info.pages;
    },
    async nextPages() {
      const newCurrentPage = this.pages.pop() + 1;
      this.pages = [];
      const { characters, info } = await getCharacters(newCurrentPage);
      this.characters = characters;
      this.currentPage = newCurrentPage;
      this.totalPages = info.pages;

      for (let i = this.currentPage; i < this.currentPage + 5; i++) {
        if (i <= this.totalPages)
          this.pages.push(i)
      }
    },
    async prevPages() {
      const newCurrentPage = this.pages.shift() - 5;
      this.pages = [];
      const { characters, info } = await getCharacters(newCurrentPage);
      this.characters = characters;
      this.currentPage = newCurrentPage;
      this.totalPages = info.pages;

      for (let i = this.currentPage; i < this.currentPage + 5; i++) {
        if (i <= this.totalPages)
          this.pages.push(i)
      }
    }
  },
  async mounted() {
    const { characters, info } = await getCharacters();
    this.characters = characters;
    this.currentPage = 1;
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