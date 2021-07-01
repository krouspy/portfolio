import Image from 'next/image';
import { Box, Flex, HStack, Center, Heading, Text, Divider, Link } from '@chakra-ui/react';

const CustomLink = ({ href, children, ...rest }) => {
  const orange = '#EDBC41';
  return (
    <Link
      className="link"
      href={href}
      color={orange}
      isExternal
      style={{ textDecoration: 'none' }}
      {...rest}
    >
      {children}
    </Link>
  );
};

export const About = () => {
  const orange = '#EDBC41';
  return (
    <HStack id="about" w="50%" mb="20">
      <Box w="60%">
        <Flex flexDirection="row" align="center" mb="5">
          <Heading as="h3" size="lg" color="white" whiteSpace="nowrap" mr="5">
            <span style={{ color: orange }}>01. </span>About Me
          </Heading>
          <Divider />
        </Flex>
        <Box color="white">
          <Text fontSize="lg" mb="5">
            Hello! My name is Kenji and I&apos;m from Tahiti, French Polynesia. Currently, I&apos;m
            completing my{' '}
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
          <Text fontSize="lg">
            Fast-forward to today, I had the opportunity to work at an{' '}
            <CustomLink href="https://www.wakam.com/en/">Insurance company</CustomLink> and
            collaborate on a student project with a{' '}
            <CustomLink href="https://www.soprabanking.com/">Banking company</CustomLink>.
          </Text>
        </Box>
      </Box>
    </HStack>
  );
};
