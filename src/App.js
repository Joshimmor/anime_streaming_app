import React,{useState} from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Results from "./Components/Results";
import request from "./request"

function App() {
  const [navState, selectionStatus] = useState(request.fetchHome);
  return (
    <div className="App">
      <Nav selectionStatus={selectionStatus}/>
      <Results navState={navState}/>
      
      {/* Nav*/}
    </div>
  );
}

export default App;
