import React from 'react';
import { Link } from 'gatsby';

import {useMenuQuery} from '../../hooks/useMenuQuery';

import {Overlay} from './OverlayMenu.styles';

import InvertedLogo from '../../images/logo-inverted.svg';
import CloseButton from '../../images/close_btn.svg';

const OverlayMenu = ({menuOpen, callback}) => {

  const {wpMenu} = useMenuQuery();

  return(
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img className="invertedLogo" src={InvertedLogo} alt="Our website inside the mobile menu" />
        {/* Menu items  */}
        <ul className="overlayMenu">
          {wpMenu.menuItems.nodes.map(item => (
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">{item.label}</Link>
              </li>
            ) : null
          ))}
        </ul>
        {/* Close Button for closing the mobile menu  */}
        <div className="closeButton" onClick={callback} role="button" tabIndex="0">
          <img src={CloseButton} alt="Close Button for the mobile menu of the website" />
        </div>
      </div>
    </Overlay>
  )
};

export default OverlayMenu;