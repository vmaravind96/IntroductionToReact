import { useEffect, useState } from "react";

function Clock(props){

    const [date, setDate] = useState(new Date());

    /*
        - Helps to kick-off a process when the component is rendered (mounted). 
        - With [] (dependency array) param we configure it to run once after the component is mounted. 
    */ 
    useEffect(()=> {
        console.log("Inside use effect");
        let timerID = setInterval(() => tick(), 1000);
        
        // Clean up function
        return () => { 
            clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setDate(new Date());
    };

    return (
        <div className="Clock">
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;