import { useEffect, useRef } from "react";


const Dashboard = () => {
    const inputRef = useRef(0)

    useEffect(()=>{
     inputRef.current.focus()
    },[])
    
    return (
        <div>
            <h1 className="text-center text-3xl mt-12">This is dashboard</h1>


           <div className="text-center  my-6">
           <input ref={inputRef} type="text" placeholder="Your name " style={{padding: '1rem'}} />
           </div>


        </div>
    );
};

export default Dashboard;