import useSWR from "swr";
import ROUTES from './routes'

export const fetcher = (url, data = {}) => {
    
    const init = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        ...data
    }
    return fetch(url,init).then(res=> res.json());
}


export const getGame = async (gameId = null) => {
    return fetcher(ROUTES.get_game(gameId))
}

export const createGame = async () => {
    return fetcher(
        ROUTES.create,
        {
            method: 'POST',
        }
    )
}

export const makeMove = (gameId, move) => {
    return fetcher(
        ROUTES.make_move(gameId),
        {
            method: 'PUT',
            body: JSON.stringify({'move':move}),
        }
    )
}