import React,{useState}from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Results from "./Components/Results";
import request from "./request";
import Footer  from "./Components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EpisodeCard from "./Components/EpisodeCard";
import axios from "./axios";
import MainSlider from "./Components/MainSlider";


function App() {
      //saves state to be passed down as props to the API get request
      const [navState, selectionStatus] = useState(request.fetchHome);
      //Anime Titles /DATA State to be displayed 
      const [animes, setAnimes] = useState([])
      //axios request
      async function fetchData(requestType){
        try {
              const response = await axios.get(requestType);
              return response.data  
            }   
        catch (error) {
              console.log(error.message) //{config:{...}}
        
            }
      }
    //homePage
   /*
    async function mockServer(){
      try   {
              let payLoad = await fetch("http://192.168.1.197:3001/data");
              payLoad = await payLoad.json()
              if(payLoad!== null){
                console.log(payLoad)
                const upAndComing = payLoad.top.filter(anime => anime.rank <= 16)
                setAnimes(upAndComing)
                console.log(animes)}
            }
      catch(error){
                console.error(error)
            }     

    }
    */
    //Fetching Anime Titles 
     
     async function homePage (request){
        const data = await fetchData(request.fetchHome);
        if(data!== null){
           let upAndComing = data.top.filter(anime => anime.rank <= 16)
            setAnimes(upAndComing)
            console.log(animes)
          }
        };

       homePage(request);
      //mockServer()
       
    //State before render
      console.log(animes)
     //MainSlider Data State Selection
     const [index, setIndex] = useState(0);
      //Selectior Logged
      console.log(index)
      //APP
      return (
        <Router>
          <div className="App">
            <Nav selectionStatus={selectionStatus}/>
            <Switch> 
              <Route exact path="/">
                <MainSlider anime={animes[index]}
                setIndex={setIndex}
                index={index}
                navState={navState}/>
                <Results animes={animes} />
              </Route>
              <Route exact path="/home/:animeid" 
              render={(props)=><EpisodeCard {...props} 
              anime={animes}
                                            />}
                             />
            </Switch>  
            <Footer/> 
          </div>
      </Router>
      );
    }

export default App;
