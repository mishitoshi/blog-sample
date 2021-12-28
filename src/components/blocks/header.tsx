import React from 'react';
import {
  Stack,
  Heading,
  Flex,
  Text,
  Link,
  FlexProps } from '@chakra-ui/react';

type HeaderProps = {
  title: string | undefined | null;
  props: FlexProps;
};

const Header = ({ props, title }: HeaderProps) => {
  return (
      <Flex
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
          w="100%"
          padding={6}
          color="black"
          {...props}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Link to="/">{title}</Link>
          </Heading>
        </Flex>

        <Stack
            direction={{ base: 'row' }}
            display={{ base: 'block' }}
            width={'auto'}
            alignItems="center"
            textAlign="right"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
        >
          <Text>Tags</Text>
        </Stack>
      </Flex>
  );
};

export default Header;
