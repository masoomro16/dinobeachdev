import React from 'react';
import Layout from '../components/layout';
import leftImg from '../images/about-img-left.png'
import rightImg from '../images/about-img-right.png'
function About(props) {
    return (
        <Layout pageTitle="About">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:grid md:grid-rows-[125px_400px_125px] md:grid-cols-5">
                    <img className="md:col-span-2 md:row-start-1 md:row-end-2 md:col-start-1" src={leftImg} alt='about image'/>
                    <div className="md:col-span-3 md:row-start-2 md:row-end-3 md:col-start-2 z-40">
                        <h1 className="title-text gradient-text font-extrabold text-2xl md:text-7xl">
                            We're Maira & Alex, something goes here
                        </h1>
                    </div>
                    <img className='hidden md:block md:col-span-2 md:row-start-2 md:row-end-4 md:col-start-4' src={rightImg} alt='about image'/>
                </div>
                <div>
                    <p>
                        Here is some stuff about us blah blahw-full 
                        Here is some stuff about us blah blahw-full 
                        Here is some stuff about us blah blahw-full 
                        Here is some stuff about us blah blahw-full 
                    </p>
                    <p>
                        Here is some stuff about us blah blahw-full 
                        Here is some stuff about us blah blahw-full 
                        Here is some stuff about us blah blahw-full 
                        Here is some stuff about us blah blahw-full 
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default About