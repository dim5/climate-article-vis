import styled, { css } from 'styled-components/macro';

const CardTitle = styled.h2`
  margin-bottom: 0.25rem;
`;

const Card = ({ title, className, children }) => {
  return (
    <section
      css={`
        background-color: #fff;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: fit-content;

        padding: 0.5rem;
        margin-top: 0.25rem;
        margin-bottom: 0.8rem;

        box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
      `}
      className={className}
    >
      {title ? <CardTitle>{title}</CardTitle> : ''}
      {children}
    </section>
  );
};

export default Card;
