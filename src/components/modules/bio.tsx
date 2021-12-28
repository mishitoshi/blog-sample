/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Flex, Link, VStack, Text } from '@chakra-ui/react';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
      <Flex w={'100%'} justify={'center'}>
        <Box p='6'>
          <StaticImage
              style={{ borderRadius: '50%' }}
              layout="fixed"
              formats={['auto', 'webp', 'avif']}
              src="../../images/profile.jpg"
              width={100}
              height={100}
              quality={95}
              alt="Profile picture"
          />
        </Box>
        <VStack p='6' justify='center'>
          {author?.name && (
              <Box>
                <Text fontWeight='bold' fontSize='lg'>{`@${author.name}`}</Text>
                <Text fontSize='sm' color='gray.700'>{author?.summary || null}</Text>
                <Link href={`https://twitter.com/${social?.twitter || ''}`}>
                  Twitter
                </Link>
              </Box>

          )}
        </VStack>
      </Flex>
  );
};

export default Bio;
