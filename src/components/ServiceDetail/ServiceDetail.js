import React from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { id } = useParams();
    const { services } = useData();

    const specific = services.find(service => service.id == id);
  
    return (
        <div className="single-service-container container">
            <div>
                <h1 className="title">{specific?.title}</h1>
                <div className="single-service">
                    <img className="img-fluid" src={specific?.img} alt="" />
                    <h5 className="text-start text-danger">Description:</h5>
                    <p className="text-start">{specific?.description}</p>
                </div>
            </div>
        </div>
        
    );
};

export default ServiceDetail;