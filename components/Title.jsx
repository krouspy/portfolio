import { Flex, Heading, Text, Divider } from '@chakra-ui/react';

export const Title = ({ index, text, ...rest }) => {
  const orange = '#EDBC41';
  const id = `0${index}. `;
  return (
    <Flex flexDirection="row" align="center" mb="5" {...rest}>
      <Heading as="h3" size="lg" color="white" whiteSpace="nowrap" mr="5">
        <span style={{ color: orange, fontSize: '0.8em' }}>{id}</span>
        {text}
      </Heading>
      <Divider />
    </Flex>
  );
};
