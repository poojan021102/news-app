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
        <Route path="/" element={<MainNewsComponent key = "General1" pageSize={12} category="General" setProgress = {setProgress}/>} />
        <Route path="/General" element={<MainNewsComponent key = "General2" pageSize={12} category="General" setProgress = {setProgress}/>} />
        <Route path="/Business" element={<MainNewsComponent key = "Business" pageSize={12} category="Business" setProgress = {setProgress}/>} />
        <Route path="/Entertainment" element={<MainNewsComponent key = "Entertainment" pageSize={12} category="Entertainment" setProgress = {setProgress}/>} />
        <Route path="/Health" element={<MainNewsComponent key = "Health" pageSize={12} category="Health"setProgress = {setProgress} />} setProgress = {setProgress}/>
        <Route path="/Science" element={<MainNewsComponent key = "Science" pageSize={12} category="Science" setProgress = {setProgress}/>} />
        <Route path="/Sports" element={<MainNewsComponent key = "Sports" pageSize={12} category="Sports" setProgress = {setProgress}/>} />
        <Route path="/Technology" element={<MainNewsComponent key = "Technology" pageSize={12} category="Technology" setProgress = {setProgress}/>} />
      </Routes>
    </>
  );
}

export default App;
