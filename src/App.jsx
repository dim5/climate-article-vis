import styled from 'styled-components/macro';
import NerVisualizer from './components/ner-visualizer';
import Title from './components/title';
import TopEntities from './components/top-entities';

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
        <article
          css={`
            text-align: center;
          `}
        >
          <p>
            I collected and analyzed more than 16000 articles about climate
            change and global warming from November 2019 to August 2020.
            <br /> On this page you can view some of the results.
          </p>
        </article>
        <div
          css={`
            display: flex;
          `}
        >
          <article>
            <h2>Common topics</h2>
            <p>
              After clustering the articles and examining the resulting
              clusters, I identified these common topics:
              <ul>
                <li>wildfires</li>
                <li>the fate of the Arctic </li>
                <li>
                  the COVID-19 pandemic and its effects on the environment
                </li>
                <li>methane and its effects</li>
                <li>the European Union’s role in stopping climate change</li>
                <li>
                  US climate politics (mostly related to the 2020 United States
                  election)
                </li>
                <li>legal issues/battles</li>
              </ul>
            </p>
          </article>
          <article>
            <h2>Most mentioned named entities</h2>
            <p>
              These entities were the most mentioned at least once per articles
            </p>
            <TopEntities />
          </article>
        </div>
        <NerVisualizer />
      </Main>
    </div>
  );
}

export default App;
