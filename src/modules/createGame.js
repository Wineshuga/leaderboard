const createGame = async (gameInfo) => {
  const createGameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

  const response = await fetch(createGameUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameInfo),
  });
  const gameId = await response.json();

  return gameId;
};

export default createGame;