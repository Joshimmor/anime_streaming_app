import React,{useState} from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Results from "./Components/Results";
import request from "./request"

function App() {
  //saves state to be passed down as props to the API get request
  const [navState, selectionStatus] = useState(request.fetchHome);
  //APP
  return (
    <div className="App">
      <Nav selectionStatus={selectionStatus}/>
      <Results navState={navState}/>
      
      {/* Nav*/}
    </div>
  );
}

export default App;
