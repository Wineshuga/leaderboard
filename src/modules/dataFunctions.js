const postScores = async (leader, gameId) => {
  const postUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  const response = await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leader),
  });
  const result = await response.json();

  return result;
};

const getScores = async (gameId) => {
  const getUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  const response = await fetch(getUrl);
  const result = await response.json();
  return result;
};

export { postScores, getScores };