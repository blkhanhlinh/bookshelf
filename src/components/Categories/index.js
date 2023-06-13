import React from 'react';
import Link from "next/link"
import { Box, Stack } from '@chakra-ui/react';

const CategoryItem = ({ name, link }) => {
    return (
        <li>
            <Link href={link || "/"}>
                {name}
            </Link>
        </li>
    )
}

export default function CategoriesBar() {
    return (
        <Box>
            
        </Box>
    )
}
