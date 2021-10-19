import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './ServiceOverview.css'

const ServiceOverview = () => {
    return (
        <>
            <div className="overview-section">
                <div className="overview-left">
                    <h3 className="title">SERVICES AT ONE GLANCE</h3>
                    <h1>HOW WE CAN <span className="">HELP YOU?</span> </h1>
                    <p>Credibly innovate granular internal or “organic“ sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p>
                </div>


                <div className="overview-right">
                    <h5 className="title">BOOK WITHIN MINUTES</h5>
                    <h3>Consult our doctors</h3>
                    <small>Select the doctor you prefer to get a checkup and book a visit with them in a matter of minutes. Simply select from the list below.</small>
                    <DropdownButton id="dropdown-item-button" title="CHOOSE A DOCTOR">
                        <Dropdown.ItemText>CHOOSE A DOCTOR</Dropdown.ItemText>
                        <Dropdown.Item as="button">Anna Wilson</Dropdown.Item>
                        <Dropdown.Item as="button">Peggie Cannon</Dropdown.Item>
                        <Dropdown.Item as="button">Hubert Jackson</Dropdown.Item>
                        <Dropdown.Item as="button">Chase Franklin</Dropdown.Item>
                    </DropdownButton>
                </div>


            </div>

            <div className="treatment-container">
                <div className="single-treatment">
                    <img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" alt="" />
                    <h4 className="title">Heart surgery</h4>
                    <p>Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes .</p>
                </div>
                <div className="single-treatment">
                    <img src="https://cdn-icons-png.flaticon.com/512/3004/3004458.png" alt="" />
                    <h4 className="title">Heart transplant</h4>
                    <p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverable applications.</p>
                </div>
                <div className="single-treatment">
                    <img src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png" alt="" />
                    <h4 className="title">Valve diseases</h4>
                    <p>ontinually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies.
</p>
                </div>
            </div>
        </>
    );
};

export default ServiceOverview;