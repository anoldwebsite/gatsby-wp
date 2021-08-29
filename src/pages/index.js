import * as React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import CTAArea from '../components/CTAArea/CTAArea';
import LatestBlogPost from '../components/LatestBlogPost/LatestBlogPost';
import Quote from '../components/Quote/Quote';
import About from '../components/About/About';

import Seo from "../components/SEO/SEO";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
    <Quote />
    <About />
  </Layout>
);

export default IndexPage
