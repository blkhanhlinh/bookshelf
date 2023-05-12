import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
    return (
        <>
            <Box maxWidth="1230px" m="auto">
                <main>{children}</main>
            </Box>
        </>
    );
}
export default Layout;