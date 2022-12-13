
import React from 'react';
import Layout from '../components/layout';
import leftImg from '../images/about-img-left.png'
import rightImg from '../images/about-img-right.png'
function About(props) {
    return (
        <Layout pageTitle="About">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-rows-[125px_400px_125px] grid-cols-5">
                    <img className="col-span-2 row-start-1 row-end-2 col-start-1" src={leftImg} alt='about image'/>
                    <div className="col-span-3 row-start-2 row-end-3 col-start-2 z-40">
                        <h1 className="title-text gradient-text font-extrabold text-2xl md:text-7xl">
                            We're Maira & Alex, something goes here
                        </h1>
                    </div>
                    <img className='col-span-2 row-start-2 row-end-4 col-start-4' src={rightImg} alt='about image'/>
                </div>
                <div>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                </div>
            </div>
        </Layout>
    );
}

export default About;
