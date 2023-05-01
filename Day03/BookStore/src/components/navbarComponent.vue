<template>
  <!-- Nav Bar -->
    <div class="bg-dark d-flex justify-content-between align-items-baseline py-2">
        <div class="col-sm-3">
            <router-link to="/" class="h1 text-decoration-none text-white font-weight-bold">Books</router-link>
        </div>
        <div class="col-sm-9 d-flex justify-content-end align-items-baseline">
            <router-link to="/wishlist" class="btn btn-primary">Show Wishlist</router-link>
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
}
</script>

<style>

</style>