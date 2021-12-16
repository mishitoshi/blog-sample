import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';

interface LayoutProps extends PageProps {
  title: string | undefined | null;
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <Container centerContent={true} minH="100vh" w="100vw" data-is-root-path={isRootPath}>
      <Box className="global-header">{header}</Box>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} @mishitoshi
        {' '}
        All Rights Reserved
      </footer>
    </Container>
  );
};

export default Layout;
