import bookshelfColors from "@/styles/colors"
import { Box } from "@chakra-ui/react"

const NoResult = () => {
    return (
        <Box className="h-screen w-full mt-8">
            <Box bg={bookshelfColors.secondary.light} borderColor={bookshelfColors.secondary.main} borderWidth={1} p={6} rounded={4}>
                No books are available that match the results. 
            </Box>
        </Box>
    )
}

export default NoResult