import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';

import Bio from '../components/modules/bio';
import Layout from '../components/modules/layout';
import Seo from '../components/modules/seo';

import { IndexQuery } from '../types/graphql-types';
import { ListItem, UnorderedList, Heading } from '@chakra-ui/react';

const BlogIndex = ({ data, location }: PageProps<IndexQuery>) => {
  const siteTitle = data.site?.siteMetadata?.title || 'Title';
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
        <Layout location={location} title={siteTitle}>
          <Seo title="All posts"/>
          <Bio/>
          <p>
            No blog posts found. Add markdown posts to &apos;content/blog&apos; (or the
            directory you specified for the &apos;gatsby-source-filesystem&apos; plugin in
            gatsby-config.js).
          </p>
        </Layout>
    );
  }

  return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts"/>
        <Bio/>
        <UnorderedList style={{ listStyle: 'none' }}>
          {posts.map(post => {
            const title = post.frontmatter?.title || post.fields?.slug;

            return (
                <ListItem key={post.fields?.slug}>
                  <article
                      itemScope
                      itemType="http://schema.org/Article"
                  >
                    <Heading as='h2' size={'lg'}>
                        <Link to={post.fields?.slug} itemProp="url" itemProp="headline">
                          {title}
                        </Link>
                    </Heading>
                    <small>{post.frontmatter?.date}</small>
                    <section>
                      <p
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter?.description || post.excerpt,
                          }}
                          itemProp="description"
                      />
                    </section>
                  </article>
                </ListItem>
            );
          })}
        </UnorderedList>
      </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          description
        }
      }
    }
  }
`;
