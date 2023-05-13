import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';

const CardSlider = ({books}) => {
    console.log(books)

    return (
        <SimpleGrid
            column={{sm: 1, md: 4}}
        >
            {books && books.length !== 0 ? books.map((book) => (
                <Card book={book}/>
            )) : <p>Empty</p>}
        </SimpleGrid>
    );
}

export default CardSlider;