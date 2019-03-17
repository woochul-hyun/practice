var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

function onComputerShoot() {
    if (!isComputerTurn) {
        return;
    }

    var textElem = document.getElementById("text");
    var comScoreElem = document.getElementById("computer-score");
    var shootType = Math.random() < 0.5 ? 2 : 3;

    if (shootType === 2) {
        if (Math.random() < 0.5) {
            textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다.";
            comScore = comScore + 2;
            comScoreElem.innerHTML = comScore;
        } else {
            textElem.innerHTML = "컴퓨터가 2점슛을 실패했습니다.";
        }
    } else {
        if (Math.random() < 0.33) {
            textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다.";
            comScore = comScore + 3;
            comScoreElem.innerHTML = comScore;
        } else {
            textElem.innerHTML = "컴퓨터가 3점슛을 실패했습니다.";
        }
    }
    isComputerTurn = false;
}

function onUserShoot(shootType) {
    if (isComputerTurn) {
        return;
    }

    var textElem = document.getElementById("text");
    var userScoreElem = document.getElementById("user-score");

    if (shootType === 2) {
        if (Math.random() < 0.5) {
            textElem.innerHTML = "2점슛이 성공했습니다..";
            userScore = userScore + 2;
            userScoreElem.innerHTML = userScore;
        } else {
            textElem.innerHTML = "2점슛이 실패했습니다..";
        }
    } else {
        if (Math.random() < 0.33) {
            textElem.innerHTML = "3점슛이 성공했습니다.";
            userScore = userScore + 3;
            userScoreElem.innerHTML = userScore;
        } else {
            textElem.innerHTML = "3점슛이 실패했습니다.";
        }
    }
    isComputerTurn = true;
    shotsLeft = shotsLeft - 1;
    var computerButtons = document.getElementsByClassName("btn-computer");
    var userButtons = document.getElementsByClassName("btn-user");

    var shotsLeftElem = document.getElementById("shots-left");
    shotsLeftElem.innerHTML = shotsLeft;
    if (shotsLeft === 0) {
        if (userScore > comScore) {
            textElem.innerHTML = "승리했습니다.";
        } else if (userScore < comScore) {
            textElem.innerHTML = "아쉽게도 졌습니다.";
        } else {
            textElem.innerHTML = "비겼습니다.";
        }
        for (var i = 0; i < computerButtons.length; i++) {
            computerButtons[i].disabled = true;
        }
        for (var i = 0; i < userButtons.length; i++) {
            userButtons[i].disabled - true;
        }
    }
}
