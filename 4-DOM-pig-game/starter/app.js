/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- 이 경기는 2명이서 라운드를 한다.
- 턴마다 선수가 휘젓는 횟수만큼 주사위를 굴린다. 각 결과가 ROUNT 점수에 추가됨
- 하지만, 선수가 1점을 굴리면 라운드 점수가 모두 떨어진다. 그 다음엔 다음 선수 차례다.
- 플레이어는 'Hold'를 선택할 수 있는데, 이는 자신의 라운드 점수가 GLBAL 점수에 추가된다는 것을 의미한다. 그 다음엔 다음 선수 차례다.
- GLOBAL 점수에서 100점을 먼저 획득한 선수가 승리
*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';
