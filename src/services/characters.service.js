import axios from "axios"

const URL = "https://rickandmortyapi.com/api"

const getCharacters = async (page = 1) => {
  const { data: { info, results } } = await axios.get(`${URL}/character?page=${page}`);
  return { characters: results, info };
}

export {
  getCharacters
}