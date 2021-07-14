import { Stack, Grid, Flex, Text, Icon, Spacer, Link } from '@chakra-ui/react';
import { FiFolder, FiGithub } from 'react-icons/fi';
import { Title } from './Title';

export const Projects = ({ color }) => {
  return (
    <Stack id="projects" w={{ base: '80%', lg: 900, xl: 1100 }} minH="50vh" color="#fff" pt="6vh">
      <Title index={3} text="Projects" color={color} w="60%" mb="8" />
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {projects.map(({ id, title, description, github, website, inProgress, technologies }) => (
          <Link
            key={id}
            href={website || github}
            isExternal
            textDecoration="none"
            transition="0.5s ease"
            _hover={{ textDecoration: 'none', mt: '-7px' }}
          >
            <Stack
              bg="#112341"
              w="100%"
              h="300"
              px="4"
              pt="3"
              pb="2"
              direction="column"
              borderRadius="10px"
            >
              <Flex alignItems="center">
                <Icon as={FiFolder} fontSize="xx-large" color={color} />
                <Spacer />
                <Icon as={FiGithub} fontSize="x-large" _hover={{ color: color }} />
              </Flex>
              <Flex direction="column" h="100%" py="3">
                <Flex direction="row" alignItems="center" mb="3">
                  <Text fontSize="xl" fontWeight="bold">
                    {title}
                  </Text>
                  {inProgress && (
                    <>
                      <Spacer />
                      <Text fontSize="sm" color="#77839F">
                        Work in progress
                      </Text>
                    </>
                  )}
                </Flex>
                <Text>{description}</Text>
                <Spacer />
                <Text textAlign="right" color="#77839F">
                  {technologies.join(' - ')}
                </Text>
              </Flex>
            </Stack>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
};

const projects = [
  {
    id: 0,
    title: 'Portfolio',
    description: 'First version of my personal website built with Next.js and hosted on Vercel',
    inProgress: false,
    github: 'https://github.com/krouspy/portfolio',
    technologies: ['Next.js', 'Vercel', 'Chakra UI'],
  },
  {
    id: 1,
    title: 'Loom',
    description: 'Collaborative platform to organize roadtrips. Currently exploring Firebase',
    inProgress: true,
    github: 'https://github.com/krouspy/loom',
    technologies: ['Next.js', 'Firebase', 'Chakra UI'],
  },
  {
    id: 2,
    title: 'Lunary',
    description: 'NFT marketplace built on The Graph, similar to OpenSea',
    inProgress: true,
    github: 'https://github.com/krouspy/lunary',
    technologies: ['The Graph', 'React', 'Solidity'],
  },
  {
    id: 3,
    title: 'Monnaies Numeriques',
    description:
      'Some blockchain courses I had at my engineering school. It goes from receiving bitcoin payments through the lightning network to writing smart contracts on Ethereum',
    inProgress: false,
    github: 'https://github.com/krouspy/monnaies-numeriques',
    technologies: ['Bitcoin', 'Ethereum'],
  },
  {
    id: 4,
    title: 'Ethereum - Selfish Mining',
    description: 'Website that explains how selfish mining on Ethereum works and its impact',
    inProgress: false,
    github: 'https://github.com/krouspy/selfish-mining',
    website: 'https://krouspy.selfish-mining.com/',
    technologies: ['Ethereum', 'React', 'Netlify'],
  },
  {
    id: 5,
    title: 'CLightning',
    description:
      'Documentation explaining how to write a plugin in python for the Clightning client',
    inProgress: false,
    github: 'https://github.com/krouspy/clightning-plugin',
    technologies: ['Lightning', 'Python'],
  },
];
