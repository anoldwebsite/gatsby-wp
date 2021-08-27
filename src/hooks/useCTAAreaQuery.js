import { useStaticQuery, graphql } from "gatsby";

{/* We have rename the wpPage to cta in the graphql query below. cta: wpPage */ }
export const useCTAAreaQuery = () => {

  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED, width: 720)
              }
            }
    }
    query CTAQuery {
      cta: wpPage(databaseId: {eq: 47}) {
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
        }
      }
    }

    `)

    return data;
};

