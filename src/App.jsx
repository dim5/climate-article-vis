import React from 'react';
import styled from 'styled-components/macro';
import Header from './components/header';
import Footer from './components/footer';
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
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const CenteredText = styled.div`
  margin-bottom: 0.25rem;
  text-align: center;
`;

const ShortCardContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & > section:nth-child(2n) {
      margin-left: 1rem;
    }
  }
`;

const LazyChart = React.lazy(() => import('./components/entity-chart'));
const LazyGraph = React.lazy(() => import('./components/entity-graph'));

function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <ShortCardContainer>
          <Card title="Common topics">
            After clustering the articles and examining the resulting clusters,
            I identified these common topics:
            <ul
              css={`
                margin-right: auto;
              `}
            >
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
        </ShortCardContainer>
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
            The entities are in blue, the articles are orange. You can change
            the view mode below the graph.
          </CenteredText>
          <React.Suspense
            fallback={
              <Spinner
                css={`
                  min-height: 60vh;
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
      <Footer />
    </AppContainer>
  );
}

export default App;
