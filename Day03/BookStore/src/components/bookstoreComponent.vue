<template>
    <div>
        <div v-if="booksStore.wishlist.length === 0">
            <h1 class="text-center text-danger">Wishlist is Empty</h1>
        </div>
        <div v-else>
            <h1 class="text-center">Books Wishlist</h1>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">price</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="book.ISBN" v-for="(book, index) in booksStore.wishlist">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ book.name }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ booksStore.showPrice(book.price) }}</td>
                    <td>
                        <button @click="booksStore.removeBook(book)" class="btn btn-danger">Remove</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import { booksStore } from '@/stores/booksStore';
export default {
    data: () => ({
            booksStore:booksStore(),
        }),
        
}
</script>

<style>

</style>