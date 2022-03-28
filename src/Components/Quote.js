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
            <p>"{quote.content}"</p>
            <h2>-{quote.author}</h2>
            <div className='btn_container'>
              <button type='button' onClick={handleSubmit} className='btn'>
                <BiRightArrowCircle className='icon' />
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
    background-color: #54BAB9;

    min-width: 90%;
    min-height: 110vh;

    display: flex;
    justify-content: center;
    align-items: start;
  }

  .card {
    width: 50%;
    min-height: 60vh;
    padding: 2rem;
    margin: 20vh 0 20vh 0;

    display: flex;
    align-items: center;
    text-align: center;

    justify-content: center;
    align-items: space-between;
    flex-direction: column;
    border: 1px solid #203239;
    background-color: #203239;

@media only screen and (max-width: 800px) {
    margin: 0 auto;
}

    &_container {
      min-width: 100%;
      border: 1px solid #e0ddaa;
      padding: 2rem;
    }
  }

  h1 {
    font-size: 2rem;
    color: #203239be;
  }

  h2 {
    font-size: 1.8rem;
    color rgba(0,0,0,0.3);
  }

  p {
    font-size: 1.8rem;
    color #203239;
  }

  .btn {
    border: none;
    cursor: pointer;
  }

  .btn_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .icon {
    font-size: 3rem;
    color: #54BAB9;
    border: none;
    opacity: .8;
    transition: all .5s;

    &:hover {
        opacity: 1;
        transform: rotate(360deg);
    }


  }
`;
