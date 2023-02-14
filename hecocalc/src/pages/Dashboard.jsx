import Linechart from "../components/Linechart";
import ScatterPlot from "../components/ScatterPlot";
import Tornado from "../components/TornadoDiagram";
import InputScreen from "../components/InputScreen";
import DeterministicResults from "../components/DeterministicResults";
import ProbabilisticResults from "../components/ProbabilisticResults";
import RunSimulations from "../components/RunSimulations";
import "../css/dashboard.css"

function GraphsDashboard() {
  return (
    <>
      <div><RunSimulations/></div>
      <div className="DashBoard">      
        <div className="InputScreen"><InputScreen/></div>      
        <div className="DeterministicResults">        
          <div className="Results"><DeterministicResults/></div>
        </div>
        <div className="ProbabilisticResults">        
          <div className="Results"><ProbabilisticResults/></div>
        </div>
      </div>
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