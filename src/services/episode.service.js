import axios from "axios"

const URL = "https://rickandmortyapi.com/api";
const API_KEY = "AIzaSyAanD23j4zUNUeFT4AFoq5CHBvnYHIJKiM";

const getEpisodeById = async (id) => {
  const { data } = await axios.get(`${URL}/episode/${id}`);
  return data;
}

const getEpisodeData = async (episodeUrl) => {
  const { data } = await axios.get(episodeUrl);
  return data;
}

const getVideoId = async (search) => {
  const result = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      q: search,
      part: 'id',
      type: 'video',
      key: API_KEY
    }
  });

  return result.data.items[0].id.videoId;
}

export {
  getEpisodeById, getEpisodeData, getVideoId
}