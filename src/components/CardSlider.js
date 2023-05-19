import { Heading, SimpleGrid, Spinner, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import BookCard from './BookCard'

const CardSlider = ({ books }) => {
    if (!books) {
        return (
            <div>
              <Spinner size="xl" />
            </div>
        );
    }
  
    if (books.length === 0) {
      return <p>No books found</p>;
    }
  
    return (
      <SimpleGrid columns={{ sm: 1, md: 4 }} marginBottom={'80px'}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </SimpleGrid>
    );
  };
  

export default CardSlider
