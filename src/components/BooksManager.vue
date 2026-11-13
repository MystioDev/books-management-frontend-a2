<script setup>
import { getBooks } from "../api/books";
</script>

<script>
export default {
  name: "BooksManager",
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.loadBooks();
  },
  methods: {
    async loadBooks() {
      this.books = await getBooks();
    },
  },
};
</script>

<template>
  <main class="">
    <h1 class="">Könyv kezelő rendszer</h1>

    <table class="">
      <thead class="">
        <tr class="">
          <th class="">azonosító</th>
          <th class="">cím</th>
          <th class="">szerző</th>
          <th class="">év</th>
          <th class="">műveletek</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="book in books" :key="book.id" class="">
          <td class="">{{ book.id }}</td>
          <td class="">{{ book.title }}</td>
          <td class="">{{ book.author }}</td>
          <td class="">{{ book.year }}</td>
          <td class="">-</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
