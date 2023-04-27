import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react'
import bookshelfColors from '../../../utils/colors'

const SearchBar = ({ containerClass, inputWidth }) => {
    return (
        <InputGroup className={containerClass}>
            <Input
                pr='4.5rem'
                placeholder='Search by title, author,...'
                borderColor={bookshelfColors.primary.light}
                focusBorderColor={bookshelfColors.primary.main}
                _placeholder={{ opacity: 1, color: bookshelfColors.grey[4] }}
                width={inputWidth}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='md' type='submit' bgColor={bookshelfColors.primary.main}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default SearchBar