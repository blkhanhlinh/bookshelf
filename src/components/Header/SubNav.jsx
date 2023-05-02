import { Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useState, useEffect } from "react";
import useWindowSize from "@/utils/hooks/useWindowSize";


const SubNav = () => {
    const [isClient, setIsClient] = useState(false)
	const { width } = useWindowSize()

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient || width < 1024) {
		return null;
	}

    const categories = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Best Sellers',
            href: '/',
        },
        {
            name: 'New Arrivals',
            href: '/',
        },
        {
            name: 'Coming Soon',
            href: '/',
        },
        {
            name: 'Fiction',
            href: '/',
        },
        {
            name: 'Business & Management',
            href: '/',
        },
        {
            name: 'Children\'s Books',
            href: '/',
        },
        {
            name: 'Dictionaries & Languages',
            href: '/',
        },
        {
            name: 'Other Languages',
            href: '/',
        },
    ]

    return (
        <nav id='sub-nav'>
            <Stack className="h-12 bg-background py-3 px-[5vw]" direction='row' spacing='auto' justify='center' align='center'>
                {categories.map((category, index) => (
                    <Link href={category.href} key={index} className='text-regular-regular text-info'>{category.name}</Link>
                ))}
            </Stack>
        </nav>
    )
}

export default SubNav