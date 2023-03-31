import React, {useEffect} from 'react'
import "./App.css"
import ReportDisplay from './Components/ReportDisplay/ReportDisplay';
import SidebarDisplay from './Components/SidebarDisplay/SidebarDisplay';

function App() {
  
  useEffect(()=>{
  }, []);
  
  return (
    <div className="App">
      <SidebarDisplay/>
      <ReportDisplay/>
    </div>
  );
}

export default App;
