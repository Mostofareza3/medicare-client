import React from 'react';
import useData from '../../hooks/useData';
import './About.css'

const About = () => {
    const { doctors } = useData()
    return (
        <div className="about-section container">
            <h1 className="title">About Us</h1>
            <div className="row">
                <div className="col-md-6 about-detail">
                    <h1>What we stand for? <br />
                      <span  className="highlight">Our core values</span></h1>
                    
                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                    </p>
                    <h6>Address : <small>xyz road , 1243</small></h6>
                    <h6>Email : <small>abc@example.com</small></h6>
                    <h6>Phone : <small>+9043053457384</small></h6>

                </div>
                <div className="col-md-6">
                    <img className="w-100 rounded-3 border border-warning" src="https://images.unsplash.com/photo-1578496479763-c21c718af028?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
           
                <h1 className="title mt-5">Your reliable team
                       <span className="highlight"> Medicare doctors</span></h1>
                <div className="experts-container">
                    
                    {
                        doctors.map(doctor =>

                            <div key={doctor.id} className="expert-card">
                                <div>
                                    <img src={doctor.img} alt="" />
                                </div>
                                <div className="expert-details">
                                    <p className="title">{doctor.designation}</p>
                                    <h4>{doctor.name}</h4>
                                    <small>{doctor.des}</small> <br />
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;