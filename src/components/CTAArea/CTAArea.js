import React from 'react';
//import { getImage } from 'gatsby-plugin-image';
import { useCTAAreaQuery } from '../../hooks/useCTAAreaQuery';
import { Wrapper } from './CTAArea.styles';
import CTA from '../CTA/CTA';

const CTAArea = () => {

  const { cta } = useCTAAreaQuery();
  //console.log(cta);
  /*
  const imageData1 = getImage(cta.ACF_HomePage.cta1Image.localFile); 
  const text1 = cta.ACF_HomePage.cta1Text; 
  const link1 = cta.ACF_HomePage.cta1Link;
  const imageData2 = getImage(cta.ACF_HomePage.cta2Image.localFile); 
  const text2 = cta.ACF_HomePage.cta2Text; 
  const link2 = cta.ACF_HomePage.cta2Link;
  const imageData3 = getImage(cta.ACF_HomePage.cta3Image.localFile); 
  const text3 = cta.ACF_HomePage.cta3Text; 
  const link3 = cta.ACF_HomePage.cta3Link;
  <Wrapper>
    <CTA key="cta1" image={imageData1} link={link1} text={text1} />
    <CTA key="cta2" image={imageData2} link={link2} text={text2} />
    <CTA key="cta3" image={imageData3} link={link3} text={text3} />
  </Wrapper>
  */
  return (
    <Wrapper>
      {
        //We have three images CT1Image, CT2Image and CT3Image. So, we create an array of 3 elements.
        new Array(3).fill("").map((element, i) => (
          <CTA
            key={i}//0, 1, 2 because the length of the array is 3 and array index starts from 0.
            image={cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData} //cta1Image, cta2Image, cta3Image
            link={cta.ACF_HomePage[`cta${i + 1}Link`]} //cta1Link, cta2Link, cta3Link
            text={cta.ACF_HomePage[`cta${i + 1}Text`]} //cta1Text, cta2Text, cta3Text
          />
        ))
      }
    </Wrapper>
  )
};

export default CTAArea;