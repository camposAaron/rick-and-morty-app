
export const getCurrentPage = () => {
  const currentPage = localStorage.getItem('currentPage');
  if (!currentPage)
    localStorage.setItem('currentPage', 1);
  return Number(currentPage);
}

export const setCurrentPage = (current) => {

  localStorage.setItem('currentPage', current);
}