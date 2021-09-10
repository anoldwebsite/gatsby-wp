import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import parse from 'html-react-parser';

import ArchiveSidebar from '../components/ArchiveSidebar/ArchiveSidebar';
import Pagination from '../components/Pagination/Pagination';
import Layout from '../components/Layout/Layout';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';

import { Wrapper, ContentWrapper, PageContent, StyledH2, StyledDate, StyledReadMore } from './archive.styles';


const archiveTemplate = (props) => {
  const { data: { allWpPost } } = props;//Destructuring data from props and then destructuring allWpPost from data.
  const { pageContext: { catId, catName, catUri, categories, numPages, currentPage, limit, skip } } = props;

  return (
    <Layout>
      {/*console.log(allWpPost)*/}
      <StaticImage
        src="../images/archive_headerimage.png"
        placeholder="TRACED_SVG"
        width={1920}
        height={300}
        alt="Archive Hero image"
      />
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/blog/all-posts",
            title: "blog"
          }}
        />
        <ContentWrapper>
          <ArchiveSidebar catId={catId} categories={categories.edges} />
          <PageContent>
            {parse(`<h1>${catName}</h1>`)}
            {allWpPost.edges.map(post => (
              <article key={post.node.id} className="entry-content">
                <Link to={`/blog${post.node.uri}`}>
                  <StyledH2>
                    {parse(`${post.node.title}`)}
                  </StyledH2>
                </Link>
                <StyledDate>
                  {parse(`${post.node.date}`)}
                </StyledDate>
                {parse(`<p>${post.node.excerpt}</p>`)}
                <StyledReadMore to={`/blog${post.node.uri}`}>Read More</StyledReadMore>
                <div className="dot-divider" />
              </article>
            ))}
            <Pagination catUri={catUri} page={currentPage} totalPages={numPages} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default archiveTemplate;

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`