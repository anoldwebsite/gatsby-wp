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
/*
There is a line in the code above:       wpMenu(name: {eq: "mainMenu"}) {
  The wpMenu means word press menu. You can rename it to menu, for example, if you want to, writing it as follows:
      menu:  wpMenu(name: {eq: "mainMenu"}) {
*/