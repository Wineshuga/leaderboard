import './style.css';
import leaderLists from './modules/leadersLists.js';
import { getScores, postScores } from './modules/dataFunctions.js';
import createGame from './modules/createGame.js';

let gameId = '';
const gameInfo = { name: 'wineshuga crush' };
createGame(gameInfo).then((id) => {
  gameId = id.result.slice(14, -7);
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#your-name');
  const userScore = document.querySelector('#your-score');

  const leader = {
    user: username.value,
    score: userScore.value,
  };
  postScores(leader, gameId);
  username.value = '';
  userScore.value = '';
});

const refreshBtn = document.querySelector('.lists > button');
refreshBtn.addEventListener('click', () => {
  getScores(gameId).then((data) => {
    const leaderData = data.result;
    leaderLists(leaderData);
  });
});