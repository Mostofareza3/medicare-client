import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import './UpdateNews.css'

const UpdateNews = () => {

    const { news } = useData();
    const slicedNews = news.slice(0, 3)
    return (
        <div className="container update-news-section">
            <h1 className="title">Medicare updates</h1>
            <p>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
            <div className="home-news-container">
                {
                    slicedNews.map(nw =>
                        <div key={nw.id} className="single-news">
                            <div>
                                <img src={nw.img} alt="" />
                                <div className="d-flex justify-content-center">
                                    <p><i className="far fa-clock"></i>{nw.date }</p>
                                    <p> <i className="fas fa-user-circle"></i> { nw.author}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{nw.title}</h4>
                                <p>{nw.description}</p>
                            </div>
                            <div>
                            </div>
                            
                        </div>
                    )
                }

            </div>
           <Link to="/news"> <button className="btn btn-warning">More News....</button></Link>

        </div>
    );
};

export default UpdateNews;