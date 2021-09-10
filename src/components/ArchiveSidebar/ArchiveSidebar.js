import React from 'react';
import { Link } from 'gatsby';
import PageIcon from '../../images/page-icon.svg';
import { Menu, Wrapper } from './ArchiveSidebar.styles';
import parse from 'html-react-parser';

const ArchiveSidebar = ({ catId, categories }) => {
  //categories is an array of categories. We want to sort it so that category "all-posts" is always on top.
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "all-posts") return -1;
    if (y.node.slug === "all-posts") return 1;
    return 0;
  });

  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Folder image for Blog Posts Header" />
          <span>Posts</span>
        </li>
        {sortedCategories.map(cat => {
          if(cat.node.count !== 0){//The category has some posts.
            return cat.node.slug !== "uncategorized" ? (
              <li key={cat.node.id}>
                <span className="count">{cat.node.count}</span> {/* This will show the number of posts in this category to the left side of the name of the category. */}
                <Link to={cat.node.uri} activeClassName="sidebar-highlighted">
                  {parse(`<span>${cat.node.name}</span>`)}
                </Link>
              </li>
            ) : null
          }
          return null;
        })}
      </Menu>
    </Wrapper>
  )
};

export default ArchiveSidebar;