import { useStaticQuery, graphql } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
        query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: {eq: "mainMenu"}) {
        menuItems {
          nodes {
            id
            label
            parentId
            url
            childItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
      }
    }
  `)
  return data;
};