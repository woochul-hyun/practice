function input() {
    var inputVal = document.getElementById("gameCount").value;
    if (inputVal <= 0 || inputVal > 5) {
        alert("최소 1 게임 이상 또는 5게임 이하로 입력해야 합니다.");
        document.querySelectorAll("#resultList").forEach(function(a) {
            a.remove();
        });
        document.getElementById("gameCount").value = null;
    } else {
        document.querySelectorAll("#resultList").forEach(function(a) {
            a.remove();
        });
        gameplay();
        document.getElementById("gameCount").value = null;
    }
}
var sortedResultNumberArry = [];
//function gameplay() {
//    sortedResultNumberArry = [];
//    for (let j = 0; j < document.getElementById("gameCount").value; j++) {
//        var numbers = [];
//
//        for (let i = 1; i <= 45; i++) {
//            numbers.push(i);
//        }
//        var resultNumber = [];
//
//        for (let i = 0; i <= 5; i++) {
//            var result = Math.floor(Math.random() * 45 + 1);
//            resultNumber.push(result);
//            numbers.splice(numbers.indexOf(result), 1);
//        }
//
//        var sortedResultNumber = resultNumber.sort(function(a, b) {
//            return a - b;
//        });
//        console.log(numbers);
//        console.log(sortedResultNumber);
//        sortedResultNumberArry.push(sortedResultNumber);
//    }
//    resultShow(
//        document.getElementById("pickedNumbers"),
//        sortedResultNumberArry
//    );
//}
function gameplay() {
    var inputVal = document.getElementById("gameCount").value;
    sortedResultNumberArry = [];
    for (i = 0; i < document.getElementById("gameCount").value; i++) {
        var numbers = [];
        while (numbers.length < 6) {
            var number = Math.floor(Math.random() * 45 + 1);
            if (numbers.indexOf(number) == -1) {
                numbers.push(number);
            }
        }
        var sortedResultNumber = numbers.sort(function(a, b) {
            return a - b;
        });
        sortedResultNumberArry.push(sortedResultNumber);
        console.log(sortedResultNumber);
    }
    resultShow(
        document.getElementById("pickedNumbers"),
        sortedResultNumberArry
    );
    totalCostShow(document.getElementById("totalCost"), inputVal);
}

function resultShow(list, sortedResultNumberArry) {
    for (let j = 0; j < document.getElementById("gameCount").value; j++) {
        var listItem = document.createElement("li");
        listItem.id = "resultList";
        var resultItems = document.createElement("span");
        resultItems.id = "resultItemList";
        resultItems.innerText = sortedResultNumberArry[j];
        list.appendChild(listItem);
        listItem.appendChild(resultItems);
    }
}

function totalCostShow(a, inputVal) {
    document.querySelectorAll("#totalCostHtml").forEach(function(a) {
        a.remove();
    });

    var totalCost = inputVal * 1000;

    var totalCostHtml = document.createElement("p");
    totalCostHtml.id = "totalCostHtml";
    totalCostHtml.innerText = totalCost + "원 입니다.";

    a.appendChild(totalCostHtml);
}
