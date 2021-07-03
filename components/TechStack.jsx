import Image from 'next/image';
import { Stack, Grid, HStack, Box, Center, Text, Icon } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { SiNextDotJs, SiTypescript, SiMongodb, SiNodeDotJs } from 'react-icons/si';

export const TechStack = () => {
  const color = '#1A202C';
  return (
    <Stack w="50%" h="70vh" direction="column">
      <Box p="5" shadow="md" width="50%" color="white">
        <Center>
          <Text fontSize="4xl">Tech Stack</Text>
        </Center>
        <Center mb="6">
          <Text fontSize="xl">
            A list of my favorite tools and technologies that I use on a regular basis.
          </Text>
        </Center>
        <Grid templateColumns="repeat(3, 3fr)" gap={5}>
          {technologies.map(({ id, label, icon, description }) => (
            <HStack key={id} w="100%" h="20" bg={color} px="4" borderRadius="10px">
              <Center w="12" h="12" bg={icon.backgroundColor} borderRadius="10px">
                {icon.value}
              </Center>
              <Box>
                <Text>{label}</Text>
                <Text fontSize="sm">{description}</Text>
              </Box>
            </HStack>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

const technologies = [
  {
    id: 0,
    label: 'React',
    icon: {
      value: <Icon as={FaReact} color="#7BD0DF" boxSize={8} />,
      backgroundColor: '#354F5C',
    },
    description: 'Web development',
    category: 'web',
  },
  {
    id: 1,
    label: 'Nextjs',
    icon: {
      value: <Icon as={SiNextDotJs} boxSize={8} />,
      backgroundColor: '#354F5C',
    },
    description: 'Web development',
    category: 'web',
  },
  {
    id: 2,
    label: 'Typescript',
    icon: {
      value: <Icon as={SiTypescript} color="#3B86D8" boxSize={6} />,
      backgroundColor: '#354F5C',
    },
    description: 'Programming Language',
    category: 'web',
  },
  {
    id: 3,
    label: 'Solidity',
    icon: {
      value: <Image src="/solidity.svg" alt="solidity" width={128} height={128} />,
      backgroundColor: '#354F5C',
    },
    description: 'Smart Contract',
    category: 'smart-contract',
  },
  {
    id: 4,
    label: 'Hardhat',
    icon: {
      value: <Image src="/hardhat.svg" alt="hardhat" width={32} height={32} />,
      backgroundColor: '#354F5C',
    },
    description: 'Smart Contract',
    category: 'smart-contract',
  },
  {
    id: 5,
    label: 'Truffle',
    icon: {
      value: <Image src="/truffle.svg" alt="truffle" width={32} height={32} />,
      backgroundColor: '#354F5C',
    },
    description: 'Smart Contract',
    category: 'smart-contract',
  },
  {
    id: 6,
    label: 'Nodejs',
    icon: {
      value: <Icon as={SiNodeDotJs} color="#699E63" boxSize={6} />,
      backgroundColor: '#354F5C',
    },
    description: 'Server',
    category: 'web',
  },
  {
    id: 7,
    label: 'Express',
    icon: {
      value: <Image src="/expressjs.svg" alt="express" width={32} height={32} />,
      backgroundColor: '#354F5C',
    },
    description: 'Server',
    category: 'web',
  },
  {
    id: 8,
    label: 'Mongo',
    icon: {
      value: <Icon as={SiMongodb} color="#11AB51" boxSize={8} />,
      backgroundColor: '#354F5C',
    },
    description: 'Database',
    category: 'web',
  },
];
