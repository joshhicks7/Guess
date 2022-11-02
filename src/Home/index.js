import React, { useState } from 'react';
import './style.css';
import {
    createGame
} from '../Api'

const Home = ({setGameId}) => {

    const [id, setId] = useState('');

    const JoinGame = () => {
        const response = fetch()
    }

    const CreateGame = async () => {
        const data = await createGame();
        setGameId(data.game_id)
    }
    return (
        <div className = "Home">
            <input onChange={(e)=>setId(e.target.value)} value={id} type="text" placeholder="Game Id..."></input>
            <button onClick={JoinGame}>Join Game</button>
            or
            <button onClick={CreateGame}>Create Game</button>
        </div>
    );
};

export default Home;