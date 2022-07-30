import React from 'react';

function ServiceCard(props) {
    return (
        <div className="bg-[#FADCD2] w-96 h-80 rounded-xl px-14 py-8 mx-8 relative">
            <div className="w-24 h-24 rounded-full gradient-bg absolute -top-6 -left-10 flex justify-center items-center">
                <h4 className='text-cream text-center -rotate-12'>{props.packageName}</h4>
            </div>
            <h2 className="title-text text-xl">{props.title}</h2>
            <p>{props.description}</p>
            <h3 className='title-text'>{props.useCase}</h3>
        </div>
    );
}

export default ServiceCard;