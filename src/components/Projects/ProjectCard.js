import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const {name, link, image} = project;
    return (
        <div className='my-10 flex justify-center'>
            <div className="shadow w-96 bg-[#373255] rounded">
                <figure><img className='h-52 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={event =>  window.location.href=(link)} className='button' type="">Live Link</button>
                        <button className='button' type="">Code Link</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;