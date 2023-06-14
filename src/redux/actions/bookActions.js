import axios from 'axios'
import {
	FETCH_BOOK_REQUEST,
	FETCH_BOOK_SUCCESS,
	FETCH_BOOK_FAILURE,
	FILTER_BOOKS_BY_PRICE,
	FILTER_BOOKS_BY_AUTHOR,
	ORDER_BOOKS_BY_PRICE,
	ORDER_BOOKS_BY_YEAR,
} from './types'
import { API_URL } from '@/constant/api'

export const fetchBooks = () => async dispatch => {
	dispatch({
		type: FETCH_BOOK_REQUEST,
	})

	try {
		const res = await axios.get(`${API_URL}/books`)
		const data = res.data

		dispatch({
			type: FETCH_BOOK_SUCCESS,
			payload: data,
		})
	} catch (error) {
		console.error('Error fetching books: ', error)

		dispatch({
			type: FETCH_BOOK_FAILURE,
			payload: error,
		})
	}
}

export const filterBooksByPrice = (filteredBooks, priceRange) => {
	return {
		type: FILTER_BOOKS_BY_PRICE,
		payload: {
			priceRange: priceRange,
			items: filteredBooks,
		},
	}
}

export const filterBooksByAuthor = (books, author) => {
	return {
		type: FILTER_BOOKS_BY_AUTHOR,
		payload: {
			author: author,
			items:
				author === '' ? books : books.filter(x => x.author === author),
		},
	}
}

export const orderBooksByPrice = (books, sort) => {
	const sortedBooks = books.slice()
	if (sort !== '') {
		sortedBooks.sort((a, b) =>
			sort === 'lowest'
				? a.unit_price > b.unit_price
					? 1
					: -1
				: a.unit_price < b.unit_price
				? 1
				: -1
		)
	} else {
		sortedBooks.sort((a, b) => (a.id > b.id ? 1 : -1))
	}
	return {
		type: ORDER_BOOKS_BY_PRICE,
		payload: {
			sort: sort,
			items: sortedBooks,
		},
	}
}

export const orderBooksByYear = (books, sort) => {
	const sortedBooks = books.slice()
	if (sort !== '') {
		sortedBooks.sort((a, b) =>
			sort === 'lowest'
				? a.published_year > b.published_year
					? 1
					: -1
				: a.published_year < b.published_year
				? 1
				: -1
		)
	} else {
		sortedBooks.sort((a, b) => (a.id > b.id ? 1 : -1))
	}
	return {
		type: ORDER_BOOKS_BY_YEAR,
		payload: {
			sort: sort,
			items: sortedBooks,
		},
	}
}
