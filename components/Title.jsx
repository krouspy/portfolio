import { Flex, Heading, Divider } from '@chakra-ui/react';

export const Title = ({ index, text, color, noDivider, ...rest }) => {
  const id = `0${index}. `;
  return (
    <Flex flexDirection="row" align="center" mb="5" {...rest}>
      <Heading as="h3" size="lg" color="white" whiteSpace="nowrap" mr="5">
        <span style={{ color: color, fontSize: '0.8em' }}>{id}</span>
        {text}
      </Heading>
      {!noDivider && <Divider />}
    </Flex>
  );
};
