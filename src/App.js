import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer.jsx";
import {CoreApp} from "./PathfindingVisualizer/CoreApp/CoreApp.jsx";


function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <div className="PopUp">
        <CoreApp />
      </div>
    </div>
    
  );
}

export default App;
