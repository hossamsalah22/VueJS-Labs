<template>
  <div class="container">

      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <a @click.prevent="showBooks()" class="navbar-brand" href="#">
              Books
          </a>
          <a @click.prevent="showWishList()" class="navbar-brand ml-auto btn btn-primary" href="#">
              Wishlist
          </a>
      </nav>
      <div class="row" v-if="showList === false">
          <div class="col-md-4" v-for="book in books">
              <div class="card mb-4">
                  <img :src="book.image" :title="book.name" alt="Book cover" class="card-img-top">
                  <div class="card-body row align-items-baseline justify-content-between">
                      <div class="col-5">
                          <h5 class="card-title">{{ book.category }}</h5>
                          <p class="card-text less" v-if="book.pages < 50">{{ book.pages }}</p>
                          <p class="card-text more" v-else>{{ book.pages }}</p>
                          <p class="card-text">{{ book.isbn }}</p>
                      </div>
                      <div class="col-5">
                          <h5 class="card-title">{{ book.author }}</h5>
                          <p class="card-text">{{ formatPrice(book.price) }} </p>
                          <button :disabled="checkBook(book)" @click="addToList(book)" class="btn btn-primary small">Add
                              to
                              WishList
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row" v-if="showList === true">
          <h1 class="less fw-bolder text-center mt-5" v-if="bookList.length === 0">WishList is Empty</h1>
          <table class="table table-dark" v-else>
              <thead>
              <tr>
                  <th scope="col">#</th>
                  <th scope="col">ISBN</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Image</th>
                  <th scope="col">Number of pages</th>
                  <th scope="col">Author</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr :key="index" v-for="(book, index) in bookList">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ book.isbn }}</td>
                  <td>{{ book.name }}</td>
                  <td>{{ book.category }}</td>
                  <td>
                      <img  :alt="book.name" :src="book.image" class="img-thumbnail" height="50"
                            width="50"/>
                  </td>
                  <td>{{ book.pages }}</td>
                  <td>{{ book.author }}</td>
                  <td>{{ formatPrice(book.price) }}</td>
                  <td>
                      <button @click="removeBook(book)" class="btn btn-danger">
                          Remove
                      </button>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import {books} from "@/assets/books";
export default ({
    data: () => ({
        books: books,
        showList: false,
        bookList: [],
    })
    ,
    methods: {
        addToList(book) {
            this.bookList.push(book);
            console.log(this.bookList);
        },
        showWishList() {
            this.showList = true
        },
        showBooks() {
            this.showList = false
        },
        removeBook(book) {
            this.bookList.splice(book, 1);
        },
        checkBook(book) {
            return this.bookList.find(b => b.isbn === book.isbn)
        },
        formatPrice(price) {
            return Intl.NumberFormat('ar-SA', {
                style: 'currency',
                currency: 'SAR'
            }).format(price)
        }
    }
})
</script>

<style scoped>
.less {
    color: red;
}

.more {
    color: green;
}
</style>