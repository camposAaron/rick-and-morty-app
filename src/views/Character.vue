<script>

import { Suspense } from 'vue';
import CharacterItem from '../components/CharacterItem.vue';
import CommentItem from '../components/Comment.vue';
import Episode from '../components/Episode.vue';
import Modal from '../components/Modal.vue';

import { getCharacterById } from '../services/characters.service'
import { getCommentsById, addComment } from '../services/comments.service'
import { getEpisodeData } from '../services/episode.service'

export default {
  data() {
    return {
      id: '',
      character: '',
      comments: [],
      newComment: '',
      showModal: false,
      episode: {}
    }
  },
  components: {
    CharacterItem,
    CommentItem,
    Episode,
    Modal,
    Suspense
  },
  methods: {
    submitComment() {
      const { cant, comments } = addComment(this.id, this.newComment);
      this.character.comments = cant;
      this.comments = comments;
      this.newComment = ''
    },

    async showEpisodeModal(episodeUrl) {
      this.showModal = true;
      this.episode = await getEpisodeData(episodeUrl);
    }
  },
  async mounted() {
    this.id = this.$route.params.id;
    const character = await getCharacterById(this.id);
    const response = getCommentsById(this.id);
    if (response) {
      character.comments = response.cant;
      this.comments = response.comments;
    }
    this.character = character;
  }
}
</script>
  

<template>
  <div class="about">

    <div class="info">
      <CharacterItem :character="character" />
    </div>

    <div class="episodes">
      <h2>Episodes: </h2>
      <ul>
        <li v-for="episode in character.episode" :key="episode.id">
          <a class="episode-link" @click="showEpisodeModal(episode)">{{ episode }} </a>
        </li>
      </ul>
    </div>

    <div class="comments">
      <h2>Comments :</h2>
      <section class="comments-section">
        <template v-for="comment in comments">
          <CommentItem :comment="comment" />
        </template>
      </section>

      <form @submit.prevent="submitComment()">
        <textarea class="input" id="textarea" v-model="newComment" placeholder="write a comment"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>

  </div>


  <Modal v-if="showModal" @close-modal="showModal = false">

    <Episode :chapter="episode" />

  </Modal>

</template>

<style>
:root {
  --input-border: #8b8a8b;
  --input-focus-h: 245;
  --input-focus-s: 100%;
  --input-focus-l: 42%;
}

.about {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
}

.episodes {
  display: flex;
  flex-direction: column;
}

.episodes ul {
  list-style: decimal;
}

.comments {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.comments-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 6rem;
  max-height: 12rem;
  border: 0.5px solid #ccc;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: scroll;
  overflow-x: hidden;
}

.input {
  width: 100%;
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid var(--input-border);
  border-radius: 4px;
  height: 5rem;
}

button {
  border: none;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 12pt;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgb(154, 228, 42);
  border-radius: 12px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(109, 161, 30);
}

.episode-link:hover {
  cursor: pointer;
}



.info {
  width: 30%;
}


@media (max-width: 820px) {
  .info {
    width: 40%;
  }

  .comments {
    width: 80%;
  }
}

@media (max-width: 700px) {
  .info {
    width: 60%;
  }

  .comments {
    width: 80%;
  }
}


@media (max-width: 450px) {
  .info {
    width: 100%;
  }

  .comments {
    width: 100%;
  }
}
</style>

