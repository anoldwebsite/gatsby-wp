import React from 'react';
import parse from 'html-react-parser';
import { useAboutQuery } from '../../hooks/useAboutQuery';

import {AboutImage, AboutWrapper} from './About.styles';

const About = () => {
  const data = useAboutQuery();
  console.log(data);
  const imageData = data.wpPage.featuredImage.node.localFile.publicURL;
  return (
    <AboutWrapper>
      <AboutImage image={imageData} />
      <div className="about-text">
        {parse(`<div>${data.wpPage.content}</div>`)}
      </div>
    </AboutWrapper>
  )
};

export default About;