import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
// import { useGlobalContext } from '../Context/context';

const url = 'https://api.quotable.io/random';

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  const fetchQuotes = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      if (data) {
        setQuote({ ...data });
        setLoading(false);
        return quote;
      } else {
        console.log('error');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Wrapper>
      <section>
        <h1>{quote.author}</h1>
        <h1>{quote.content}</h1>
        <h2>{quote.authorSlug}</h2>
      </section>
    </Wrapper>
  );
};

export default Quote;

const Wrapper = styled.section`
  section {
    background-color: rgba(251, 86, 48, 0.8);
    min-width: 90%;
    min-height: 110vh;
  }
`;
