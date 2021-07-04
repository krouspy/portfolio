import { HStack, Box, Image, Text } from '@chakra-ui/react';
import { Title } from './Title';
import { CustomLink } from './CustomLink';

export const About = () => {
  const orange = '#EDBC41';
  return (
    <HStack id="about" w="50%" h="90vh" direction="row" pt="10%">
      <Box w="60%" h="100%">
        <Title index={1} text="About Me" />
        <Box color="white">
          <Text fontSize="lg" mb="5">
            Hi there! My name is Kenji and I&apos;m from Tahiti, French Polynesia. Currently,
            I&apos;m completing my{' '}
            <CustomLink
              href="https://www.esilv.fr/en/programmes/master-degree-engineering/"
              color={orange}
            >
              Master 2 Fintech program{' '}
            </CustomLink>{' '}
            at ESILV, an engineering school in Paris. I discovered cryptocurrencies in 2018,
            starting with Bitcoin then overtime, more I learned about it, I understood the benefits
            of this technology and the importance to build around it.
          </Text>
          <Text fontSize="lg" mb="5">
            Fast-forward to today, I had the opportunity to work at an{' '}
            <CustomLink href="https://www.wakam.com/en/" color={orange}>
              Insurance company
            </CustomLink>{' '}
            and collaborate on a student project with a{' '}
            <CustomLink href="https://www.soprabanking.com/" color={orange}>
              Banking company
            </CustomLink>
            . My goal is to keep learning everyday and build things around DeFi and NFTs while
            exploring other ecosystems such as Polkadot and Cardano.
          </Text>
          <Text fontSize="lg" mb="5">
            Aside from that, I really enjoy video games like{' '}
            <CustomLink href="https://playvalorant.com/en-us/" color={orange}>
              Valorant
            </CustomLink>{' '}
            and watching animes such as{' '}
            <CustomLink href="https://www.crunchyroll.com/dr-stone/videos" color={orange}>
              Dr. Stone
            </CustomLink>
            ,{' '}
            <CustomLink href="https://www.crunchyroll.com/jujutsu-kaisen" color={orange}>
              Jujutsu Kaisen
            </CustomLink>{' '}
            and{' '}
            <CustomLink href="https://www.netflix.com/search?q=Owari%20no%20Seraph" color={orange}>
              Owari no Seraph
            </CustomLink>
            .
          </Text>
        </Box>
      </Box>
      <Box w="40%" h="100%" pt="10%" pl="2%">
        <Box pos="relative" bg={orange} _hover={{ bg: 'transparent' }} transition="0.5s ease">
          <Image src="/profile.jpg" alt="profile" w="100%" objectFit="cover" opacity={0.8} />
        </Box>
      </Box>
    </HStack>
  );
};
