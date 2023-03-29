import React from 'react';

const SideCard = ({ singleCard }) => {
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-center'>main card</h1>
                    <div className="grid grid-cols-3">
                        <div className='flex justify-around'>
                            <div className="card w-52 bg-base-100 shadow-xl">
                                <figure><img className='w-24 py-2 ' src={singleCard.poster} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-xl font-bold text-center">{singleCard.movieName}</h2>
                                    <p>Watch Time:{singleCard.watchTime} </p>
                                    <p>Rating: {singleCard.imdbRating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default SideCard;