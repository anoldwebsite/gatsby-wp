import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/logo.svg';
import { useMenuQuery } from '../../hooks/useMenuQuery';
import Navigation from '../Navigation/Navigation';
import { Content, Wrapper } from './Header.styles';

const Header = () => {
  //const data = useMenuQuery(); console.log(data); //This tells us that we have site and menu which we can directly destructure.
  const { site, wpMenu } = useMenuQuery();
  //console.log(site); //console.log(wpMenu); //console.log(wpMenu.menuItems.nodes);
  return (
    <Wrapper>
      <Content>
        <Link to="/"><img src={Logo} alt={site.siteMetadata.title} /></Link>
        <Navigation menu={wpMenu.menuItems.nodes} />{/* Check the file useMenuQuery.js graphql query to know what we are passing as props or console.log(wpMenu). */}
      </Content>
    </Wrapper>
  )
};

export default Header;