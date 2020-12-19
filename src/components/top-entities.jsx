import styled from 'styled-components/macro';
import Top15 from '../data/top15.json';

const PercentItem = styled.div`
  border-bottom: 4px solid black;
  border-image: linear-gradient(
    to right,
    forestgreen ${(props) => props.percent}%,
    rgba(0, 0, 0, 0) ${(props) => props.percent}%
  );
  border-image-slice: 1;
`;

const TopEntities = ({ className }) => {
  return (
    <div className={className}>
      {Top15.map((e) => {
        return (
          <PercentItem percent={e.pct} key={e.ent}>
            {e.ent}{' '}
            <span
              css={`
                float: right;
                &::after {
                  clear: both;
                }
              `}
            >
              {e.cnt}
            </span>
          </PercentItem>
        );
      })}
    </div>
  );
};

export default TopEntities;
