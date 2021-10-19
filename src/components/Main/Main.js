import React from 'react';
import { useHistory } from 'react-router';
import useData from '../../hooks/useData';
import './Main.css'

const Main = () => {
    const history = useHistory();

    const handleOnClick =() =>{
        history.push('/services')
    }

    const {services} = useData()
    return (
        <div>
            <h1 className="title">OUR SERVICES</h1>

            <section className="card-section">
            {
               services.map(service =>
              
                    <div key={service.id} className="card">
                    <div>
                    <img className="card-img" src={service.img} alt="" />
                    </div>
                    <div className="card-description">
                        <p className="card-title">{service.title}</p>
                        <h4 className="card-name">{service.name}</h4>
                        <small>{service.description}</small> <br />
                    </div>
                    <button onClick={handleOnClick} className="btn btn-warning">Learn more</button>
                </div>
               )
            }
            </section>
           
        </div>
    );
};

export default Main;