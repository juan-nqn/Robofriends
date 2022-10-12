import React from 'react';

const Card = ({name, email, id}) => { //name email e id son las prop del objeto robots

    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2> {name}</h2>
                <p> {email}</p>
            </div>
        </div>
    )
}

export default Card;