//Math.floor(Math.random() * 45 + 1);
//console.log(Math.floor(Math.random() * 45 + 1))

var games = prompt(
    "몇 게임을 하시겠습니까?? \n 최소 1 게임 이상 또는 5게임 이하로 입력해야 합니다."
);
var gamesNum = parseInt(games);

if (gamesNum <= 0 || gamesNum > 5) {
    while (gamesNum <= 0 || gamesNum >= 6) {
        console.log("최소 1 게임 이상 또는 5게임 이하로 입력해야 합니다.");
        var games = prompt(
            "몇 게임을 하시겠습니까?? \n 최소 1 게임 이상 또는 5게임 이하로 입력해야 합니다."
        );
        var gamesNum = parseInt(games);
    }
    gameplay();
} else {
    gameplay();
}

function gameplay() {
    for (let j = 0; j < gamesNum; j++) {
        var numbers = [];

        for (let i = 1; i <= 45; i++) {
            numbers.push(i);
        }
        var resultNumber = [];

        for (let i = 0; i <= 5; i++) {
            var result = Math.floor(Math.random() * 45 + 1);
            resultNumber.push(result);
            numbers.splice(numbers.indexOf(result), 1);
        }

        var sortedResultNumber = resultNumber.sort(function(a, b) {
            return a - b;
        });
        //console.log(numbers);
        console.log(sortedResultNumber);
    }
}

//for (let i = 0; i <= 5; i++) {
//    var numbers = [];
//
//    while (numbers.length < 6) {
//        var number = Math.floor(Math.random() * 45 + 1);
//        if (numbers.indexOf(number === -1)) {
//            numbers.push(number);
//        }
//    }
//
//    numbers.sort(function(a, b) {
//        return a - b;
//    });
//
//    console.log(numbers);
//}
