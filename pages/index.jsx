import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';
import { Navbar, Hero, LeftSidebar, About, Experiences, Projects, Contact } from '@/components';

export default function Home() {
  return (
    <Box maxWidth="100vw" minHeight="100vh" bg="#0E0F2F" px="3%" fontFamily="HindMadurai">
      <Head>
        <link rel="preload" href="/fonts/HindMadurai/HindMadurai-Regular.ttf" />
      </Head>
      <LeftSidebar />
      <Flex direction="column">
        <Navbar />
        <Hero />
      </Flex>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </Box>
  );
}
