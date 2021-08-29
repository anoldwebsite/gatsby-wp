import React from 'react';
import { useQuoteQuery } from '../../hooks/useQuoteQuery';
import QuoteImg from '../../images/quote.svg';
import { Wrapper, Content } from './Quote.styles';

const Quote = () => {

  const data = useQuoteQuery();
  //console.log(data);
  const quotation = data.wpPage.ACF_HomePage.citat1Text;
  const author = data.wpPage.ACF_HomePage.citat1Author;

  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="Quotation Signs" />
        <h6>{quotation}</h6>
        <p>{author}</p>
      </Content>
    </Wrapper>
  )
};

export default Quote;