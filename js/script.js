'use strict'

var userName = prompt( 'what is your name ? ' );
console.log(userName);
alert ( 'Welcome '+ userName );

alert( ' let\'s take a quick silly quiz ' + userName);





var favFood= prompt( 'What is my favirote food');
if(favFood=='steak'.toLowerCase()){
    //console.log(favFood);
    alert( 'yes, yor are smart');

} else {
    alert(' Nah! I am fancy. I love steak');
}



var loveAnimal= prompt( ' Do I love animals (Hint: ew) ?');
if (loveAnimal=='no'.toLowerCase()){
    //console.log(loveAnimal);
    alert( 'Yes, thank you, I hate them');

} else {
    alert('NO NO NO ! I hate them');
}


var favShow=prompt('what is my fav comedy show, Friends or The Office?');
if(favShow=='the office'.toLowerCase()){
    //console.log(favShow);
    alert('yes, high five Micheal Scott');
} else {
    alert('no, but I love chandler');
}

var myPhone =prompt('do I love Iphone? ');
if (myPhone=='yes'.toLowerCase()){
    //console.log(myPhone);
    alert('Yes, We Love Apple');
} else {
    alert('No! we hate samsung');
}



var myHeight=prompt('do you think I am short?');
if (myHeight=='yes'.toLowerCase()){
   // console.log(myHeight);
   alert('Ouch! you hurt my feelings. But YES I am short');
} else {
    alert('Thank you! But no, I am short');
}
