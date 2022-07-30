import React from 'react';

function ServiceCard(props) {
    return (
        <div className="bg-[#FADCD2] w-1/3 h-80 rounded-xl px-12 py-8 mx-4">
            <div className="w-20 h-20 rounded-full gradient-bg">
                <p className='text-cream'>Day at Dino Beach</p>
            </div>
            <h2 className="title-text">Single-Page Landing Site</h2>
            <p>some text describing it goes here</p>
            <h3 className='title-text'>Perfect for: product ads, restaurants</h3>
        </div>
    );
}

export default ServiceCard;