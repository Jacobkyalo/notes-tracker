import "./App.css";
import Notes from "./components/Notes";

function App() {
  return (
    <div className="app">
      <div className="content-wrapper">
        <div className="content">
          <Notes />
        </div>
      </div>
    </div>
  );
}

export default App;
