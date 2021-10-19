import React from 'react';
import useData from '../../hooks/useData';
import './OurTeam.css'

const OurTeam = () => {
    const { doctors } = useData();
    return (
        <>
            <div>
                <div className="introduce-container">
                    <div>
                        <img src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" alt="" />
                    </div>
                    <div>
                        <h2 className="title">INTRODUCE OUR TEAM</h2>
                        <h1>Great passion <span className="highlight">for Healing</span> </h1>
                        <p>Some up and coming trends are healthcare consolidation for independent healthcare centers that see a cut in unforeseen payouts. High deductible health plans are also expected to transpire along with a growth of independent practices.</p>
                        <div>
                            <div>Signatures</div>
                            <div>abc</div>
                        </div>
                    </div>

                </div>
            </div>

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

        </>
    );
};

export default OurTeam;