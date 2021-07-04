import { Center, Stack, Grid, Flex, Box, Button, Text, Link } from '@chakra-ui/react';
import { Title } from './Title';

export const Contact = () => {
  const orange = '#EDBC41';
  return (
    <Center id="contact" minH="50vh" color="#fff" flexDirection="column">
      <Title index={4} text="Contact" />
      <Text fontSize="xl" maxW="80%" textAlign="center">
        Don't hesitate to drop me a message, I'll try my best to get back to you!
      </Text>
      <Link
        href="mailto: krouspyy@gmail.com"
        isExternal
        textDecor="none"
        _hover={{ textDecoration: 'none' }}
      >
        <Button
          variant="outline"
          color={orange}
          borderColor={orange}
          mt="10"
          p="6"
          opacity={1}
          _hover={{ opacity: 1 }}
          bg="rgba(255, 255, 255, 0)"
        >
          Say Hello
        </Button>
      </Link>
    </Center>
  );
};
