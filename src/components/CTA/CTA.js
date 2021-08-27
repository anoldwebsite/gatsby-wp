import React from 'react';
import { Link } from 'gatsby';
import { StyledImg, CTAImage, CTAImageText, CTAImageTextWrapper} from './CTA.styles';

const CTA = ({ image, link, text }) => {

  return (
    <CTAImage>
      <StyledImg image={image} alt="Call To Action Image" />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
};

export default CTA;