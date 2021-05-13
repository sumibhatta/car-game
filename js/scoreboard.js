let scoreBoard = document.getElementById('scoreboard')

let scoreBoardTitle = document.createElement('h1');
scoreBoardTitle.setAttribute('id', 'scoreboard-title');
scoreBoardTitle.innerHTML = "Score Board";
scoreBoard.appendChild(scoreBoardTitle);

let score = document.createElement('div');
score.setAttribute('id', 'score');
scoreBoard.appendChild(score);
