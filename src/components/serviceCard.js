import React from 'react';

function ServiceCard(props) {
    return (
        <div className="bg-[#FADCD2] w-72 md:w-96 h-80 flex flex-col justify-center items-center rounded-xl px-8 md:px-14 py-8 mx-8  mt-8 relative">
            <div className="w-24 h-24 rounded-full gradient-bg absolute -top-12 md:-top-6  md:-left-10 flex justify-center items-center ">
                <h4 className='text-cream text-center md:-rotate-12'>{props.packageName}</h4>
            </div>
            <div className="flex flex-col justify-between h-full">
                <h2 className="title-text text-xl">{props.title}</h2>
                <p>{props.description}</p>
                <h3 className='title-text'>{props.useCase}</h3>
            </div>
        </div>
    );
}

export default ServiceCard;