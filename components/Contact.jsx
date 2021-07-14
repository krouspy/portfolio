import { Center, Button, Text, Link } from '@chakra-ui/react';
import { Title } from './Title';

export const Contact = ({ color }) => {
  return (
    <Center id="contact" minH="50vh" color="#fff" flexDirection="column">
      <Title index={4} text="Contact" color={color} />
      <Text fontSize="xl" maxW="80%" textAlign="center">
        Don&apos;t hesitate to drop me a message, I&apos;ll try my best to get back to you!
      </Text>
      <Link
        href="mailto: krouspyy@gmail.com"
        isExternal
        textDecor="none"
        _hover={{ textDecoration: 'none' }}
      >
        <Button
          variant="outline"
          color={color}
          borderColor={color}
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
