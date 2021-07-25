"use strict";

// 점수를 나타내는 element
const score1El = document.getElementById("score-1");
const score2El = document.getElementById("score-2");

// 주사위 이미지 element
const diceEl = document.querySelector(".diceImg");

// 버튼 element
const resetBtn = document.querySelector(".reset");
const rollBtn = document.querySelector(".roll");
const saveBtn = document.querySelector(".save");
const allBtns = document.querySelectorAll('.btn');

console.log(allBtns)

// 플레이어 element
const player1El = document.getElementById("player-1");
const player2El = document.getElementById("player-2");

// 플레이어 총 점수 element
const currentScore1El = document.getElementById("current-1");
const currentScore2El = document.getElementById("current-2");

// 초기 상태
score1El.textContent = 0;
score2El.textContent = 0;
let currentScore = 0;
let currentPlayer = 1;
let lastScore = [0, 0];

// 플레이어 변경 function
const changePlayer = () => {
    if (currentPlayer === 1) {
        currentScore1El.textContent = 0;
        currentPlayer = 2;
    } else {
        currentScore2El.textContent = 0;
        currentPlayer = 1;
    }
    player1El.classList.toggle("player-active");
    player2El.classList.toggle("player-active");
};

// 점수 세이브 function
const saveScore = () => {
    // 점수 세이브
    if (currentPlayer === 1) {
        lastScore[0] += currentScore;
        currentScore = 0;
        score1El.textContent = lastScore[0];
    } else {
        lastScore[1] += currentScore;
        currentScore = 0;
        score2El.textContent = lastScore[1];
    }
    console.log(lastScore,currentPlayer)
    // 만약 점수가 100점 이상이면 승리
    if (lastScore[currentPlayer-1] >= 100) {
        document.getElementById(`player-${currentPlayer}`).classList.add("player-winner");
        document
            .getElementById(`player-${currentPlayer}`)
            .classList.remove("player-active");
        rollBtn.disabled = true;
    } // 플레이어 변경
    else changePlayer(currentPlayer);
};

// 주사위 굴리기 event
rollBtn.addEventListener("click", () => {
    // 1. 숫자 생성
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    // 2. 숫자에 맞는 주사위이미지 생성
    diceEl.classList.remove("hidden");
    diceEl.src = `./dice_img/dice-${diceNum}.png`;
    console.log(diceNum);
    // 3. 숫자가 1일 경우 플레이어 체인지
    // 아닐 경우 점수 추가
    if (diceNum !== 1) {
        currentScore += diceNum;
        currentPlayer === 1
            ? (currentScore1El.textContent = currentScore)
            : (currentScore2El.textContent = currentScore);
    } else {
        currentScore = 0;
        currentPlayer === 1 ? changePlayer(1) : changePlayer(2);
    }
});

saveBtn.addEventListener("click", () => {
    saveScore();
});

// 게임 재시작 event
resetBtn.addEventListener("click", () => {
    diceEl.classList.add("hidden");
    score1El.textContent = 0;
    score2El.textContent = 0;
    currentScore = 0;
    if (currentPlayer === 2) {
        player1El.classList.toggle("player-active");
        player2El.classList.toggle("player-active");
        currentPlayer = 1;
    }
    lastScore = [0, 0];
    score1El.textContent = lastScore[0];
    score2El.textContent = lastScore[1];
});
