$(document).ready(function() {

//each question is going to be a different container in the HTML file

//clean code
var begin = false
var q1false;
var q1true;
var q2false;
var q2true;
var q3false;
var q3true;
var q4false;
var q4true;
var q5false;
var q5true;
var correct = 0
var incorrect = 0

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
  $(".conclusionpage6").toggle(false);
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
  $(".conclusionpage6").toggle(true);
  conclusionpage()
}
/*
function sevenSeconds6() {
  $(".conclusionpage6").toggle(false)
  $(".start").toggle(true);
  resetGame()
}

*/
function resetGame() {
  begin = false
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
  $(".conclusionpage6").toggle(false);
  q1false;
  q1true;
  q2false;
  q2true;
  q3false;
  q3true;
  q4false;
  q4true;
  q5false;
  q5true;
  correct = 0
  incorrect = 0
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
      function questionpage4() {
          //need to start timer, get timeout setup
          $("#q4p1false,#q4p2false,#q4p3false").on("click", function() {
              q4false = true
              console.log('q4false',q4false)
              if (q4false === true) {
                //new window display time Remaining
                //text that says 'Incorrect'
                //tell the correct answer was: 'X'
                $(".questionpage4").toggle();
                $(".questionpage4false").toggle();
                setTimeout(sevenSeconds4, 7000);
              }
          })
          $("#q4true").on("click", function() {
              q4true = true
              console.log('q4true',q4true)
              if (q4true === true) {
                //new window display time Remaining
                //text that says 'Correct'
                //display gifimage of correct answer
                $(".questionpage4").toggle();
                $(".questionpage4true").toggle();
                setTimeout(sevenSeconds4, 7000);
              }
          })
        }
        function questionpage5() {
            //need to start timer, get timeout setup
            $("#q5p1false,#q5p2false,#q5p3false").on("click", function() {
                q5false = true
                console.log('q5false',q5false)
                if (q5false === true) {
                  //new window display time Remaining
                  //text that says 'Incorrect'
                  //tell the correct answer was: 'X'
                  $(".questionpage5").toggle();
                  $(".questionpage5false").toggle();
                  setTimeout(sevenSeconds5, 7000);
                }
            })
            $("#q5true").on("click", function() {
                q5true = true
                console.log('q5true',q5true)
                if (q5true === true) {
                  //new window display time Remaining
                  //text that says 'Correct'
                  //display gifimage of correct answer
                  $(".questionpage5").toggle();
                  $(".questionpage5true").toggle();
                  setTimeout(sevenSeconds5, 7000);
                }
            })
          }
          /*
          function conclusionpage() {
              //need to start timer, get timeout setup
              $("#q5p1false,#q5p2false,#q5p3false").on("click", function() {
                  q5false = true
                  console.log('q5false',q5false)
                  if (q5false === true) {
                    //new window display time Remaining
                    //text that says 'Incorrect'
                    //tell the correct answer was: 'X'
                    $(".questionpage5").toggle();
                    $(".questionpage5false").toggle();
                    setTimeout(sevenSeconds5, 7000);
                  }
              })
              $("#q5true").on("click", function() {
                  q5true = true
                  console.log('q5true',q5true)
                  if (q5true === true) {
                    //new window display time Remaining
                    //text that says 'Correct'
                    //display gifimage of correct answer
                    $(".questionpage5").toggle();
                    $(".questionpage5true").toggle();
                    setTimeout(sevenSeconds5, 7000);
                  }
              })
            }
            */

























clickstart();




})
