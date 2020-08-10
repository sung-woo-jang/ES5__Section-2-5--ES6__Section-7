/* 
1. 플레이어는 두 개의 6을 연속으로 굴리면 전체 점수를 잃는다.
그 다음엔 다음 선수 차례다.
(Hint : 이전 주사위롤은 항상 별도의 변수에 저장)

2. 플레이어가 승리 점수를 설정할 수 있는 입력 필드를 HTML에 추가하여 미리 정의된 점수인 100점을 변경할 수 있도록 한다.
(Hint : JavaScript의 .value 속성으로 그 값을 읽을 수 있다.
이것은 구글을 사용하여 이것을 알아내기에 좋은 기회다 )

3. 게임에 주사위를 하나 더 추가해서 지금 두 개의 주사위가 생기도록 한다.
그 선수는 그 중 한 명이 1점일 때 현재 점수를 잃는다.
(힌트 : 두 번째 주사위를 위치시키기 위해서는 CSS가 필요하므로 첫 번째 주사위의 CSS 코드를 살펴보자.) 
*/

var scores, roundScore, activePlayer, gamePlaying;
var preScore, winScore;

/*, dice 28번줄에 지역변수로 선언했기에 사용불가 */
init(); // 함수 선언식을 사용했기에 여기에 써도 실행 됨

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rooled number was NOT a 1

        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector(
                '#current-' + activePlayer
            ).textContent = roundScore;
        } else {
            //  Next player
            nextPlayer();
        }

        /* if (dice === 6 && preScore === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector(
                '#current-' + activePlayer
            ).textContent = roundScore;
        } else {
            //  Next player
            nextPlayer();
        }
        preScore = dice; */
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

        winScore = document.querySelector('.final-score').value;

        // Undefined, 0, null, or "" are COERCED(강제 처리됨) to false
        // Anything else is COERCED(강제 처리됨) to true
        if (winScore === false) {
            winScore = 100;
        }

        // Check the 누가 이겼나 this game
        // 100점 먼저 얻으면 승리
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent =
                'Player ' + (activePlayer + 1) + ' Win!!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

// 선언식
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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
