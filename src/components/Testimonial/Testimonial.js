import React from 'react';
import useData from '../../hooks/useData';
import './Testimonial.css'

const Testimonial = () => {
    const { testimonials } = useData();
    return (


        <div className="testimonial">
            <h4 className="test-title"><br /> A GOOD WORD MEANS A LOT</h4>
            <h1 className="test-title-2">

                Patient testimonials</h1>
            <section className="testimonial-container">
                {
                    testimonials.map(testimonial =>
                        <div key={testimonial.id} className="single-tm">
                            <img src={testimonial.img} alt="" />
                            <p>"{testimonial.review}"</p> <br />
                            <h6>{testimonial.name}</h6>
                        </div>
                    )
                }
            </section>
        </div>



    );
};

export default Testimonial;