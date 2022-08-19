import React from 'react'
function Card({ImageSrc,Title,Description,NewsLink}) {
    return (
        <div className="card">
            <img src={ImageSrc?ImageSrc:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} className="card-img-top" alt="News"/>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}...</p>
                    <a href={NewsLink} target="_blank"className="btn btn-primary">Read More</a>
                </div>
        </div>
    )
}

export default Card