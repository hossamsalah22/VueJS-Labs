import { defineStore } from 'pinia';

export const booksStore = defineStore('booksStore', {
	state: () => ({
		books: [],
		wishlist: [],
	}),
	actions: {
		async getAllBooks() {
			const response = await fetch('http://localhost:3000/books');
			const books = await response.json();
			this.books = books;
		},
		inWishList(book) {
			return this.wishlist.find((b) => b.ISBN === book.ISBN);
		},
		addBook(book) {
			this.wishlist.push(book);
		},
		removeBook(book) {
			console.log(book);
			this.wishlist.splice(book, 1);
		},
		showPrice(price) {
			return Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(price);
		},
	},
});
