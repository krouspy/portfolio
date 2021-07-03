import { Link } from '@chakra-ui/react';

export const CustomLink = ({ href, color, children, ...rest }) => {
  return (
    <Link
      className="link"
      href={href}
      color={color}
      isExternal
      style={{ textDecoration: 'none' }}
      {...rest}
    >
      {children}
    </Link>
  );
};
