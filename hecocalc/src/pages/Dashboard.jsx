import Linechart from "../components/Linechart";
import ScatterPlot from "../components/ScatterPlot";
import Tornado from "../components/TornadoDiagram";
import "../css/dashboard.css"

function GraphsDashboard() {
  return (
    <>
    <div className="LineAndScatter">
        <Linechart/>
        <ScatterPlot/>
    </div>
           
    <div className="TornadoDiagram">
      <Tornado/>
    </div>
  </>
  );
}

export default GraphsDashboard;