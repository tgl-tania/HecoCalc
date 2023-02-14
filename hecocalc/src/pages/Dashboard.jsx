import Linechart from "../components/Linechart";
import ScatterPlot from "../components/ScatterPlot";
import Tornado from "../components/TornadoDiagram";
import InputScreen from "../components/InputScreen";
import DeterministicResults from "../components/DeterministicResults";
import ProbabilisticResults from "../components/ProbabilisticResults";
import "../css/dashboard.css"

function GraphsDashboard() {
  return (
    <>
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
  
  <>
  <div class="grid-container">
    <div class="grid-item1"><ScatterPlot/></div>
    <div class="grid-item1"><Linechart/></div>
    <h1 className="heading"> One-way sensitivity analysis</h1>
    <hr className="horizontalLine"/>
    <div class="grid-item2"><Tornado/></div>
  </div>
  </>
  );
}

export default GraphsDashboard;