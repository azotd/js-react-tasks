import React from 'react';

// BEGIN (write your solution here)
const getCard = ({title, text}) => {
    if (!title && !text){
        return null;
    }

    const titleCard = title ? <h4 className="card-title">{title}</h4> : null;
    const textCard = text ? <p className="card-text">{text}</p> : null;

    return (
        <div className="card">
            <div className="card-body">
                {titleCard}
                {textCard}
            </div>
        </div>
    );
};

export default getCard;
// END