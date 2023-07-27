const leaderLists = (leaderData) => {
  const leaderUl = document.createElement('ul');
  leaderUl.className = 'leaders-list';
  leaderData.forEach((leader) => {
    leaderUl.innerHTML += `
      <li> ${leader.user}: ${leader.score}</li>
    `;
  });
  const leadersBox = document.querySelector('.leaders-box');
  leadersBox.innerHTML = '';
  leadersBox.appendChild(leaderUl);
};

export default leaderLists;