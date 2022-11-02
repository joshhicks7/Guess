import React from 'react';
import './style.css'
import { useGame } from './Hooks';
import { makeMove } from '../Api';


const Game = ({game_id}) => {
    const { data, error } = useGame(game_id);

    const ClickHandler = async (value) => {
        const result = await makeMove(game_id, value);
        console.log(result)
    }

    return <div className='game'>
        <h1>Game ID: {game_id}</h1>
        <div className = 'numbers'>
            {
                new Array(10).fill(0).map((_, idx) => {
                    const val = idx + 1;
                    return (
                        <div className='number' key = {idx} onClick = {() => ClickHandler(val)}>
                            {val}
                        </div>
                    );
                })
            }
        </div>
    </div>
}

export default Game;