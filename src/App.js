import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import MainNewsComponent from "./components/MainNewsComponent"
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(40);
  return (
    <>
      <LoadingBar
        color='#00FF00'
        progress={progress}
        height = {5}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainNewsComponent key = "General1" pageSize={12} category="news" setProgress = {setProgress}/>} />
        <Route path="/sport" element={<MainNewsComponent key = "sport" pageSize={12} category="sport" setProgress = {setProgress}/>} />
        <Route path="/tech" element={<MainNewsComponent key = "tech" pageSize={12} category="tech" setProgress = {setProgress}/>} />
        <Route path="/world" element={<MainNewsComponent key = "world" pageSize={12} category="world" setProgress = {setProgress}/>} />
        <Route path="/finance" element={<MainNewsComponent key = "finance" pageSize={12} category="finance" setProgress = {setProgress}/>} />
        <Route path="/politics" element={<MainNewsComponent key = "politics" pageSize={12} category="politics" setProgress = {setProgress}/>} />
        <Route path="/business" element={<MainNewsComponent key = "business" pageSize={12} category="business" setProgress = {setProgress}/>} />
        <Route path="/economics" element={<MainNewsComponent key = "economics" pageSize={12} category="economics" setProgress = {setProgress}/>} />
        <Route path="/entertainment" element={<MainNewsComponent key = "entertainment" pageSize={12} category="entertainment" setProgress = {setProgress}/>} />
        <Route path="/beauty" element={<MainNewsComponent key = "beauty" pageSize={12} category="beauty" setProgress = {setProgress}/>} />
        <Route path="/gaming" element={<MainNewsComponent key = "gaming" pageSize={12} category="gaming" setProgress = {setProgress}/>} />
      </Routes>
    </>
  );
}

export default App;
