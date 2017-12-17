$(document).ready(function() {

//each question is going to be a different container in the HTML file

//clean code
var begin = false
var q1false;
var q1true;
var q2false;
var q2true;

//-----Still Fix up
var p3false;
var p3true;
var p4false;
var p4true;
var p5false;
var p5true;
//-----Still Fix up

if (begin === false) {
  $(".start").toggle(true);
  $(".questionpage1").toggle(false);
  $(".questionpage1true").toggle(false);
  $(".questionpage1false").toggle(false);
  $(".questionpage2").toggle(false);
  $(".questionpage2true").toggle(false);
  $(".questionpage2false").toggle(false);
  $(".questionpage3").toggle(false);
  $(".questionpage3true").toggle(false);
  $(".questionpage3false").toggle(false);
  $(".questionpage4").toggle(false);
  $(".questionpage4true").toggle(false);
  $(".questionpage4false").toggle(false);
  $(".questionpage5").toggle(false);
  $(".questionpage5true").toggle(false);
  $(".questionpage5false").toggle(false);


}



function sevenSeconds1() {
  $(".questionpage1false").toggle(false);
  $(".questionpage1true").toggle(false);
  $(".questionpage2").toggle(true)
  questionpage2()
}
function sevenSeconds2() {
  $(".questionpage2false").toggle(false);
  $(".questionpage2true").toggle(false);
  $(".questionpage2").toggle(false)
  $(".questionpage3").toggle(true)
  questionpage3()
}
function sevenSeconds3() {
  $(".questionpage3false").toggle(false);
  $(".questionpage3true").toggle(false);
  $(".questionpage3").toggle(false)
  $(".questionpage4").toggle(true)
  questionpage4()
}
function sevenSeconds4() {
  $(".questionpage4false").toggle(false);
  $(".questionpage4true").toggle(false);
  $(".questionpage4").toggle(false)
  $(".questionpage5").toggle(true)
  questionpage5()
}
function sevenSeconds5() {
  $(".questionpage5false").toggle(false);
  $(".questionpage5true").toggle(false);
  $(".questionpage5").toggle(false)
  $(".start").toggle(true);
  resetGame()
}
function resetGame() {
  begin = false
  $(".start").toggle(true);
}






//cleancode---------------------------------------------------------------------
function clickstart() {
  $("#begin").on("click", function() {
    begin = true
    if (begin === true) {
      $(".start").toggle();
      $(".questionpage1").toggle();
      questionpage1()

    }
  })
}
//cleancode---------------------------------------------------------------------







//------------------------------------------------------------------------------
//working on code below
//------------------------------------------------------------------------------

function questionpage1() {
    //need to start timer, get timeout setup
    $("#q1p1false,#q1p2false,#q1p3false").on("click", function() {
        q1false = true
        console.log('q1false',q1false)
        if (q1false === true) {
          //new window display time Remaining
          //text that says 'Incorrect'
          //tell the correct answer was: 'X'
          $(".questionpage1").toggle();
          $(".questionpage1false").toggle();
          setTimeout(sevenSeconds1, 7000);
        }
    })

    $("#q1true").on("click", function() {
        q1true = true
        console.log('q1true',q1true)
        if (q1true === true) {
          //new window display time Remaining
          //text that says 'Correct'
          //display gifimage of correct answer
          $(".questionpage1").toggle();
          $(".questionpage1true").toggle();
          setTimeout(sevenSeconds1, 7000);
        }
    })
  }
  function questionpage2() {
      //need to start timer, get timeout setup
      $("#q2p1false,#q2p2false,#q2p3false").on("click", function() {
          q2false = true
          console.log('q2false',q2false)
          if (q2false === true) {
            //new window display time Remaining
            //text that says 'Incorrect'
            //tell the correct answer was: 'X'
            $(".questionpage2").toggle();
            $(".questionpage2false").toggle();
            setTimeout(sevenSeconds2, 7000);
          }
      })
      $("#q2true").on("click", function() {
          q2true = true
          console.log('q2true',q2true)
          if (q2true === true) {
            //new window display time Remaining
            //text that says 'Correct'
            //display gifimage of correct answer
            $(".questionpage2").toggle();
            $(".questionpage2true").toggle();
            setTimeout(sevenSeconds2, 7000);
          }
      })
    }
    function questionpage3() {
        //need to start timer, get timeout setup
        $("#q3p1false,#q3p2false,#q3p3false").on("click", function() {
            q3false = true
            console.log('q3false',q3false)
            if (q3false === true) {
              //new window display time Remaining
              //text that says 'Incorrect'
              //tell the correct answer was: 'X'
              $(".questionpage3").toggle();
              $(".questionpage3false").toggle();
              setTimeout(sevenSeconds3, 7000);
            }
        })
        $("#q3true").on("click", function() {
            q3true = true
            console.log('q3true',q3true)
            if (q3true === true) {
              //new window display time Remaining
              //text that says 'Correct'
              //display gifimage of correct answer
              $(".questionpage3").toggle();
              $(".questionpage3true").toggle();
              setTimeout(sevenSeconds3, 7000);
            }
        })
      }

























clickstart();




})
