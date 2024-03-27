import React from 'react';

const Card = ({ name, id, email }) => {
    return (
        <div className='bg-light-blue tc br3 ma2 pa3 grow dib bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>
                    {email}
                </p>
            </div>
        </div>
    );
}

export default Card;