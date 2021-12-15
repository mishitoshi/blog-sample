/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
      <div className="flex flex-row h-20">
        <div className="xs:w-1/5 md:w-1/5 flex items-center justify-start h-full pr-4">
          <StaticImage
              className="rounded-full"
              layout="fixed"
              formats={['auto', 'webp', 'avif']}
              src="../images/profile.jpg"
              width={75}
              height={75}
              quality={95}
              alt="Profile picture"
          />
        </div>
        <div className="flex items-center h-full flex-col">
          {author?.name && (
              <div>
                <p className="m-0 font-bold text-lg">{author.name}</p>
                <p className="m-0">{author?.summary || null}</p>
                <a href={`https://twitter.com/${social?.twitter || ''}`}>
                  Twitter
                </a>
              </div>

          )}
        </div>
      </div>
  );
};

export default Bio;
