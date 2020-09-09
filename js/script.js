'use strict'


// greeting
var userName = prompt('what is your name ? ');
console.log(userName);
alert('Welcome ' + userName);

alert(' let\'s take a quick silly quiz ' + userName);



// Q.1
function q1() {
    var ss = prompt('What is my favirote food');
    if (ss == 'steak'.toLowerCase()) {
        //console.log(favFood);
        alert('yes, yor are smart');


    } else {
        alert(' Nah! I am fancy. I love steak');
    }

}

q1();


// Q.2
function q2() {
    var loveAnimal = prompt(' Do I love animals (Hint: ew) ?');
    if (loveAnimal == 'no'.toLowerCase()) {
        //console.log(loveAnimal);
        alert('Yes, thank you, I hate them');


    } else {
        alert('NO NO NO ! I hate them');
    }
}
q2();


//Q.3
function q3() {
    var favShow = prompt('what is my fav comedy show, Friends or The Office?');
    if (favShow == 'the office'.toLowerCase()) {
        //console.log(favShow);
        alert('yes, high five Micheal Scott');

    } else {
        alert('no, but I love chandler');
    }
}
q3();

//Q.4
function q4() {
    var myPhone = prompt('do I love Iphone? ');
    if (myPhone == 'yes'.toLowerCase()) {
        //console.log(myPhone);
        alert('Yes, We Love Apple');


    } else {
        alert('No! we hate samsung');
    }
}
q4();


//Q.5
function q5() {
    var myHeight = prompt('do you think I am short?');
    if (myHeight == 'yes'.toLowerCase()) {
        // console.log(myHeight);
        alert('Ouch! you hurt my feelings. But YES I am short');
    } else {
        alert('Thank you! But no, I am short');


    }
}
q5();

//Q.6 >> Lab3: guess a number
function q6() {
    var luckNum = prompt('guess what is my luck number ?');

    for (var i = 1; i <= 6; i++) {
        if (luckNum == 3) {
            alert('correct! my luck number is 3');

        } else if (luckNum > 3) {
            alert('no! too high');
        } else {
            alert('no!too low');
        }
        break;
    }
}
q6();



//Lab3: Q.7 >>  ASK SHIHAB 

//while(favFruite!=fruits){
//  favFruite=prompt('try again:');
//break;
//}
//if ( favFruite==fruits) {
//  alert('corret');
//}
function q7() {
    var fruits = ['orange', 'mango', 'peache'];
    for (var x = 0; x < 6; x++) {
        var favFruite = prompt('Let\'s talk Healthy: Guess What is my Favorite fruit?').toLowerCase();
        console.log(x);
        if (favFruite === fruits[0] || favFruite === fruits[1] || favFruite === fruits[2]) {
            alert('ً Correct!!');
            break;
        } else {
            alert('Wrong answer please try again');
        }
    }
}
q7();
//Final score    >> ASK SHIHAB