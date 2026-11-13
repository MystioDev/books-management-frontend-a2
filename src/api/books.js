const API_URL = "/api/books";

const getBooks = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export { getBooks };
