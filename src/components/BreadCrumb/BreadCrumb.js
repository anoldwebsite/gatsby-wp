import React from 'react';
import { Link } from 'gatsby';
import parse from 'html-react-parser';
import { Wrapper } from './BreadCrumb.styles';

const BreadCrumb = ({ parent }) => {

  return (
    <Wrapper>
      {/*console.log(parent)*/}
      <Link to="/">
        <span>Home</span>
      </Link>
      <span className="divider">/</span>
      {parent ? (
        <>
          <Link to={parent.uri}>
            {parse(`<span>${parent.title}</span>`)}
          </Link>
          <span className="divider">/</span>
        </>
      ) : null}
    </Wrapper>
  )

};

export default BreadCrumb;