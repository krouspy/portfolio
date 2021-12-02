import { useState } from 'react';
import { Stack, Box, ButtonGroup, Button, Text } from '@chakra-ui/react';
import { BsDot } from 'react-icons/bs';
import { MdPlayArrow } from 'react-icons/md';
import { Title } from './Title';
import { CustomLink } from './CustomLink';

export const Experiences = ({ color }) => {
  const [job, setJob] = useState(jobs[0]);
  const [selected, setSelected] = useState(0);

  const handleClick = (_, buttonId) => {
    setSelected(buttonId);
    setJob(jobs[buttonId]);
  };

  const getColor = buttonId => {
    return selected === buttonId ? '#fff' : 'transparent';
  };

  return (
    <Stack id="jobs" w={{ base: '80%', lg: '90%', xl: '60%' }} minH="50vh" mb="20" pt="6vh">
      <Box w="70%" ml="10%">
        <Title index={2} text="Where I've worked" color={color} />
        <Stack color="white" direction={{ base: 'column', md: 'row' }} spacing={10}>
          <ButtonGroup
            height="100%"
            variant="ghost"
            isAttached
            flexDirection="column"
            borderLeft="1px"
            _groupHover={{ bg: 'transparent' }}
          >
            <Button
              onClick={e => handleClick(e, 0)}
              leftIcon={<BsDot color={getColor(0)} />}
              justifyContent="left"
              _hover={{ backgroundColor: 'transparent' }}
              _focus={{ boxShadow: 'none', backgroundColor: 'transparent' }}
            >
              Wakam
            </Button>
            <Button
              onClick={e => handleClick(e, 1)}
              leftIcon={<BsDot color={getColor(1)} />}
              justifyContent="left"
              _hover={{ backgroundColor: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
            >
              Sopra Banking
            </Button>
          </ButtonGroup>
          <Box w="100%">
            <Stack>
              <Text fontSize="lg">
                {job.title + ' '} <span style={{ color: color }}>@</span>
                <CustomLink href={job.company.href} color={color}>
                  {job.company.name}
                </CustomLink>
              </Text>
              <Text color="#818BA9">{job.timeframe}</Text>
              {job.description.map(({ id, content }) => (
                <Stack key={id} direction="row" align="top" mt="2">
                  <Box mt="1.5" align="top">
                    <MdPlayArrow size="0.7em" />
                  </Box>
                  <Text>{content}</Text>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

const jobs = [
  {
    id: 0,
    title: 'Blockchain Developer',
    company: {
      name: 'Wakam',
      href: 'https://www.wakam.com/en/',
    },
    timeframe: 'October 2019 - August 2021',
    description: [
      {
        id: 0,
        content: 'Build internal tools around our Quorum blockchain',
      },
      {
        id: 1,
        content: 'Write smart contracts based on ERC20, ERC721 and ERC1155 standards',
      },
      {
        id: 2,
        content:
          'Work with a variety of languages, platforms and frameworks such as Solidity, React, Node.js, Typescript, Azure, C# and Docker',
      },
      {
        id: 3,
        content:
          'Explore the Tezos blockchain features such as Ligo language and FA1.2 and FA2 standards',
      },
    ],
  },
  {
    id: 1,
    title: 'Full-Stack Developer',
    company: {
      name: 'SopraBankingSoftware',
      href: 'https://www.soprabanking.com/',
    },
    timeframe: 'October 2020 - January 2021',
    description: [
      {
        id: 0,
        content: 'Developed a collocation platform on a private blockchain Hyperledger Besu',
      },
      {
        id: 1,
        content:
          'Designed the architecture and wrote our back-end in Node.js, Express, Mongoose and Solidity',
      },
      {
        id: 2,
        content:
          'Explored tools to monitor blockchain events such as Eventeum and the ELK stack (Elasticsearch, Logstach, Kibana)',
      },
    ],
  },
];
