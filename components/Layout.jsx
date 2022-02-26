import Head from 'next/head';
import { Box, Flex, Spacer } from '@chakra-ui/react';

import NavBar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
                <Flex border="3px solid black" justifyContent="center" alignItems="space" justifyContent="center" >
                    <Spacer />
                    <h1>Test 1</h1>
                    <Spacer />
                    <h1>Test 2</h1>
                    <Spacer />
                    <h1>Test 3</h1>
                    <Spacer />

                </Flex>
            </footer>
        </Box>
    </>
)

export default Layout;