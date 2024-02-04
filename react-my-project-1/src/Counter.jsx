
import React,{useState, useEffect} from "react";


function Counter(){
   
    const[width, setWidth] = useState(window.innerWidth);
    const[height, setHeight] = useState(window.innerHeight);

    
    useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        // clean up code with return, for when unmount component
        
        return() => {
            window.removeEventListener("resize", resizeWindow);
        }
    }, [])
    
    
    function resizeWindow(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p> width: {width}</p>
        <p>height: {height}</p>
    </>);
}

export default Counter;