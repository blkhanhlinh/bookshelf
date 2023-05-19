'use client';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import BookCard from './BookCard'

const CardSlider = ({books}) => {
    return (
        <Stack>
        {books && books.length !== 0 ? (
            <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={6}>
            {books.map(book => (
                <BookCard key={book.id} book={book} />
            ))}
            </SimpleGrid>
        ) : (
            <p>No books found</p>
        )}
        </Stack>
    )
}

export default CardSlider
