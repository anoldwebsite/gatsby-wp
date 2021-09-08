import React from 'react';
import { Link } from 'gatsby';
import { StyledImg, CTAImage, CTAImageText, CTAImageTextWrapper} from './CTA.styles';

const CTA = ({ image, callToActionLink, text }) => {

  return (
    <CTAImage>
      <StyledImg image={image} alt="Call To Action Image" />
      <Link to={callToActionLink}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
};

export default CTA;