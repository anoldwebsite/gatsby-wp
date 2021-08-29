import { useStaticQuery, graphql } from "gatsby";

export const useQuoteQuery = () => {
  const data = useStaticQuery(graphql`
    query QuotationQuery {
      wpPage(databaseId: {eq: 47}) {
        ACF_HomePage {
          citat1Author
          citat1Text
        }
      }
    }
  `)

  return data;
}

