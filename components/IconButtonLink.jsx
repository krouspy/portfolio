import { Link, IconButton } from '@chakra-ui/react';

export const IconButtonLink = ({ href, color, ...rest }) => {
  const iconSize = 22;
  return (
    <Link href={href} isExternal>
      <IconButton
        colorScheme="whiteAlpha"
        fontSize={iconSize}
        bg="transparent"
        mb="1"
        _hover={{ bg: 'transparent', color: color }}
        {...rest}
      />
    </Link>
  );
};
