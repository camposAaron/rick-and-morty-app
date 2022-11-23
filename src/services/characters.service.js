import axios from "axios"

const URL = "https://rickandmortyapi.com/api"


const getFilteredCharacters = async (option = 'All', page = 1) => {
  const filter = option.toLocaleLowerCase();
  const genders = ['female', 'male', 'genderless', 'unknown'];
  const status = ['alive', 'dead', 'unknow']
  
  console.log(option, filter);
  let query;
  if (genders.includes(filter)) {
    query = `gender=${filter}`
  }

  if (status.includes(filter)) {
    query = `status=${filter}`
  }

  if(option === "All"){
    query = ``;
  }

  const { data: { info, results } } = await axios.get(`${URL}/character?page=${page}&${query}`);

  console.log(results);
  return { characters: results, info };
}



export {
  getFilteredCharacters
}