import styled from 'styled-components/macro';

const StyledFooter = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  width: 100%;
  background-color: #ed217c;
  color: #fff;
  box-shadow: inset 0 5px rgba(0, 0, 0, 0.25);
  & a {
    :hover {
      text-decoration: underline;
    }
    color: #fffd82;
  }
`;

const Footer = ({ className }) => {
  return (
    <StyledFooter className={className}>
      &copy; 2020 <a href="https://marczin.dev">marczin.dev</a>
    </StyledFooter>
  );
};

export default Footer;
