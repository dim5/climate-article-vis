import styled from 'styled-components/macro';
import NerVisualizer from './components/ner-visualizer';
import Title from './components/title';

const Main = styled.main`
  max-width: 85vw;
  margin: auto;
`;

function App() {
  return (
    <div>
      <header>
        <Title>Climate Article Analysis</Title>
      </header>
      <Main>
        <NerVisualizer />
      </Main>
    </div>
  );
}

export default App;
