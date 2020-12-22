import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../logo.svg';
import Title from './title';

const StyledLogo = styled(Logo)`
  width: 5rem;
  height: 5rem;
  display: block;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const StyledHeader = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  width: 100%;
  background-color: #fffd82;
  color: black;
  box-shadow: 0px 5px rgba(0, 0, 0, 0.25);
`;

const LogoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <LogoContainer>
        <Title
          css={`
            grid-column-start: 2;
            margin-bottom: 0.25rem;
          `}
        >
          Climate Article Analysis
        </Title>
        <StyledLogo title="Earth" />
      </LogoContainer>
      <section
        css={`
          margin-left: auto;
          margin-right: auto;
          max-width: 70vw;
        `}
      >
        I collected and analyzed <em>(using various NLP methods)</em> more than
        16 000 articles about climate change and global warming from November
        2019 to August 2020.
        <wbr /> On this page, you can view some of the results.
      </section>
    </StyledHeader>
  );
};

export default Header;
