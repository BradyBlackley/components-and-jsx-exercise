import React from 'react';

//const numbersToDisplay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Numbers(props) {
    let numbersToDisplay = [];

    for(let i = props.min; i <= props.max; i++) {
        numbersToDisplay.push(i);
    }
    return (<div className="numbersList">
        <ul>
            {numbersToDisplay.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>
    </div>);
}

export default Numbers;