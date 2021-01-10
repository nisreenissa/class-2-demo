'use strict';
var score=0;

// var username = prompt('please enter you name');
// alert('Welcome  ! and Thank you for visting us ' + username);

// var Q1 = prompt('do you have computer skills ? answer with yes or no or with y or n');

// if (Q1.toLowerCase() === 'yes' || Q1.toLowerCase() === 'y') {
// alert('fantastic!');
// score=score+1;
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
// score=score++;
// } else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n') {
//     alert('too bad you should practice');
// }

// else {
//     alert('please next time enter yes or no');
// }



// var Q3 = prompt('do you like CSS ? answer with yes or no or with y or n ');
//  if (Q3.toLowerCase() === 'yes' || Q3.toLowerCase() === 'y') {
//    //console.log(' you can be my partner');
//     alert('fantastic!');
// score=score++;
//  }

// else if (Q3.toLowerCase() === 'no' || Q3.toLowerCase() === 'n') {
//     alert('too bad you should practice');
//  }

//  else {
//    alert('please next time enter yes or no');
//  }

//  var Q4 = prompt('do you like JavaScript ? answer with yes or no or with y or n');

//  if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {
//    //console.log(' you can be my partner');

//     alert('fantastic!');
//     score=score++;

//  }

// else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {
//     alert('too bad you should practice');
//  }

//  else {
//     alert('please next time enter yes or no');
//  }

//  var Q5 = prompt('do you like ltuc ? answer with yes or no , Or you can answer with y or n');


//  if (Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y') {
//     //console.log(' you can be my partner');
//      alert('fantastic!');
//      score=score++;

//  }
// else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n') {
//      alert('too bad you should practice');
//  }
//  else {
//      alert('please next time enter yes or no');
//  }

//lab3
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

function question1(){
    var username = prompt('please enter you name');
    alert('Welcome  ! and Thank you for visting us ' + username);
    
    var Q1 = prompt('do you have computer skills ? answer with yes or no or with y or n');
    
    if (Q1.toLowerCase() === 'yes' || Q1.toLowerCase() === 'y') {
    alert('fantastic!');
    score=score+1;
        //console.log('if you have computer skills then you can be my partner');
    }
    
    else if (Q1.toLowerCase() === 'no' || Q1.toLowerCase() === 'n') {
    alert('too bad you should practice');
    }
    
    
    else {
        alert('please next time enter yes or no');
    }
    
}
    question1();

    function question2() {

        var Q2 = prompt('do you like HTML ? answer with yes or no or with y or n ');

        if (Q2.toLowerCase() === 'yes' || Q2.toLowerCase() === 'y') {
            //console.log('if you have computer skills then you can be my partner');
            alert('fantastic!');
        score=score++;
        } else if (Q2.toLowerCase() === 'no' || Q2.toLowerCase() === 'n') {
            alert('too bad you should practice');
        }
        
        else {
            alert('please next time enter yes or no');
        }
        
        
        
    }
    question2();

    function question3() {

      
var Q3 = prompt('do you like CSS ? answer with yes or no or with y or n ');
if (Q3.toLowerCase() === 'yes' || Q3.toLowerCase() === 'y') {
  //console.log(' you can be my partner');
   alert('fantastic!');
score=score++;
}

else if (Q3.toLowerCase() === 'no' || Q3.toLowerCase() === 'n') {
   alert('too bad you should practice');
}

else {
  alert('please next time enter yes or no');
}

    }

    question3();

    function question4() {

        var Q4 = prompt('do you like JavaScript ? answer with yes or no or with y or n');

        if (Q4.toLowerCase() === 'yes' || Q4.toLowerCase() === 'y') {
          //console.log(' you can be my partner');
       
           alert('fantastic!');
           score=score++;
       
        }
       
       else if (Q4.toLowerCase() === 'no' || Q4.toLowerCase() === 'n') {
           alert('too bad you should practice');
        }
       
        else {
           alert('please next time enter yes or no');
        }

    }

    question4();

    function question5(){
        var Q5 = prompt('do you like ltuc ? answer with yes or no , Or you can answer with y or n');


 if (Q5.toLowerCase() === 'yes' || Q5.toLowerCase() === 'y') {
    //console.log(' you can be my partner');
     alert('fantastic!');
     score=score++;

 }
else if (Q5.toLowerCase() === 'no' || Q5.toLowerCase() === 'n') {
     alert('too bad you should practice');
 }
 else {
     alert('please next time enter yes or no');
 }

    }

    question5();

    
            
        function question6() {
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
            alert('You have reached the max Quesses , my age is 27');

        }

        question6();

    
    
function question7(){

var Q7 = ['nada', 'rawan', 'yasmin', 'raya'];
var UserQ7 = prompt('guess one of my favourite firends');


for (var c = 0; c < 5; c++) {
    for (var Index = 0; Index < Q7.length; Index++) {


        if (UserQ7.toLowerCase() === Q7[Index]) {
            alert('this is a correct answer');
             score = score + 1 ;
            c = 5;
            break;
        }

    }
     if(c==5){
         break;
     }
     UserQ7 = prompt('try again');

}
alert('You have reached the max Quesses , my favourite fiends are :nada, rawan, yasmin, raya');
        
}

    question7();

    alert('your score is'+score);

