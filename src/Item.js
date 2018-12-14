import React from 'react';

import Counter from './Counter';

const Item = ({description, totalReturned, totalAvailable, changeTotalReturned, id}) => {
    return (
        <div className="item">
            <span className="description">{description}</span>
            <span className="total-returned">{totalReturned}</span>
            of
            <span className="total-available">{totalAvailable}</span>
            <Counter
                max={totalAvailable}
                id={id}
                changeTotalReturned={changeTotalReturned}
                value={totalReturned}/>
        </div>
    )
}

export default Item;