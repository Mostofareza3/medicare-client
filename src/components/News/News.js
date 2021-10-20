import React from 'react';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import './News.css'

const News = () => {
    const {news} = useData();
    return (
        <div>
            <h1 className="title">All Update News below</h1>

            <div className="news-container container">
                {
                    news.map(nw=> <div key={nw.id} className="single-news">
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
                </div>)
                }
            </div>
        </div>
    );
};

export default News;