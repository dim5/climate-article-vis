import styled from 'styled-components/macro';

const Title = styled.h1`
  display: block;
  text-align: center;
  padding: 0.25rem;
  font-size: 1.875rem;
  line-height: 1.1;
  text-rendering: optimizeLegibility;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default Title;
