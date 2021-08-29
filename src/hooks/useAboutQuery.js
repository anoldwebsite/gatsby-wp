import { useStaticQuery, graphql } from "gatsby";

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query queryForAboutPage {
      wpPage(databaseId: {eq: 47}) {
        content
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  return data;
}