const API_URL = "/api/books";

const getBooks = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

const createBook = async (book) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  return response.json();
};

export { getBooks, createBook };
