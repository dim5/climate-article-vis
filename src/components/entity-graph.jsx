import React, { useState, useRef, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import ForceGraph2D from 'react-force-graph-2d';
import { Radio } from 'antd';
import { NodeIndexOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import GraphData from '../data/graph-50-30.json';
import Spinner from './spinner';

const GraphVisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  max-height: 100vh;
  border-left: solid 1px rgba(153, 145, 145, 0.25);
  border-right: solid 1px rgba(153, 145, 145, 0.25);
  padding: 1px;
  overflow: hidden;

  & .scene-tooltip {
    color: #eee !important;
    background: rgba(0, 0, 0, 0.65);
    border-radius: 3px;
    padding: 4px;

    :empty {
      padding: 0;
    }
  }
`;

const buttonIconStyle = css`
  margin-right: 2px;
`;

const import3DPromise = import('react-force-graph-3d');
const LazyForceGraph3D = React.lazy(() => import3DPromise);

const EntityGraph = ({ className }) => {
  const [is2D, setIs2D] = useState(true);
  const [size, setSize] = useState({ width: 300, height: 300 });
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({
        height: containerRef.current.clientHeight,
        width: containerRef.current.clientWidth,
      });

    window.addEventListener('resize', updateSize, { passive: true });
    updateSize();
    return () =>
      window.removeEventListener('resize', updateSize, { passive: true });
  }, [setSize]);

  const handleViewModeChange = (e) => setIs2D(e.target.value);

  const getColor = (node) => (node.id.startsWith('ne') ? '#4fbddc' : '#f37839');
  const labelProps = {
    nodeLabel: 'label',
    linkLabel: 'label',
  };

  return (
    <GraphVisContainer className={className}>
      <GraphContainer ref={containerRef}>
        {is2D ? (
          <ForceGraph2D
            graphData={GraphData}
            nodeColor={getColor}
            {...labelProps}
            {...size}
          />
        ) : (
          <React.Suspense fallback={<Spinner />}>
            <LazyForceGraph3D
              graphData={GraphData}
              nodeColor={getColor}
              {...labelProps}
              {...size}
              backgroundColor="#fff"
              linkColor={(_) => '#000'}
            />
          </React.Suspense>
        )}
      </GraphContainer>
      <Radio.Group
        onChange={handleViewModeChange}
        optionType="button"
        buttonStyle="solid"
        value={is2D}
        css={`
          margin-top: 0.5rem;
        `}
      >
        <Radio.Button value={true}>
          <NodeIndexOutlined css={buttonIconStyle} />
          2D view
        </Radio.Button>
        <Radio.Button value={false}>
          <CodeSandboxOutlined css={buttonIconStyle} />
          3D view
        </Radio.Button>
      </Radio.Group>
    </GraphVisContainer>
  );
};

export default EntityGraph;
