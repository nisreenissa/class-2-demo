'use strict';

// var username = prompt('please enter you name');
// alert('Wlecome ! and Thank you for visting us ' + username);

// var Q1 = prompt('do you have computer skills ? answer with yes or no or with y or n');

// if (Q1.toLowerCase() === 'yes' || Q1.toLowerCase() === 'y') {
// alert('fantastic!');
//     //console.log('if you have computer skills then you can be my partner');
// }

// else if (Q1.toLowerCase() === 'no' || Q1.toLowerCase() === 'n') {
// alert('too bad you should practice');
// }


// else {
//     alert('please next time enter yes or no');
// }

// var Q2 = prompt('do you like HTML ? answer with yes or no or with y or n ');

// if (Q2.toLowerCase() === 'yes' || Q2.toLowerCase() === 'y') {
//     //console.log('if you have computer skills then you can be my partner');
//     alert('fantastic!');
// } else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n') {
//     alert('too bad you should practice');
// }

// else {
//     alert('please next time enter yes or no');
// }



// var Q3 = prompt('do you like CSS ? answer with yes or no or with y or n ');

// if (Q3.toLowerCase() === 'yes' || Q3.toLowerCase() === 'y') {
//     //console.log(' you can be my partner');
//     alert('fantastic!');
// }

// else if (Q3.toLowerCase() === 'no' || Q3.toLowerCase() === 'n') {
//     alert('too bad you should practice');
// }

// else {
//     alert('please next time enter yes or no');
// }

// var Q4 = prompt('do you like JavaScript ? answer with yes or no or with y or n');

// if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {
//     //console.log(' you can be my partner');

// //     alert('fantastic!');
// // }

// // else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {
// //     alert('too bad you should practice');
// // }

// // else {
// //     alert('please next time enter yes or no');
// // }

// // var Q5 = prompt('do you like ltuc ? answer with yes or no , Or you can answer with y or n');


// // if (Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y') {
// //     //console.log(' you can be my partner');

// //     alert('fantastic!');
// // }
// // else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n') {
// //     alert('too bad you should practice');
// // }
// // else {
// //     alert('please next time enter yes or no');
// // }

//lab3
Var score =0;
var myAge = 27;
var attempts  = 0;
while (attempts < 4){
attempts++;
 var UserInput = parseInt(prompt('Quess  my age?'));

if (UserInput === myAge) {
alert('Yes that is correct');
score = score + 1 ;

 break;
} 
else if (UserInput > myAge) {
alert ('Too high!')
} 
else if (UserInput < myAge) {
 alert('Too low!');
}  

}


var colledgeYears = 4 ;
var attempts  = 0;
while (attempts < 4) {
attempts++;
 var UserInput = parseInt(prompt('Quess  how many years i spent in the universsity?'));

if (UserInput === colledgeYears) {
alert('Yes that is correct');
score = score + 1 ;

 break;
} 
else if (UserInput >colledgeYears) {
alert ('Too high!')
} 
else if (UserInput < colledgeYears) {
 alert('Too low!');
}
}


var Sisters = 4 ;
var attempts  = 0;
while (attempts < 4) {
attempts++;
 var UserInput = parseInt(prompt('Quess  how many sisters i have?'));

if (UserInput === Sisters) {
alert('Yes that is correct');
score = score + 1 ;

 break;
} 
else if (UserInput >Sisters) {
alert ('Too high!')
} 
else if (UserInput < Sisters) {
 alert('Too low!');
}
}

var brothers = 3 ;
var attempts  = 0;
while (attempts < 4) {
attempts++;
 var UserInput = parseInt(prompt('Quess  how many sisters i have?'));

if (UserInput === brothers) {
alert('Yes that is correct');
score = score + 1 ;

 break;
} 
else if (UserInput > brothers) {
alert ('Too high!')
} 
else if (UserInput < brothers) {
 alert('Too low!');
}
}

var travels = 6 ;
var attempts  = 0;
while (attempts < 4) {
attempts++;
 var UserInput = parseInt(prompt('Quess  how many many time i have traveled ?'));

if (UserInput === travels) {
alert('Yes that is correct');
score = score + 1 ;

 break;
} 
else if (UserInput > travels) {
alert ('Too high!')
} 
else if (UserInput < travels) {
 alert('Too low!');
}
}

//Q1 

// var q7 = ['nada','rawan','yasmin','raya'];
// var guess;
// var flag = false;
// var counter = 0;
// for(var i = 0 ; i < 6; i++){
//    guess = prompt('whos my fav friend');
//    for(var j = 0; q7.length; j++){
//        if(guess === q7[j]){
//            alert('correct answer');
//            flag = true;
//            break;
//        }else{
//            guess = prompt('false try again');
//            counter++;
//            if(counter === 6){
//                alert('herea are my fav friends '+q7)
//                break;
//            }
//        }
//    }
//    if(flag === true){
//        break;
//    }

    // i will ask the user each time and i will loop through the array
    


var Q7 =['nada','rawan','yasmin','raya'];
for (var c = 6 ; c >= 1 ; c--){
    for(var Index=0 ; Index <=3 ;Index++){
        var UserQ7=prompt('guess one of my favourite firends');


    if(UserQ7.toLowerCase()===Q7[Index]){
    alert('this is a correct answer');
    score = score + 1 ;
    
    }
    else{ alert('that is incorrect');
}
    }}

    alert('your score is'+score);



