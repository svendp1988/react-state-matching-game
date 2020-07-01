import React from 'react'
import './Board.css';
import Tile from "../Tile";

const Board = (props) => {
  /* Module 2: why spread the tile here?
     -> In this board component I don't really care which properties tile has. I pass them all to the Tile component.
        By spreading tile here I'm able to access all of the props I might need in the Tile component.
        The properties of the object that you pass in are copied onto the component's props.
        Another option would be to do it like this: "selected={tile.selected} matched={tile.matched} svg={tile.svg}"
        That way I could access the props that I have given the same name in the Tile component.
        Or like this: "tile={tile}". That way I'd have to use props.tile.propName in the Tile component to access the same property. */
  const tiles = props.tiles.map((tile) => <Tile {...tile}/>)

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }

  return (
    <div className='Board' style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
