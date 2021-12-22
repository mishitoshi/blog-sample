import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { Box, Center, Container, Heading, VStack } from '@chakra-ui/react';

interface LayoutProps extends PageProps {
  title: string | undefined | null;
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = '/';
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <Heading>
        <Link to="/">{title}</Link>
      </Heading>
    );
  } else {
    header = (
      <Link to="/">
        {title}
      </Link>
    );
  }

  return (
    <Container centerContent={true} minH="100vh" w="100vw" data-is-root-path={isRootPath}>
      <Center w={'100%'}>{header}</Center>
      <VStack w={'100%'}>{children}</VStack>
      <footer>
        © {new Date().getFullYear()} @mishitoshi
        {' '}
        All Rights Reserved
      </footer>
    </Container>
  );
};

export default Layout;
