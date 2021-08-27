import React from 'react';
import { useCTAAreaQuery } from '../../hooks/useCTAAreaQuery';
import { Wrapper } from './CTAArea.styles';
import CTA from '../CTA/CTA';

const CTAArea = () => {

  const { cta } = useCTAAreaQuery();
  //console.log(cta);
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