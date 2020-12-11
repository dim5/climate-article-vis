import styled from 'styled-components/macro';
import NerVisualizer from './components/ner-visualizer';

const Main = styled.main`
  max-width: 85vw;
  margin: auto;
`;

function App() {
  return (
    <div>
      <header></header>
      <Main>
        <NerVisualizer />
      </Main>
    </div>
  );
}

export default App;
