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

var scores, roundScore, activePlayer, gamePlaying;
/*, dice 28번줄에 지역변수로 선언했기에 사용불가 */
init(); // 함수 선언식을 사용했기에 여기에 써도 실행 됨

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;








        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. Update the round score IF the rooled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector(
                '#current-' + activePlayer
            ).textContent = roundScore;
        } else {
            //  Next player
            nextPlayer();
        }
    }
});
// 콜백함수 : 다른 함수에 전달하는 함수

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent =
            scores[activePlayer];

        // Check the 누가 이겼나 this game
        // 100점 먼저 얻으면 승리
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent =
                'Player ' + (activePlayer + 1) + ' Win!!';
            document.querySelector('.dice').style.display = 'none';
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.add('winner');
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.remove('active');
            gamePlaying = false;
        } else {
            //  Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Next player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-pannel').classList.remove('active');
    // document.querySelector('.player-1-pannel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

// 선언식
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
