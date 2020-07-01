import React, {Component} from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import {createTiles, indexOfSelected} from "../../misc/utils";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numTiles: 36,
            playing: false,
            previousTileIndex: null,
            tiles: [],
            toBeCleared: null,
        }
        this.startGame = this.startGame.bind(this);
        this.handleNumTileChange = this.handleNumTileChange.bind(this);
    }

    startGame(numTiles) {
        // Module 2: Why create the tiles from previous state?
        // ->
        this.setState((state) => ({
                playing: true,
                previousTileIndex: null,
                toBeCleared: null,
                tiles: createTiles(state.numTiles, this.handleTileClicked)
            })
        )
    }

    handleTileClicked(id, color) {
        this.setState((state) => {
                const tiles = state.tiles;
                let toBeCleared = state.toBeCleared;
                const selectedTileIndex = indexOfSelected(tiles, id, color);
                let previousTileIndex = state.previousTileIndex;
                if (toBeCleared !== null) {
                    tiles[toBeCleared[0]].selected = false;
                    tiles[toBeCleared[1]].selected = false;
                    toBeCleared = null;
                }
                tiles[selectedTileIndex].selected = true;
                if (previousTileIndex !== null) {
                    const __ret = this.checkAndHandleMatch(tiles, previousTileIndex, selectedTileIndex);
                    previousTileIndex = __ret.previousTileIndex;
                    toBeCleared = __ret.toBeCleared;
                } else {
                    previousTileIndex = selectedTileIndex;
                }
                return {
                    tiles,
                    toBeCleared,
                    previousTileIndex,
                }
            }
        );
    }

    checkAndHandleMatch(tiles, previousTileIndex, selectedTileIndex) {
        let previousTile = tiles[previousTileIndex];
        let selectedTile = tiles[selectedTileIndex];
        let toBeCleared;
        if (previousTile.id !== selectedTile.id && previousTile.color === selectedTile.color) {
            tiles[selectedTileIndex].matched = true;
            tiles[previousTileIndex].matched = true;
            previousTileIndex = null;
        } else {
            toBeCleared = [previousTileIndex, selectedTileIndex];
            previousTileIndex = null;
        }
        return {previousTileIndex, toBeCleared};
    }

    handleNumTileChange(numberOfTiles) {
        this.setState((state) => {
            return {
                numTiles: numberOfTiles,
                playing: false,
                tiles: [],
            }
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Turbo-Matcher
                </header>
                <OptionsPanel
                    playing={this.state.playing}
                    numTiles={this.state.numTiles}
                    startGame={this.startGame}
                    handleNumTileChange={this.handleNumTileChange}
                />
                <Board
                    numTiles={this.state.numTiles}
                    tiles={this.state.tiles}
                />
                }
            </div>
        );
    }
}

export default App;
