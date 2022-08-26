import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav-link' to="/sport">Sport</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/tech">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/world">World</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/finance">Finance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/politics">Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/economics">Economics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/beauty">Beauty</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/gaming">Gaming</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

{/* <Route path="/" element={<MainNewsComponent key = "General1" pageSize={12} category="news" setProgress = {setProgress}/>} />
        <Route path="/sport" element={<MainNewsComponent key = "sport" pageSize={12} category="sport" setProgress = {setProgress}/>} />
        <Route path="/tech" element={<MainNewsComponent key = "tech" pageSize={12} category="tech" setProgress = {setProgress}/>} />
        <Route path="/world" element={<MainNewsComponent key = "world" pageSize={12} category="world" setProgress = {setProgress}/>} />
        <Route path="/finance" element={<MainNewsComponent key = "finance" pageSize={12} category="finance" setProgress = {setProgress}/>} />
        <Route path="/politics" element={<MainNewsComponent key = "politics" pageSize={12} category="politics" setProgress = {setProgress}/>} />
        <Route path="/business" element={<MainNewsComponent key = "business" pageSize={12} category="business" setProgress = {setProgress}/>} />
        <Route path="/economics" element={<MainNewsComponent key = "economics" pageSize={12} category="economics" setProgress = {setProgress}/>} />
        <Route path="/entertainment" element={<MainNewsComponent key = "entertainment" pageSize={12} category="entertainment" setProgress = {setProgress}/>} />
        <Route path="/beauty" element={<MainNewsComponent key = "beauty" pageSize={12} category="beauty" setProgress = {setProgress}/>} />
        <Route path="/gaming" element={<MainNewsComponent key = "gaming" pageSize={12} category="gaming" setProgress = {setProgress}/>} /> */}
