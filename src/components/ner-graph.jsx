import GraphData from '../data/graph/graph-50-30.json';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import styled, { css } from 'styled-components/macro';
import { Radio } from 'antd';
import { NodeIndexOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import { useState, useRef, useLayoutEffect } from 'react';

const GraphVisContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GraphContainer = styled.div`
  width: 100%;
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

const NerGraph = ({ className }) => {
  const [is2D, setIs2D] = useState(true);
  const [size, setSize] = useState({ width: 300, height: 300 });
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({
        height: containerRef.current.clientHeight,
        width: containerRef.current.clientWidth,
      });

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
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
          <ForceGraph3D
            graphData={GraphData}
            nodeColor={getColor}
            {...labelProps}
            {...size}
            backgroundColor="#fff"
            linkColor={(_) => '#000'}
          />
        )}
      </GraphContainer>
      <Radio.Group
        onChange={handleViewModeChange}
        optionType="button"
        buttonStyle="solid"
        value={is2D}
        css={`
          margin-top: 5px;
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

export default NerGraph;
