import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Navbar, Hero, LeftSidebar, About, Experiences, Projects, Contact } from '@/components';

export default function Home() {
  const orangeColor = '#EDBC41';
  return (
    <Box maxWidth="100vw" minHeight="100vh" bg="#0E0F2F" fontFamily="HindMadurai">
      <Head>
        <title>Kenji LAU</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo.svg" />
        <link rel="preload" href="/fonts/HindMadurai/HindMadurai-Regular.ttf" />
      </Head>
      <Navbar color={orangeColor} />
      <Hero color={orangeColor} />
      <LeftSidebar color={orangeColor} />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <About color={orangeColor} />
        <Experiences color={orangeColor} />
        <Projects color={orangeColor} />
        <Contact color={orangeColor} />
      </main>
    </Box>
  );
}
