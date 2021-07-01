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
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

const NAV_ITEMS = [
  {
    id: 1,
    text: 'About',
    href: '#about',
  },
  {
    id: 2,
    text: 'Experiences',
  },
  {
    id: 3,
    text: 'Work',
    href: '#',
  },
  {
    id: 4,
    text: 'Contact',
    href: '#',
  },
];

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box h="6vh">
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
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('white', 'white')}
          >
            Logo
          </Text>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row">
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
    <Stack display="flex" direction="row" alignItems="center" spacing={4}>
      {NAV_ITEMS.map(({ id, text, href }) => {
        const index = `0${id}. `;
        return (
          <Box key={id}>
            <Link
              p={2}
              href={href}
              fontSize="md"
              color={orange}
              style={{ whiteSpace: 'nowrap' }}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <span>{index}</span>
              <Text
                display="inline-block"
                color="white"
                _hover={{
                  textDecoration: 'none',
                  color: orange,
                  transition: '0.4s',
                }}
              >
                {text}
              </Text>
            </Link>
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
