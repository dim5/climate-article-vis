import React from 'react';
import styled, { css } from 'styled-components/macro';
import Title from './components/title';
import TopEntities from './components/top-entities';
import Spinner from './components/spinner';
import Card from './components/card';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.main`
  @media (min-width: 1024px) {
    max-width: 85vw;
  }
  max-width: 90vw;
  margin: auto;
`;

const TextSection = styled.section`
  margin-bottom: 0.25rem;
  ${(props) =>
    props.centered
      ? css`
          text-align: center;
        `
      : ''}
`;

const CenteredText = styled.div`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const LazyChart = React.lazy(() => import('./components/entity-chart'));
const LazyGraph = React.lazy(() => import('./components/entity-graph'));

function App() {
  return (
    <AppContainer>
      <header>
        <Title>Climate Article Analysis</Title>
      </header>
      <Main>
        <TextSection centered>
          I collected and analyzed (using various NLP methods) more than 16000
          articles about climate change and global warming from November 2019 to
          August 2020.
          <br /> On this page you can view some of the results.
        </TextSection>
        <div
          css={`
            @media (min-width: 1024px) {
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              & > section:nth-child(2n) {
                margin-left: 1rem;
              }
            }
          `}
        >
          <Card title="Common topics">
            After clustering the articles and examining the resulting clusters,
            I identified these common topics:
            <ul>
              <li>wildfires</li>
              <li>the fate of the Arctic </li>
              <li>the COVID-19 pandemic and its effects on the environment</li>
              <li>methane and its effects</li>
              <li>the European Union’s role in stopping climate change</li>
              <li>
                US climate politics (mostly related to the 2020 United States
                election)
              </li>
              <li>legal issues/battles</li>
            </ul>
          </Card>
          <Card title="Most mentioned named entities">
            These entities were the most mentioned at least once per articles
            <TopEntities
              css={`
                margin-top: 0.25rem;
                width: 100%;
              `}
            />
          </Card>
        </div>
        <Card title="Entity occurrence over time">
          <CenteredText>
            Select up to five named entities and see how many articles mentioned
            them. The total number of articles <em>(from December 2019)</em>{' '}
            mentioning them is on the right. <br /> You can change the time
            resolution below the diagram.
          </CenteredText>
          <React.Suspense
            fallback={
              <Spinner
                css={`
                  min-height: 40vh;
                  width: 100%;
                `}
              />
            }
          >
            <LazyChart
              css={`
                width: 100%;
                height: 100%;
              `}
            />
          </React.Suspense>
        </Card>
        <Card title="Named entity graph">
          <CenteredText>
            This bipartite graph consists of the top 50 named entities (by
            article count) and the 30 articles per entity that mentioned them
            the most.
            <br />
            The entities are in blue, whereas the articles are orange. You can
            change view mode below the graph.
          </CenteredText>
          <React.Suspense
            fallback={
              <Spinner
                css={`
                  min-height: 60vh;
                  width: 100%;
                `}
              />
            }
          >
            <LazyGraph
              css={`
                width: 100%;
              `}
            />
          </React.Suspense>
        </Card>
      </Main>
      <footer
        css={`
          margin: 0.5rem auto 10px auto;
        `}
      >
        &copy; 2020 <a href="https://marczin.dev">marczin.dev</a>
      </footer>
    </AppContainer>
  );
}

export default App;
