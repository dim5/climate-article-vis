import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Spin } from 'antd';
import Title from './components/title';
import TopEntities from './components/top-entities';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.main`
  max-width: 85vw;
  margin: auto;
  > * {
    margin-top: 0.25rem;
    margin-bottom: 0.8rem;
  }

  h2 {
    margin-bottom: 0.25rem;
  }
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

const LazyChart = React.lazy(() => import('./components/entity-chart'));
const LazyGraph = React.lazy(() => import('./components/entity-graph'));
const Spinner = styled(Spin).attrs({
  size: 'large',
})`
  margin-left: 49%;
  padding-top: 5rem;
  min-height: ${(props) => props.minheight};
`;

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

              & > section:nth-child(2n) {
                padding-right: 1rem;
              }
            }
          `}
        >
          <TextSection>
            <h2>Common topics</h2>
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
          </TextSection>
          <TextSection>
            <h2>Most mentioned named entities</h2>
            These entities were the most mentioned at least once per articles
            <TopEntities
              css={`
                margin-top: 0.25rem;
              `}
            />
          </TextSection>
        </div>
        <div>
          <TextSection centered>
            <h2>Entity occurrence over time</h2>
            Select up to five named entities and see how many articles mentioned
            them. The total number of articles <em>
              (from December 2019)
            </em>{' '}
            mentioning them is on the right. <br /> You can change the time
            resolution below the diagram.
          </TextSection>
          <React.Suspense fallback={<Spinner minheight="35vh" />}>
            <LazyChart />
          </React.Suspense>
        </div>
        <div>
          <TextSection centered>
            <h2>Named entity graph</h2>
            This bipartite graph consists of the top 50 named entities (by
            article count) and the 30 articles per entity that mentioned them
            the most. <br />
            The entities are in blue, whereas the articles are orange. You can
            change view mode below the graph.
          </TextSection>
          <React.Suspense fallback={<Spinner minheight="60vh" />}>
            <LazyGraph />
          </React.Suspense>
        </div>
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
