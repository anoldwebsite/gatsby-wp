import React from 'react';
import {getImage} from 'gatsby-plugin-image';
import { useHeroQuery } from '../../hooks/useHeroQuery';
import {Wrapper, HeaderWrapper, StyledImg} from './Hero.styles';

const Hero = () => {
  //const data = useHeroQuery(); console.log(data);
  const {wpPage : {ACF_HomePage: data}} = useHeroQuery(); //Destructuring wpPage and then from that object destructuring ACF_HomePage and then renaming it as data.
  //console.log(data);
  const imageData = getImage(data.heroImage.localFile);
  //const imageData = data.heroImage.localFile.childImageSharp.getsbyImageData;

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero Image" />
      <HeaderWrapper><h1>{data.heroText}</h1></HeaderWrapper>
    </Wrapper>
  )
};

export default Hero;