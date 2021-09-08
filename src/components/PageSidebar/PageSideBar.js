import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import PageIcon from '../../images/page-icon.svg';
import { Menu, Wrapper } from './PageSidebar.styles';

const PageSidebar = ({ children, parentChildren, currentPage, parent, parentTitle }) => {
  const getParentContent = () => (
    //If we are on a page that has children, this function will be called which will show the menu with links to its children page(s) in the sidebar.
    <>
      <li className="sidebar-menu-header">
        <img src={PageIcon} alt="Image of a folder on BakeIt Page" />
        {parse(`<span>${currentPage.title}</span>`)}
      </li>
      {
        children.nodes.map(child => (
          <li key={child.id}>
            <Link to={child.uri}>
              {parse(`<span>${child.title}</span>`)}
            </Link>
          </li>
        ))
      }
    </>
  );
  const getChildContent = () => {
    //If we are on a page that has a parent, this function will be called which will show the menu with links to its parent page in the sidebar.
    return (
      <>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Image of a folder icon on a BakeIt Page" />
          <Link to={parent.uri}>
            {parse(`<span>${parentTitle}</span>`)}
          </Link>
        </li>
        {
          parentChildren.map(child => (
            <li key={child.id}>
              <Link to={child.uri} activeClassName='sidebar-highlighted'>
                {parse(`${child.title}`)}
              </Link>
            </li>
          ))
        }
      </>
    )
  };
  return (
    <Wrapper>
      {children.nodes.length === 0 && !parent ? (<SidebarMessage />) : (
        <Menu>
          {parent ? getChildContent() : getParentContent()}
        </Menu>
      )}
    </Wrapper>
  )
};

export default PageSidebar;