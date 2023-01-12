import React,{useState} from "react";
import './ClassComp.css';

 

const ClassComp=()=>{
        const [show2,setShow2] = useState(false);
        const showHide1=()=>{
            if(show2 === true){
                setShow2(false)
            }else{setShow2(true)}
        }
        return (
            <>
              <div className="App1">
                 <button className="btn2" onClick={showHide1}>To see styling in class component</button>
              </div>
              
              {show2 && (
              <div className="cont2">
                <h2>This is created using class Component</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
              </div>
              )}
             </>
           );
       }

export default ClassComp;