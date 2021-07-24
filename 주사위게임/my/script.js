'use strict';

// 점수를 나타내는 element
const score1El = document.getElementById('score-1');
const score2El = document.getElementById('score-2');

// 주사위 이미지 element
const diceEl = document.querySelector('.diceImg');

// 버튼 element
const resetBtn = document.querySelector('reset');
const rollBtn = document.querySelector('.roll');
const saveBtn = document.querySelector('.save');

// 플레이어 element
const player1El = document.getElementById('player-1');
const player2El = document.getElementById('player-2');

// 플레이어 총 점수 element
const currentScore1El = document.getElementById('current-1');
const currentScore2El = document.getElementById('current-2');

// 초기 상태
score1El.textContent = 0;
score2El.textContent = 0;
let currentScore = 0;
let currentPlayer = 1;
let lastScore = [0,0];


