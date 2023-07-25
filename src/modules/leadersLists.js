const leaderData = [
  {
    name: 'Name: ',
    score: 100,
  },
  {
    name: 'Name: ',
    score: 60,
  },
  {
    name: 'Name: ',
    score: 58,
  },
  {
    name: 'Name: ',
    score: 120,
  },
  {
    name: 'Name: ',
    score: 10,
  },
  {
    name: 'Name: ',
    score: 99,
  },
  {
    name: 'Name: ',
    score: 30,
  },
];

const leaderLists = () => {
  const leaderUl = document.createElement('ul');
  leaderUl.className = 'leaders-list';
  leaderData.forEach((leader) => {
    leaderUl.innerHTML += `
      <li>${leader.name} ${leader.score}</li>
    `;
  });
  const ul = document.querySelector('.lists');
  ul.appendChild(leaderUl);
};

export default leaderLists;