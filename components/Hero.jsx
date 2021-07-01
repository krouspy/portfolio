import { Bitcoin } from '../components/Images';
import { HStack, Box, Heading, Text, Button } from '@chakra-ui/react';

export const Hero = () => {
  const orange = '#EDBC41';
  return (
    <HStack pos="relative" h="94vh" w="100%" fontFamily="HindMadurai" pl="20%">
      <Box pos="absolute" zIndex={1} w="70%" h="100%" pt="12%" color="white">
        <Heading as="h1" fontSize="lg" mb="3" color={orange}>
          Hello, my name is
        </Heading>
        <Heading as="h1" fontSize="6xl" mb="3">
          Kenji LAU
        </Heading>
        <Heading as="h2" fontSize="6xl" color="#A2A3C3" mb="3">
          I'm Blockchain Developer.
        </Heading>
        <Text fontSize="larger" width="90%" color="#A2A3C3">
          I'm a developer located in Paris with a high interest in cryptocurrencies and
          blockchain-based products.
          <br />
          Currently, I'm working at Wakam, a french insurance company where we use
        </Text>
        <Button
          variant="outline"
          color={orange}
          borderColor={orange}
          mt="10"
          p="6"
          opacity={1}
          _hover={{ bg: '#FFE9CC' }}
        >
          Get In Touch
        </Button>
      </Box>
      <Box pos="absolute" zIndex={0} w="30%" h="100%" pt="5%" left="55%">
        <Bitcoin />
      </Box>
    </HStack>
  );
};
