import Head from 'next/head'
import { Box } from '@chakra-ui/react'


const Layout = () => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxwidth="1280px" m="auto">
            <header>
                navbar
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </Box>
    </>
)

export default Layout