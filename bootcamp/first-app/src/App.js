import './App.css';
import Clock from './components/Clock';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';
import Welcome from './components/Welcome';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navigation/>

      <Routes>
        <Route path="/" element={<Welcome name="Aravind"/>}/>
        <Route path="/clock" element={<Clock/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/welcome/:name" element={<Welcome/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
