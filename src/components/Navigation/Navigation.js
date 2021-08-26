import React from 'react';
import { Link } from 'gatsby';
import { NavigationWrapper } from './Navigation.styles';

const Navigation = ({ menu }) => (//Implicit return due to () after =>

  <NavigationWrapper>
    <ul>
      {menu.map(mainItem => !mainItem.parentId ? (//If the parentId of the mainItem is null then it is not a child rather it is a parent.
        <li key={mainItem.id}>
          <Link to={mainItem.url} activeClassName="nav-active">
            {mainItem.label}
            {/* If the menu has submen then show the inverted ^ to show that the user can click it for submenu items. */}
            {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
          </Link>
          {/* If the menu has subitems then show them in a submenu. */}
          {mainItem.childItems.nodes.length !== 0 ? (
            <ul>
              {
                mainItem.childItems.nodes.map(childItem => (
                  <li key={childItem.id}>
                    <Link to={childItem.url} activeClassName="nav-active">
                      {childItem.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          ) : null}
        </li>
      ) : null)}
    </ul>
  </NavigationWrapper>
);

export default Navigation;