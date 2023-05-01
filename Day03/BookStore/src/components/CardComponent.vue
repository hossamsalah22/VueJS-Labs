<template>
  <div class="row d-flex justify-content-between items-align-center">
        <div :key="book.ISBN" class="col-12 col-md-6 col-lg-4" v-for="book in booksStore.books">
            <div class="card w-100" style="width: 18rem;">
                <img :alt="book.name" :src="book.imageUrl" :title="book.name" class="card-img-top">
                <div class="card-body row">

                    <h5 class="col-12 card-title">{{ book.name }}</h5>
                    <div class="col-6">
                        <p class="card-text">{{ book.category }}</p>
                        <p class="card-text">{{ book.author }}</p>
                        <p :class="['card-text',book.numPages>=50?'more':'less']">{{ book.numPages }}</p>
                    </div>
                    <div>
                        <p class="card-text">{{ booksStore.showPrice(book.price) }}</p>
                        <p class="card-text">{{ book.ISBN }}</p>

                        <button :disabled="booksStore.inWishList(book)" @click="booksStore.addBook(book)"
                                class="btn btn-primary">Add to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { booksStore } from '@/stores/booksStore';
export default {
    data: () => ({
            wishListShow: false,
            booksStore:booksStore(),
        }),
    async created(){
            await this.booksStore.getAllBooks();
    },
}
</script>

<style>
.less {
    color: red;
}

.more {
    color: green;
}
</style>