'use strict';

// var username = prompt('please enter you name');
// alert('Welcome  ! and Thank you for visting us ' + username);

// var Q1 = prompt('do you have computer skills ? answer with yes or no or with y or n');

// if (Q1.toLowerCase() === 'yes' || Q1.toLowerCase() === 'y') {
// alert('fantastic!');
//var score=score+1;
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
//score=score++;
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
//score=score++;
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
// Var score =0;
// var myAge = 27;
// var attempts  = 0;
// while (attempts < 4){
// attempts++;
//  var UserInput = parseInt(prompt('Quess  my age?'));

// if (UserInput === myAge) {
// alert('Yes that is correct');
// score = score + 1 ;

//  break;
// } 
// else if (UserInput > myAge) {
// alert ('Too high!')
// } 
// else if (UserInput < myAge) {
//  alert('Too low!');
// }  

// }


// var colledgeYears = 4 ;
// var attempts  = 0;
// while (attempts < 4) {
// attempts++;
//  var UserInput = parseInt(prompt('Quess  how many years i spent in the universsity?'));

// if (UserInput === colledgeYears) {
// alert('Yes that is correct');
// score = score + 1 ;

//  break;
// } 
// else if (UserInput >colledgeYears) {
// alert ('Too high!')
// } 
// else if (UserInput < colledgeYears) {
//  alert('Too low!');
// }
// }


// var Sisters = 4 ;
// var attempts  = 0;
// while (attempts < 4) {
// attempts++;
//  var UserInput = parseInt(prompt('Quess  how many sisters i have?'));

// if (UserInput === Sisters) {
// alert('Yes that is correct');
// score = score + 1 ;

//  break;
// } 
// else if (UserInput >Sisters) {
// alert ('Too high!')
// } 
// else if (UserInput < Sisters) {
//  alert('Too low!');
// }
// }

// var brothers = 3 ;
// var attempts  = 0;
// while (attempts < 4) {
// attempts++;
//  var UserInput = parseInt(prompt('Quess  how many sisters i have?'));

// if (UserInput === brothers) {
// alert('Yes that is correct');
// score = score + 1 ;

//  break;
// } 
// else if (UserInput > brothers) {
// alert ('Too high!')
// } 
// else if (UserInput < brothers) {
//  alert('Too low!');
// }
// }

// var travels = 6 ;
// var attempts  = 0;
// while (attempts < 4) {
// attempts++;
//  var UserInput = parseInt(prompt('Quess  how many many time i have traveled ?'));

// if (UserInput === travels) {
// alert('Yes that is correct');
// score = score + 1 ;

//  break;
// } 
// else if (UserInput > travels) {
// alert ('Too high!')
// } 
// else if (UserInput < travels) {
//  alert('Too low!');
// }
// }

// var colors = 6 ;
// var attempts  = 0;
// while (attempts < 4) {
// attempts++;
//  var UserInput = parseInt(prompt('Quess  how many colors i like ?'));

// if (UserInput === colors) {
// alert('Yes that is correct');
// score = score + 1 ;

//  break;
// } 
// else if (UserInput > colors) {
// alert ('Too high!')
// } 
// else if (UserInput < colors) {
//  alert('Too low!');
// }
// }





// var Q7 = ['nada', 'rawan', 'yasmin', 'raya'];
// var UserQ7 = prompt('guess one of my favourite firends');


// for (var c = 0; c < 5; c++) {
//     for (var Index = 0; Index < Q7.length; Index++) {


//         if (UserQ7.toLowerCase() === Q7[Index]) {
//             alert('this is a correct answer');
//             //     score = score + 1 ;
//             c = 5;
//             break;
//         }

//     }
//      if(c==5){
//          break;
//      }
//      UserQ7 = prompt('try again');

// }

//     alert('your score is'+score);

// lab4

function question1() {
    Var score = 0;
    var myAge = 27;
    var attempts = 0;
    while (attempts < 4) {
        attempts++;
        var UserInput = parseInt(prompt('Quess  my age?'));

        if (UserInput === myAge) {
            alert('Yes that is correct');
            score = score + 1;

            break;
        }
        else if (UserInput > myAge) {
            alert('Too high!')
        }
        else if (UserInput < myAge) {
            alert('Too low!');
        }
    }
    question1();

    function question2() {

        var colledgeYears = 4;
        var attempts = 0;
        while (attempts < 4) {
            attempts++;
            var UserInput = parseInt(prompt('Quess  how many years i spent in the universsity?'));

            if (UserInput === colledgeYears) {
                alert('Yes that is correct');
                score = score + 1;

                break;
            }
            else if (UserInput > colledgeYears) {
                alert('Too high!')
            }
            else if (UserInput < colledgeYears) {
                alert('Too low!');
            }
        }


    }
    question2();

    function question3() {

        var Sisters = 4;
        var attempts = 0;
        while (attempts < 4) {
            attempts++;
            var UserInput = parseInt(prompt('Quess  how many sisters i have?'));

            if (UserInput === Sisters) {
                alert('Yes that is correct');
                score = score + 1;

                break;
            }
            else if (UserInput > Sisters) {
                alert('Too high!')
            }
            else if (UserInput < Sisters) {
                alert('Too low!');
            }
        }

    }

    question3();

    function question4() {

        var brothers = 3;
        var attempts = 0;
        while (attempts < 4) {
            attempts++;
            var UserInput = parseInt(prompt('Quess  how many sisters i have?'));

            if (UserInput === brothers) {
                alert('Yes that is correct');
                score = score + 1;

                break;
            }
            else if (UserInput > brothers) {
                alert('Too high!')
            }
            else if (UserInput < brothers) {
                alert('Too low!');
            }
        }

    }

    question4();

    function question5(){
        var travels = 6;
        var attempts = 0;
        while (attempts < 4) {
            attempts++;
            var UserInput = parseInt(prompt('Quess  how many many time i have traveled ?'));

            if (UserInput === travels) {
                alert('Yes that is correct');
                score = score + 1;

                break;
            }
            else if (UserInput > travels) {
                alert('Too high!')
            }
            else if (UserInput < travels) {
                alert('Too low!');
            }
        }
    }

    question5();

    
            
        function question6() {
            var colors = 6;
            var attempts = 0;
            while (attempts < 4) {
                attempts++;
                var UserInput = parseInt(prompt('Quess  how many colors i like ?'));

                if (UserInput === colors) {
                    alert('Yes that is correct');
                    score = score + 1;

                    break;
                }
                else if (UserInput > colors) {
                    alert('Too high!')
                }
                else if (UserInput < colors) {
                    alert('Too low!');
                }
            }
        }
        question6();

    
    
function question7{
        var Q7 = ['nada', 'rawan', 'yasmin', 'raya'];
        var UserQ7 = prompt('guess one of my favourite firends');
        
        
        for (var c = 0; c < 5; c++) {
            for (var Index = 0; Index < Q7.length; Index++) {
        
        
                if (UserQ7.toLowerCase() === Q7[Index]) {
                    alert('this is a correct answer');
                    //     score = score + 1 ;
                    c = 5;
                    break;
                }
        
            }
             if(c==5){
                 break;
             }
             UserQ7 = prompt('try again');
        
        }
        
            alert('your score is'+score);
    }
        question7();


