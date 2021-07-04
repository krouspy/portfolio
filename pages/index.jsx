import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Navbar, Hero, LeftSidebar, About, Experiences, Projects, Contact } from '@/components';

export default function Home() {
  return (
    <Box maxWidth="100vw" minHeight="100vh" bg="#0E0F2F" fontFamily="HindMadurai">
      <Head>
        <link rel="preload" href="/fonts/HindMadurai/HindMadurai-Regular.ttf" />
      </Head>
      <Navbar />
      <Hero />
      <LeftSidebar />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </Box>
  );
}
