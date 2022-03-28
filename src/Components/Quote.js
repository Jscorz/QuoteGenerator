import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { BiRightArrowCircle } from 'react-icons/bi';

const url = 'https://api.quotable.io/random';

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  const handleSubmit = () => {
    fetchQuotes();
  };

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
        <article className='card'>
          <div className='card_container'>
            <h1>Random Quote Generator</h1>
            <h2>{quote.author}</h2>
            <p>"{quote.content}"</p>
            <div className='btn-container'>
              <button type='button' onClick={handleSubmit}>
                next quote{' '}
                <span>
                  <BiRightArrowCircle />
                </span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Quote;

const Wrapper = styled.section`
  section {
    background-color: #eeedde;

    min-width: 90%;
    min-height: 110vh;

    display: flex;
    justify-content: center;
    align-items: start;
  }

  .card {
    width: 40%;
    min-height: 60vh;
    padding: 2rem;

    display: flex;

    justify-content: center;
    align-items: space-between;
    flex-direction: column;
    border: 1px solid #203239;
    &_container {
      min-width: 100%;
      border: 1px solid red;
      padding: 2rem;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.8rem;
  }
`;
