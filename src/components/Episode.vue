<script>

import { onMounted, ref, onUpdated } from 'vue';
import { getVideoId } from '../services/episode.service';

export default {
  props: {
    chapter: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      air_date: { type: String, required: true },
      episode: { type: String, required: true }
    }
  },
  setup(props) {

    const youtubeUrl = ref("");

    onUpdated(async () => {
      console.log('updated');
      const videoId = await getVideoId(`rick and morty ${props.chapter.episode}`);
      youtubeUrl.value = "https://www.youtube.com/embed/" + videoId;
    },)

    return { youtubeUrl }
  }

}

</script>

<template>
  <div class="episode-info">
    <h1>{{ this.chapter.name }} - episode {{ this.chapter.id }}</h1>
    <h2>Air date: {{ this.chapter.air_date }}</h2>
    <h2>season : {{ this.chapter.episode }}</h2>
  </div>
  <iframe :src="this.youtubeUrl" width="480" height="360" frameborder="0" allowfullscreen></iframe>
</template>

<style scoped>

.episode-info{
  padding : 1rem;
}


iframe {
  width: 90%;
  height: 200px;
  align-self: center;
  justify-content: flex-start;

}
</style>