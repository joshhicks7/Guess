import useSWR from 'swr';
import { getGame } from '../Api';
import ROUTES from '../routes';

export const gameFetcher = (url) => fetch(url).then((res) => res.json());

export const useGame = (game_id) => {
    const { data, error } = useSWR(
        game_id,
        getGame,
    );

    return {
        game: data,
        error
    };
};
