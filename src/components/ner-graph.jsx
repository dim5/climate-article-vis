import GraphData from '../data/graph/graph-50-10.json';
import GraphData2 from '../data/graph/graph-force.json';
import ForceGraph2D from 'react-force-graph-2d';

const NerGraph = ({ className }) => {
  return (
    <div className={className}>
      <ForceGraph2D
        graphData={GraphData2}
        nodeLabel="label"
        linkLabel="label"
      />
    </div>
  );
};

export default NerGraph;

// suspense?
