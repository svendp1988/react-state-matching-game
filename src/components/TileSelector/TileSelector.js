import React from 'react'
import './TileSelector.css'
import Number from "./Number";

const TileSelector = (props) => {
    const numbers = [4, 16, 36];

    const dropdown = (
        <div className='tileSelectorContent'>
            {
                numbers.map((number, index) =>
                    <Number
                        key={index}
                        number={number}
                        handleNumTileChange={props.handleNumTileChange}
                    />)
            }
        </div>
    )


    return (
        <div className='tileSelector' >
            <div>Number of Tiles</div>
            <div className='tileSelectorDropdown'>
                {props.numTiles}
                {dropdown}
            </div>
        </div>
    )
}

export default TileSelector
