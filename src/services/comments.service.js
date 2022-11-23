
const getCommentsById = (characterId) => {
  const data = JSON.parse(localStorage.getItem('comments'));
  let userComments;
  if (data) {
    userComments = data.filter((c) => c.id === characterId);
    return { cant: userComments.length, comments: userComments }
  }
}

const addComment = (id, comentary) => {
  const data = JSON.parse(localStorage.getItem('comments'));
  if (data) {
    data.push({ id, comment: comentary });
    localStorage.setItem('comments', JSON.stringify(data));
    return getCommentsById(id);
  } else {
    let data = [{ id, comment: comentary }];
    localStorage.setItem('comments', JSON.stringify(data));
    return getCommentsById(id);
  }
}

export {
  addComment, getCommentsById
}