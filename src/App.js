
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from  "./Pages/home"
import AppPage from "./Pages/app";
import Staking from "./Pages/staking"
import Lock from "./Pages/lock"


function App() {
  return (
    <Router>
      <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/app' element={<AppPage/>}/>
      <Route path='/app/staking' element={<Staking/>}/>
      <Route path='/app/lock' element={<Lock/>}/>
        
      </Routes>
      </Router>
  );
}

export default App;
