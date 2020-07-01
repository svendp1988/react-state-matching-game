import React from "react";

const Number = (props) => {

    function handleClick() {
        props.handleNumTileChange(props.number);
    }

    return (
        <div
            className='number'
            onClick={handleClick}
        >
            {props.number}
        </div>
    )
}

export default Number;
