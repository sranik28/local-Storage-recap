import React from 'react';

const RightSiteCard = () => {
    return (
        <div>
            <h1>side card</h1>
            <h1>My Cart</h1>

            <div className="mt-5 text-center">
                <p>total watch time</p>
                <input type="text" disabled />
            </div>
            <h5 className="mt-5">Add Break time</h5>
            <button

                className="w-25 btn-circle m-1 btn btn-info"
            >
                15
            </button>
            <button className="w-25 btn-circle bg-warning btn btn-info">20</button>
            <button className="w-25 btn-circle m-1 bg-danger btn btn-info">25</button>
            <input type="text" disabled />
            <button className="mt-5 btn btn-info w-100">
                Complete
            </button>
        </div>
    );
};

export default RightSiteCard;