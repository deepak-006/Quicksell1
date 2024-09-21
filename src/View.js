import React,{useState} from "react";
import Navbar from "./Navbar";
import Priority from "./Priority";
import Status from "./Status";

const View = () => {
    const [view,setView] = useState("Priority");
    const handleViewChange = (newView) => {
        setView(newView);
    }
  return (
    <div className="App">
      <Navbar onChangeView={handleViewChange}/>
      {}
      <div className="content">
        {view === 'Priority'? <Priority/>:<Status/>}
        {}

      </div>
    </div>
  );
}

export default View;
