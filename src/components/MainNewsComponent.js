import Card from "./Card"
import { useEffect } from "react"
import { useState } from 'react'
import Loading from './Loading'
import InfiniteScroll from "react-infinite-scroll-component";
function MainNewsComponent({ pageSize, category,setProgress }) {
    const [articles, setarticles] = useState([]);
    const [PageNumber, setPageNumber] = useState(1);
    const [TotalPages, setTotalPages] = useState(0);
    useEffect( () => {
        document.title = category[0].toUpperCase() + category.substring(1);
        setProgress(20);
        setProgress(40);
        setProgress(50); 
        FetchMoreData();
        setProgress(100);
    },[])

    const FetchMoreData = async() =>{
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ce03afadcfmsh3689f792a5e5afbp16ca32jsne2da39ea2fca',
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        };
        let resp = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${category}&lang=en&page=${PageNumber}&page_size=${pageSize}`, options);
        let data = await resp.json();
        setarticles(articles.concat(data.articles));
        setTotalPages(data.total_pages);
        setPageNumber(PageNumber + 1);
    }

    return (
        <div className="my-3">
            {
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={FetchMoreData}
                        hasMore={articles.length !== 12*TotalPages}
                        loader={<Loading />}
                    >
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                                {
                                    articles.map(element => {
                                        return <div key={element._score} className="my-3 col"><Card ImageSrc={element.media} Title={element.title} Description={element.summary.substring(0, 500)} NewsLink={element.link} /></div>
                                    })
                                }
                            </div>
                        </div>
                    </InfiniteScroll>
            }
        </div >
    )
}

export default MainNewsComponent