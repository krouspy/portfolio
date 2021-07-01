import { Box, Flex, Divider } from '@chakra-ui/react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { IconButtonLink } from './IconButtonLink';

export const LeftSidebar = () => {
  return (
    <Flex pos="fixed" direction="column" h="27%" align="center" bottom="0" left="4%" zIndex="1">
      <Flex flexDirection="column">
        {data.map(({ id, href, ariaLabel, icon }) => (
          <IconButtonLink key={id} href={href} aria-label={ariaLabel} icon={icon} />
        ))}
      </Flex>
      <Box flex="1" h="40%">
        <Divider orientation="vertical" />
      </Box>
    </Flex>
  );
};

const data = [
  {
    id: 0,
    href: 'https://github.com/krouspy',
    ariaLabel: 'github',
    icon: <FiGithub />,
  },
  {
    id: 1,
    href: 'https://twitter.com/Krouspy2',
    ariaLabel: 'twitter',
    icon: <FiTwitter />,
  },
  {
    id: 2,
    href: 'https://linkedin.com/in/kenjilau',
    ariaLabel: 'linkedin',
    icon: <FiLinkedin />,
  },
  {
    id: 3,
    href: 'mailto: krouspyy@gmail.com',
    ariaLabel: 'mail',
    icon: <AiOutlineMail />,
  },
];
