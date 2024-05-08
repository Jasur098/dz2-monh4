import React, { useState } from 'react';
import data from '../data/db.json';

function Button() {
    const [showData, setShowData] = useState(false);

    const handleClick = () => {
        setShowData(!showData);
     
    };

    return (
        <div>
            <button onClick={handleClick}> Cart</button>
            {showData && (
                <div className='modalCart'>
                    {data.map((item) => (
                        <div className='modalCartDiv' key={item.id}>
                            <img className='img' src={item.image} alt="" />
                            <p>{item.title}</p>
                            <button>delete  </button>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Button;
