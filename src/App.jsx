import "./App.css";
import Router from "./router";
import Sidebar from "./sidebar";

function App() {
  return (
    <>
      <div className="flex w-[100%]">
        <div className="w-[10%]">
          <Sidebar></Sidebar>
        </div>
        <div className="w-[90%]">
          <Router></Router>
        </div>
      </div>
    </>
  );
}

export default App;
