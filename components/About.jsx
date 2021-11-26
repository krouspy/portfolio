import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { Title } from './Title';
import { CustomLink } from './CustomLink';

const links = {
  esilv: 'https://www.esilv.fr/en/programmes/master-degree-engineering/',
  wakam: 'https://www.wakam.com/en/',
  sopra: 'https://www.soprabanking.com/',
  valorant: 'https://playvalorant.com/en-us/',
  drstone: 'https://www.crunchyroll.com/dr-stone/videos',
  jujutsu: 'https://www.crunchyroll.com/jujutsu-kaisen',
  owari: 'https://www.netflix.com/search?q=Owari%20no%20Seraph',
};

export const About = ({ color }) => {
  return (
    <Flex
      id="about"
      w={{ base: '70%', md: 700, lg: 800, xl: 1000 }}
      minH="80vh"
      direction={{ base: 'column', lg: 'row' }}
      pt="20"
    >
      <Box w={{ base: '100%', lg: '60%' }} h="100%">
        <Title index={1} text="About Me" color={color} />
        <Box color="white">
          <Text fontSize="lg" mb="5">
            Hi there! My name is Kenji and I&apos;m from Tahiti, French Polynesia.
            <br />
            Currently, I&apos;m completing my{' '}
            <CustomLink href={links.esilv} color={color}>
              Master 2 Fintech program{' '}
            </CustomLink>{' '}
            at ESILV, an engineering school in Paris. I discovered cryptocurrencies in 2018,
            starting with Bitcoin then overtime, more I learned about it, I understood the benefits
            of this technology and the importance to build around it.
          </Text>
          <Text fontSize="lg" mb="5">
            Fast-forward to today, I had the opportunity to work at an{' '}
            <CustomLink href={links.wakam} color={color}>
              Insurance company
            </CustomLink>{' '}
            and collaborate on a student project with a{' '}
            <CustomLink href={links.sopra} color={color}>
              Banking company
            </CustomLink>
            . My goal is to keep learning everyday and build things around DeFi and NFTs while
            exploring other ecosystems such as Polkadot, Polygon, Solana and Cardano.
          </Text>
          <Text fontSize="lg" mb="5">
            Aside from that, I really enjoy video games like{' '}
            <CustomLink href={links.valorant} color={color}>
              Valorant
            </CustomLink>{' '}
            and watching animes such as{' '}
            <CustomLink href={links.drstone} color={color}>
              Dr. Stone
            </CustomLink>
            ,{' '}
            <CustomLink href={links.jujutsu} color={color}>
              Jujutsu Kaisen
            </CustomLink>{' '}
            and{' '}
            <CustomLink href={links.owari} color={color}>
              Owari no Seraph
            </CustomLink>
            .
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" w={{ base: '80%', lg: '40%' }} py="20" ml="2%">
        <Box w={{ base: '80%', lg: '100%' }}>
          <Box bg={color} _hover={{ bg: 'transparent' }} transition="0.5s ease">
            <Image src="/profile.jpg" alt="profile" w="100%" objectFit="cover" opacity={0.8} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
