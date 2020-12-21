import styled from 'styled-components/macro';
import { Spin } from 'antd';

const Spinner = styled(Spin).attrs({
  size: 'large',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export default Spinner;
