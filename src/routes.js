const BASE_URL = "https://Guess.joshuahicks3.repl.co";

const ROUTES = {
    create:`${BASE_URL}/create`,
    get_game: (gameId) => `${BASE_URL}/game/${gameId}`,
    make_move: (gameId) => `${BASE_URL}/game/${gameId}/move`
};

export default ROUTES;