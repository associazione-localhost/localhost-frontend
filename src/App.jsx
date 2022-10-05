import React from "react";
import NavBarContainer from "./Components/NavBarContainer";
import SideContainer from "./Components/SideContainer";

//css
import './App.css'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isAnimComplete:false
        }
    }
    
    render(){
        return(
            <div className="App">
                <NavBarContainer/>
                <div className="Background-Image"/>
                <SideContainer/>
                
            </div>
        )
        
    }
}

export default App;