import React, { useState } from 'react';
import './App.css';


function App() {

    const [redlight, setRedlight] = useState(null);

    const [yellowlight, setYellowlight] = useState(null);

    const [greenlight, setGreenlight] = useState(null);

    const handlerbutton = (color) => {

        if (color === 'red') setRedlight("selected")
        else setRedlight(null)

        if (color === 'yellow') setYellowlight("selected")
        else setYellowlight(null)

        if (color === 'green') setGreenlight("selected")
        else setGreenlight(null)
        console.log(color);
    };

    return (
        <div className="App">
            <div className="stick"> </div>
            <div className="trafficlight">
                <div className={`redlight  ${redlight}`} onClick={() => handlerbutton("red")}></div>
                <div className={`yellowlight  ${yellowlight}`} onClick={() => handlerbutton("yellow")}></div>
                <div className={`greenlight ${greenlight}`} onClick={() => handlerbutton("green")}></div>
            </div>
        </div>
    );
}


export default App;



/* const [lighton, setLighton ] = useState (null)
    const handlerbutton =()=>{
    let redextraClass= '';
    if(lighton === 'red') redextraClass = 'selected';

    let yellowextraClass= '';
    if(lighton === 'yellow') yellowextraClass = 'selected';

    let greenextraClass= '';
    if(lighton === 'green') greenextraClass = 'selected';
}   */




