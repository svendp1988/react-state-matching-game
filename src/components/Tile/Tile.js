import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const color = props.selected || props.matched ? { backgroundColor: props.color } : null;

  function handleTileClick() {
    props.handleTileClicked(props.id, props.color);
  }

  return (
      // Module 2: how does .svg get assigned to props?
      // -> in utils.js in the createTiles() method.
    <div className='Tile' style={color} onClick={handleTileClick}>
      {props.selected || props.matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile
