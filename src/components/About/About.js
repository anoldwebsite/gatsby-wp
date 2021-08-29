import React from 'react';
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
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} /> {/* To avoid using the dnagerouslySetInnerHTML use parse() as shown in module LatestBlogPost.js */}
      </div>
    </AboutWrapper>
  )
};

export default About;