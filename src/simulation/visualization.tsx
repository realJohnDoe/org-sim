import * as React from 'react';
import * as d3 from 'd3';
import type { OrganizationalState } from './state';

interface OrganizationGraphProps {
  state: OrganizationalState;
}

const OrganizationGraph: React.FC<OrganizationGraphProps> = ({ state }) => {
  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (!svgRef.current || !state) return;

    const svg = d3.select(svgRef.current);
    const width = svg.node()?.clientWidth || 300;
    const height = svg.node()?.clientHeight || 200;

    // Clear previous rendering
    svg.selectAll("*").remove();

    // Create a force simulation for layout
    const simulation = d3.forceSimulation(state.graph.nodes as d3.SimulationNodeDatum[])
      .force("link", d3.forceLink(state.graph.edges).id((d: any) => d.id).distance(40))
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .stop();

    // Manually tick the simulation to avoid animation for simplicity
    for (let i = 0; i < 300; ++i) simulation.tick();

    // Draw edges
    svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-width", 1.5)
      .selectAll("line")
      .data(state.graph.edges)
      .enter()
      .append("line")
      .attr("role", "graphics-object")
      .attr("x1", (d: any) => {
        const sourceNode = state.graph.nodes.find(n => n.id === d.source);
        return (sourceNode as any)?.x || 0;
      })
      .attr("y1", (d: any) => {
        const sourceNode = state.graph.nodes.find(n => n.id === d.source);
        return (sourceNode as any)?.y || 0;
      })
      .attr("x2", (d: any) => {
        const targetNode = state.graph.nodes.find(n => n.id === d.target);
        return (targetNode as any)?.x || 0;
      })
      .attr("y2", (d: any) => {
        const targetNode = state.graph.nodes.find(n => n.id === d.target);
        return (targetNode as any)?.y || 0;
      });

    // Draw nodes
    svg.append("g")
      .attr("fill", "#1f77b4")
      .selectAll("circle")
      .data(state.graph.nodes as d3.SimulationNodeDatum[])
      .enter()
      .append("circle")
      .attr("role", "graphics-symbol")
      .attr("r", 5)
      .attr("cx", (d: any) => d.x || 0)
      .attr("cy", (d: any) => d.y || 0);

  }, [state]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <svg ref={svgRef} role="graphics-document" style={{ width: '100%', height: '100%' }}></svg>
    </div>
  );
};

export default OrganizationGraph;
