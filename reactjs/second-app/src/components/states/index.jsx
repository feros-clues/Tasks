import React,{useState} from "react";
import "../buttonStyle/index.css";
import './index.css'
const AlterState = () =>{


    const [name, setName] = useState("dipti");
    const [counter, setCounter] = useState(0);
    // const [counter1, setCounter1] = useState(0);
    function AfterClick() {
        if ( name==="dipti") {
            setName("mahejabeen"); 
        }
        else setName('dipti');
        
    }

    return(
        <div id="stateWrapper" >
            <h1>React States Demo</h1>
            <h2>Selected Name : {name}</h2>
            <h2>Counter : {counter}</h2> <br></br>
            <button onClick={AfterClick} >NameSelector</button>
            <button onClick={() => {setCounter(counter+1)}}>UpCounter</button>
            <button onClick={() => {setCounter(counter-1)}}>Downcounter</button>
        </div>
    );
};

export default AlterState;

