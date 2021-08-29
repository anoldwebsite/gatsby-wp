import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import {useLatestBlogPost} from '../../hooks/useLatestBlogPost';
import {Wrapper} from './LatesBlogPost.styles';

const LatestBlogPost = () => {

  const data = useLatestBlogPost();
  //console.log(data);

  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      <h4>{data.allWpPost.edges[0].node.title}</h4>
      {parse(`<p>${data.allWpPost.edges[0].node.excerpt}</p>`)}
      <Link to="{`/blog${data.allWpPost.edges[0].node.uri}`}">
        <h5>Read More</h5>
      </Link>
    </Wrapper>
  )
};

export default LatestBlogPost;