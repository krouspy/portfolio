import { Link, IconButton } from '@chakra-ui/react';

export const IconButtonLink = ({ href, ...rest }) => {
  const iconSize = 22;
  const orange = '#EDBC41';
  return (
    <Link href={href} isExternal>
      <IconButton
        colorScheme="whiteAlpha"
        fontSize={iconSize}
        bg="transparent"
        mb="1"
        _hover={{ bg: 'transparent', color: orange }}
        {...rest}
      />
    </Link>
  );
};
