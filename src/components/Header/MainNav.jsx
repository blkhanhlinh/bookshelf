import Image from "next/image";
import bookshelfColors from "@/utils/colors";
import { Stack } from "@chakra-ui/react";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const MainNav = () => {
	const [isClient, setIsClient] = useState(false);
	const { width } = useWindowSize();

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<nav id='main-nav'>
			{width >= 1024 ? (
				<Stack
					className='bg-background py-4 px-[5vw]'
					direction='row'
					justify='space-between'
					align='center'
				>
					<Image
						src='/Logo.svg'
						width={173}
						height={40}
						priority
						alt='logo'
					/>
					<Stack
						direction='row'
						spacing='1rem'
						justify='center'
						align='center'
					>
						<div className='flex flex-row items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1'
								stroke={bookshelfColors.info}
								className='w-12 h-12'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke={bookshelfColors.info}
								className='w-3 h-3'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 8.25l-7.5 7.5-7.5-7.5'
								/>
							</svg>
						</div>
						<InputGroup className='h-10'>
							<Input
								pr='4.0rem'
								placeholder='Search by title, author,...'
								borderColor={bookshelfColors.primary.light}
								focusBorderColor={bookshelfColors.primary.main}
								_placeholder={{
									opacity: 1,
									color: bookshelfColors.grey[4]
								}}
								width='40vw'
							/>
							<InputRightElement width='4.5rem'>
								<Button
									h='1.75rem'
									size='md'
									type='submit'
									bgColor={bookshelfColors.primary.main}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='white'
										className='w-5 h-5'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
										/>
									</svg>
								</Button>
							</InputRightElement>
						</InputGroup>
					</Stack>
					<Stack direction='row' align='center' spacing='2rem'>
						<div className='flex flex-col items-center justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke={bookshelfColors.info}
								className='w-7 h-7'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
								/>
							</svg>
							<p className='text-small-regular text-info'>
								Account
							</p>
						</div>
						<div className='flex flex-col items-center justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke={bookshelfColors.info}
								className='w-7 h-7'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
								/>
							</svg>
							<p className='text-small-regular'>Favorite</p>
						</div>
						<div className='flex flex-col items-center justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke={bookshelfColors.info}
								className='w-7 h-7'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
								/>
							</svg>
							<p className='text-small-regular'>My cart</p>
						</div>
					</Stack>
				</Stack>
			) : (
				<Stack
					className='bg-background py-4 px-[5vw]'
					direction='column'
					justify='space-between'
					align='center'
					spacing='1rem'
				>
					<Image
						src='/Logo.svg'
						width={102}
						height={16}
						priority
						alt='logo'
					/>
					<Stack
						direction='row'
						justify='space-between'
						align='center'
						className='w-[100%]'
					>
						<Stack
							direction='row'
							spacing='1rem'
							justify='center'
							align='center'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke={bookshelfColors.info}
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
								/>
							</svg>
							<Input
								placeholder='Search by title, author,...'
								borderColor={bookshelfColors.primary.light}
								focusBorderColor={bookshelfColors.primary.main}
								_placeholder={{
									opacity: 1,
									color: bookshelfColors.grey[4]
								}}
								width='50vw'
								size='sm'
							/>
						</Stack>
						<Stack direction='row' align='center' spacing='1rem'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke={bookshelfColors.info}
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke={bookshelfColors.info}
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
								/>
							</svg>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke={bookshelfColors.info}
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
								/>
							</svg>
						</Stack>
					</Stack>
				</Stack>
			)}
		</nav>
	);
};

export default MainNav;