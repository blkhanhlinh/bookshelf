import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import BookCard from './BookCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CardSlider = ({ books }) => {
	const ref = useRef({})

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	const limitedBooks = books.slice(0, 6)

	return (
		<Slider ref={ref} {...settings} className='pb-5'>
			{limitedBooks.map(book => (
				<BookCard key={book.id} book={book} />
			))}
		</Slider>
	)
}

export default CardSlider
