import { Bitcoin } from '../components/Images';
import { Stack, Box, Heading, Text, Button } from '@chakra-ui/react';

export const Hero = ({ color }) => {
  return (
    <Stack
      direction={['column', 'row']}
      pos="relative"
      h="100vh"
      w="100%"
      fontFamily="HindMadurai"
      pl={{ base: '15%', lg: '20%' }}
    >
      <Box
        pos="absolute"
        zIndex={1}
        w={{ base: '90%', lg: '70%' }}
        h="100%"
        pt={{ base: '30%', md: '25%', lg: '12%' }}
        color="white"
      >
        <Heading as="h1" fontSize="lg" mb="3" color={color}>
          Hello, my name is
        </Heading>
        <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} mb="3">
          Kenji LAU
        </Heading>
        <Heading as="h2" fontSize={{ base: '4xl', md: '6xl' }} color="#A2A3C3" mb="3">
          I&apos;m a Blockchain Developer.
        </Heading>
        <Text fontSize="larger" width="90%" color="#A2A3C3">
          I&apos;m a developer located in Paris with a high interest in cryptocurrencies and
          blockchain-based products.
          <br />I build things around Ethereum in React and Solidity and I&apos;m open to explore
          other ecosystems.
        </Text>
        <Button
          as="a"
          href="mailto: krouspyy@gmail.com"
          target="_blank"
          variant="ghost"
          color={color}
          borderColor={color}
          borderWidth="1px"
          mt="10"
          p="6"
          _hover={{ bg: '#1A1930' }}
        >
          Get In Touch
        </Button>
      </Box>
      <Box
        pos="absolute"
        display={{ base: 'none', md: 'inline' }}
        zIndex={0}
        w={{ base: '100%', lg: '30%' }}
        h="100%"
        pt={{ md: '15%', lg: '10%', xl: '5%' }}
        left="55%"
      >
        <Bitcoin color={color} />
      </Box>
    </Stack>
  );
};
