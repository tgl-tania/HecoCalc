import Linechart from "../components/Linechart";
import ScatterPlot from "../components/ScatterPlot";
import Tornado from "../components/TornadoDiagram";
import InputScreen from "../components/InputScreen";
import DeterministicResults from "../components/DeterministicResults";
import ProbabilisticResults from "../components/ProbabilisticResults";
import RunSimulations from "../components/RunSimulations";
import Navbar from "../components/Navbar";
import "../css/dashboard.css";

function GraphsDashboard() {
  return (
    <>
      <Navbar />
      <div>
        <RunSimulations />
      </div>
      <div className="DashBoard">
        <div className="InputScreen">
          <InputScreen />
        </div>
        <div className="DeterministicResults">
          <div className="Results">
            <DeterministicResults />
          </div>
        </div>
        <div className="ProbabilisticResults">
          <div className="Results">
            <ProbabilisticResults />
          </div>
        </div>
      </div>
      <div className="GridLineAndScatter">
        <div className="grid-itemscatter">
        <ScatterPlot />
        </div>
        <div className="grid-itemline">
        <Linechart />
        </div>
        {/* <h1 className="heading">One-way sensitivity analysis</h1> */}
        <hr className="horizontalLine"/>
      </div>
      
      <div className="grid-itemtornado">
        <Tornado />
      </div>
    </>
  );
}

export default GraphsDashboard;
