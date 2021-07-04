import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
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

  return (
    <Box
      pos="fixed"
      w="100%"
      maxW="100%"
      top={state.visible ? 0 : -60}
      transition="top 0.3s"
      zIndex={2}
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

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image src="/logo.svg" alt="logo" width="48" height="48" />
        </Flex>

        <Stack>
          <DesktopNav />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const orange = '#EDBC41';
  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      {NAV_ITEMS.map(({ id, text, href }) => {
        const index = `0${id}. `;
        return (
          <Box key={id} whiteSpace="nowrap">
            <Text p={2} color={orange} display="inline-block">
              {index}
            </Text>
            <CustomLink href={href} isExternal={false} color="#fff" fontSize="md">
              {text}
            </CustomLink>
          </Box>
        );
      })}
      <Button color={orange} borderColor={orange} variant="outline">
        Resume
      </Button>
    </Stack>
  );
};

const MobileNav = () => (
  <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
    {NAV_ITEMS.map(({ text, ...rest }) => (
      <MobileNavItem key={text} {...rest} />
    ))}
  </Stack>
);

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
