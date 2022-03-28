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
        <h1>Random Quote Generator</h1>
        <h2>{quote.author}</h2>
        <p>{quote.content}</p>
        <div className='btn-container'>
          <button type='button'>next quote</button>
        </div>
      </section>
    </Wrapper>
  );
};

export default Quote;

const Wrapper = styled.section`
  section {
    background-color: lightgrey;
    min-width: 90%;
    min-height: 110vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
