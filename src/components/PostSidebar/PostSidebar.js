import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';

import { Menu, Wrapper } from './PostSidebar.styles';

const PostSidebar = (props) => {
  //console.log(props);
  const { date, author, categories } = props;
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-section"><span>{date}</span></li>
        <li className="sidebar-section"><span>{author}</span></li>
        <li className="sidebar-section"><span>Categories</span></li>
        {
          categories.map(cat => cat.slug !== "all-posts" ? (
            <li key={cat.id}>
              <Link to={cat.uri}>
                {parse(`<span>${cat.name}</span>`)}
              </Link>
            </li>
          ) : null)
        }
      </Menu>
    </Wrapper>
  )
};

export default PostSidebar;