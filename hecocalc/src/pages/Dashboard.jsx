import Linechart from "../components/Linechart";
import ScatterPlot from "../components/ScatterPlot";
import Tornado from "../components/TornadoDiagram";

function GraphsDashboard() {
  return (
    <>
    <div className="LineChart">
        <Linechart/>
    </div>
    <div className="ScatterPlot">
      <ScatterPlot/>
    </div>
    <div className="TornadoDiagram">
      <Tornado/>
    </div>
  </>
  );
}

export default GraphsDashboard;