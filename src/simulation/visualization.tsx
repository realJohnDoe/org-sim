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
    const width = svg.node()?.clientWidth || 800;
    const height = svg.node()?.clientHeight || 600;

    // Clear previous rendering
    svg.selectAll("*").remove();

    // Create a force simulation for layout
    const simulation = d3.forceSimulation(state.graph.nodes as d3.SimulationNodeDatum[])
      .force("link", d3.forceLink(state.graph.edges).id((d: any) => d.id).distance(40))
      .force("charge", d3.forceManyBody().strength(-20))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .stop();

    // Manually tick the simulation to avoid animation for simplicity
    for (let i = 0; i < 300; ++i) simulation.tick();

    // Calculate bounding box to adjust zoom and translation
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    state.graph.nodes.forEach(node => {
      const x = (node as any).x || 0;
      const y = (node as any).y || 0;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    });
    
    const graphWidth = maxX - minX;
    const graphHeight = maxY - minY;
    const scale = Math.min(width / graphWidth, height / graphHeight) * 0.9; // 0.9 for padding
    const translateX = (width / 2) - ((minX + maxX) / 2) * scale;
    const translateY = (height / 2) - ((minY + maxY) / 2) * scale;

    // Create a group for all elements with transform for zoom and pan
    const g = svg.append("g")
      .attr("transform", `translate(${translateX},${translateY}) scale(${scale})`);

    // Draw edges
    g.append("g")
      .attr("stroke", "#333")
      .attr("stroke-width", 2.5)
      .selectAll("line")
      .data(state.graph.edges)
      .enter()
      .append("line")
      .attr("role", "graphics-object")
      .attr("x1", (d: any) => d.source.x || 0)
      .attr("y1", (d: any) => d.source.y || 0)
      .attr("x2", (d: any) => d.target.x || 0)
      .attr("y2", (d: any) => d.target.y || 0);

    // Draw nodes
    g.append("g")
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
