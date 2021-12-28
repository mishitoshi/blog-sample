import * as React from 'react';
import { PageProps } from 'gatsby';
import { Center, Container, VStack } from '@chakra-ui/react';
import Header from '../blocks/header';

interface LayoutProps extends PageProps {
  title: string | undefined | null;
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = '/';
  const isRootPath = location.pathname === rootPath;

  return (
    <Container centerContent={true} minH="100vh" w="100vw" data-is-root-path={isRootPath}>
      <Center w={'100%'}>
        <Header title={title} />
      </Center>
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
