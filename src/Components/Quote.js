import React from 'react';
import styled from 'styled-components';

const Quote = () => {
  return (
    <Wrapper>
      <section>
        <h1>Insert Quote Here</h1>
      </section>
    </Wrapper>
  );
};

export default Quote;

const Wrapper = styled.section`
  section {
    background-color: rgba(251, 86, 48, 0.8);
  }
`;
