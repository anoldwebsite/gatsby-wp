
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout/Layout';
import PageHero from '../components/PageHero/PageHero';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import PageSidebar from '../components/PageSidebar/PageSideBar';

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const PageContent = styled.article`
  margin-top: 20px;
`;

const PageTemplate = ({ data }) => {

  const imageData = getImage(data.wpPage.featuredImage.node.localFile.childrenImageSharp[0]);
  const myParent = data.wpPage.wpParent;
  const myParentTitle = myParent ? myParent.node.title : null;
  const siblings = myParent ? myParent.node.wpChildren.nodes : null;

  return (
    <Layout>
      {/*console.log(data)*/}
      {/*data.wpPage.featuredImage ? (<PageHero img={data.wpPage.featuredImage.node.localFile.childrenImageSharp[0].gatsbyImageData} />) : null */}
      {data.wpPage.featuredImage ? (<PageHero img={imageData} />) : null}

      <Wrapper>
        <BreadCrumb parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />
        <ContentWrapper>
          <PageSidebar
            parentChildren={myParent && siblings}
            currentPage={data.wpPage}
            parent={myParent && myParent.node}
            parentTitle={myParent && myParentTitle}
          >
            {data.wpPage.wpChildren}
          </PageSidebar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
};

export default PageTemplate;

export const PageQuery = graphql`
  query($id: String!) {
  wpPage(id: { eq: $id }) {
    id
    title
    content
    status
    featuredImage {
      node {
        id
        localFile {
          childrenImageSharp {
            gatsbyImageData(width: 1920, layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
    wpChildren {
      nodes {
        ... on WpPage {
          id
          uri
          title
        }
      }
    }
    wpParent {
      node {
        ... on WpPage {
          id
          uri
          title
          wpChildren {
            nodes {
              ... on WpPage {
                id
                title
                uri
              }
            }
          }
        }
      }
    }
  }
}
`