var numberslow = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var numbershigh = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
var symbols = ['-', '+'];
var newsums = document.getElementById('newsums');
var finished = document.getElementById('finished');
var answers = document.getElementsByClassName('textarea')
var output = document.getElementsByClassName('result')
var questions = document.getElementsByClassName('question')
var wordsOfEncouragement = document.getElementsByClassName('question response');
var random = "";
var num = ""
var answer = [];
var count = 0

//Add an event listener for each item in the buttona class
newsums.addEventListener('click', function (event) {
    event.stopPropagation

    for (var i = 0; i < (answers.length); i++) {
        answers[i].value = ""
        output[i].innerText = ""
    }
    answer = []
    for (var i = 0; i < (questions.length - 1); i++) {
        getRandom(numbershigh);
        num = num + random;
        correct = parseInt(random);
        getRandom(symbols);
        num = num + random;
        symbol = random
        getRandom(numberslow);
        num = num + random;
        if (symbol === "+") {
            correct = (correct + parseInt(random));
        }
        else {
            correct = (correct - parseInt(random))
        }
        questions[i].innerHTML = num;
        answer.push(correct)
        num = "";
    }
})

function getRandom(arr) {

    //create the array random item and return item value to other function
    random = arr[Math.floor(Math.random() * arr.length)];
    return (random);
}

finished.addEventListener('click', function (event) {
    event.stopPropagation
    for (var i = 0; i < answers.length; i++) {
        if (answer[i] === (parseInt(answers[i].value))) {
            output[i].innerText = "Well done"
            count === count + 1
        } else {
            output[i].innerText = "Bad luck"
        }
    }
    if (count > 7) {
        wordsOfEncouragement[0].innerText = "Awesome Work"
    } else if (count > 4 && count < 8) {
        wordsOfEncouragement[0].innerText = "Try another one"
    } else {
        wordsOfEncouragement[0].innerText = "Did Brian have a go?"
    }

})