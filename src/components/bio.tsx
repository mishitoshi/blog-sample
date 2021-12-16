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
      <div className="">
        <div className="">
          <StaticImage
              className=""
              layout="fixed"
              formats={['auto', 'webp', 'avif']}
              src="../images/profile.jpg"
              width={75}
              height={75}
              quality={95}
              alt="Profile picture"
          />
        </div>
        <div className="">
          {author?.name && (
              <div>
                <p className="">{author.name}</p>
                <p className="">{author?.summary || null}</p>
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
