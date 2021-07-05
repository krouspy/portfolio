import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Flex, Text, IconButton, Button, Stack, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { CustomLink } from './CustomLink';

const NAV_ITEMS = [
  {
    id: 1,
    text: 'About',
    href: '#about',
  },
  {
    id: 2,
    text: 'Experiences',
    href: '#jobs',
  },
  {
    id: 3,
    text: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    text: 'Contact',
    href: '#contact',
  },
];

export const Navbar = () => {
  const [state, setState] = useState({ previousScrollPosition: 0, visible: true });
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    setState({ previousScrollPosition: scrollY, visible: true });
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setState(prevState => ({
      previousScrollPosition: window.scrollY,
      visible: prevState.previousScrollPosition > window.scrollY,
    }));
  };

  const orange = '#EDBC41';

  return (
    <Box
      pos="fixed"
      w="100%"
      maxW="100%"
      top={state.visible ? 0 : -60}
      transition="top 0.3s ease"
      zIndex={2}
      px="2%"
    >
      <Flex py={{ base: 2 }} px={{ base: 4 }} align="center">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width="48" height="48" />
          </Link>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
          {NAV_ITEMS.map(({ id, text, href }) => {
            const index = `0${id}. `;
            return (
              <Box key={id} whiteSpace="nowrap" display={{ base: 'none', md: 'inline-block' }}>
                <Text p={2} color={orange} display="inline-block">
                  {index}
                </Text>
                <CustomLink href={href} isExternal={false} color="#fff" fontSize="md">
                  {text}
                </CustomLink>
              </Box>
            );
          })}
          <Button
            as="a"
            href="/Resume.pdf"
            target="_blank"
            color={orange}
            borderColor={orange}
            variant="outline"
            _hover={{ bg: 'transparent' }}
          >
            Resume
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
