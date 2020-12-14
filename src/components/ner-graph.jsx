import GraphData from '../data/graph/graph-50-30.json';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import styled, { css } from 'styled-components/macro';
import { Radio } from 'antd';
import { NodeIndexOutlined, CodeSandboxOutlined } from '@ant-design/icons';
import { useState } from 'react';

const GraphContainer = styled.div`
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

  const handleViewModeChange = (e) => setIs2D(e.target.value);

  const getColor = (node) => (node.id.startsWith('ne') ? '#4fbddc' : '#f37839');
  const labelProps = {
    nodeLabel: 'label',
    linkLabel: 'label',
  };

  return (
    <GraphContainer className={className}>
      <Radio.Group
        onChange={handleViewModeChange}
        optionType="button"
        buttonStyle="solid"
        value={is2D}
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
      {is2D ? (
        <ForceGraph2D
          graphData={GraphData}
          nodeColor={getColor}
          {...labelProps}
        />
      ) : (
        <ForceGraph3D
          graphData={GraphData}
          nodeColor={getColor}
          {...labelProps}
          backgroundColor="#fff"
          linkColor={(_) => '#000'}
        />
      )}
    </GraphContainer>
  );
};

export default NerGraph;
