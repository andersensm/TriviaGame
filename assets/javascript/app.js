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
var conclusion;
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
  questionpage2();
}
function sevenSeconds2() {
  $(".questionpage2false").toggle(false);
  $(".questionpage2true").toggle(false);
  $(".questionpage2").toggle(false)
  $(".questionpage3").toggle(true)
  questionpage3();
}
function sevenSeconds3() {
  $(".questionpage3false").toggle(false);
  $(".questionpage3true").toggle(false);
  $(".questionpage3").toggle(false)
  $(".questionpage4").toggle(true)
  questionpage4();
}
function sevenSeconds4() {
  $(".questionpage4false").toggle(false);
  $(".questionpage4true").toggle(false);
  $(".questionpage4").toggle(false)
  $(".questionpage5").toggle(true)
  questionpage5();
}
function sevenSeconds5() {
  $(".questionpage5false").toggle(false);
  $(".questionpage5true").toggle(false);
  $(".questionpage5").toggle(false)
  $(".conclusionpage6").toggle(true);
  conclusionpage();
}


//**************
 var intervalId;
 var time = 15

//-------------Page 1 Timers--------------------------
function resetp1() {
  time = 15;
  $("#page1").text(time);
}
function startp1() {
  intervalId = setInterval(countp1, 1000);
}
function stopI1() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#incorrectpage1").text(time);
}
function stopC1() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#correctpage1").text(time);
}
function countp1() {
  time--;
  $("#page1").text(time);
  if (time === 0) {
    incorrect++
    $(".questionpage1").toggle(false);
    $(".questionpage1false").toggle(true);
    stopI1()
    setTimeout(sevenSeconds1, 7000);
  }
}
//-----------------------------------------------
//-----------Page 2 Timers-----------------------
function resetp2() {
  time = 15;
  $("#page2").text(time);
}
function startp2() {
  intervalId = setInterval(countp2, 1000);
}
function stopI2() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#incorrectpage2").text(time);
}
function stopC2() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#correctpage2").text(time);
}
function countp2() {
  time--;
  $("#page2").text(time);
  if (time === 0) {
    incorrect++
    $(".questionpage2").toggle(false);
    $(".questionpage2false").toggle(true);
    stopI2()
    setTimeout(sevenSeconds2, 7000);
  }
}
//-----------------------------------------------
//-----------Page 3 Timers-----------------------
function resetp3() {
  time = 15;
  $("#page3").text(time);
}
function startp3() {
  intervalId = setInterval(countp3, 1000);
}
function stopI3() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#incorrectpage3").text(time);
}
function stopC3() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#correctpage3").text(time);
}
function countp3() {
  time--;
  $("#page3").text(time);
  if (time === 0) {
    incorrect++
    $(".questionpage3").toggle(false);
    $(".questionpage3false").toggle(true);
    stopI3()
    setTimeout(sevenSeconds3, 7000);
  }
}
//-----------------------------------------------
//-----------Page 4 Timers-----------------------
function resetp4() {
  time = 15;
  $("#page4").text(time);
}
function startp4() {
  intervalId = setInterval(countp4, 1000);
}
function stopI4() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#incorrectpage4").text(time);
}
function stopC4() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#correctpage4").text(time);
}
function countp4() {
  time--;
  $("#page4").text(time);
  if (time === 0) {
    incorrect++
    $(".questionpage4").toggle(false);
    $(".questionpage4false").toggle(true);
    stopI4()
    setTimeout(sevenSeconds4, 7000);
  }
}
//-----------------------------------------------
//-----------Page 5 Timers-----------------------
function resetp5() {
  time = 15;
  $("#page5").text(time);
}
function startp5() {
  intervalId = setInterval(countp5, 1000);
}
function stopI5() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#incorrectpage5").text(time);
}
function stopC5() {
  console.log("stopping");
  clearInterval(intervalId);
  $("#correctpage5").text(time);
}
function countp5() {
  time--;
  $("#page5").text(time);
  if (time === 0) {
    incorrect++
    $(".questionpage5").toggle(false);
    $(".questionpage5false").toggle(true);
    stopI5()
    setTimeout(sevenSeconds5, 7000);
  }
}
//-----------------------------------------------

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
  clickstart();
}
//cleancode---------------------------------------------------------------------
function clickstart() {
  console.log('clickStart')
  $("#begin").off().on("click", function() {
    begin = true
    if (begin === true) {
      $(".start").toggle(false);
      $(".questionpage1").toggle(true);
      questionpage1()

    }
  })
}
//cleancode---------------------------------------------------------------------
//------------------------------------------------------------------------------
//working on code below
//------------------------------------------------------------------------------
function questionpage1() {
    resetp1();
    startp1();
    countp1();
    //need to start timer, get timeout setup
    $("#q1p1false,#q1p2false,#q1p3false").off().on("click", function() {
        q1false = true
        console.log('q1false',q1false)
        if (q1false === true) {
          //new window display time Remaining
          //text that says 'Incorrect'
          //tell the correct answer was: 'X'
          incorrect++
          $(".questionpage1").toggle(false);
          $(".questionpage1false").toggle(true);
          stopI1()
          setTimeout(sevenSeconds1, 7000);
        }
    })

    $("#q1true").off().on("click", function() {
        $(".timer").toggle(true);
        q1true = true
        console.log('q1true',q1true)
        if (q1true === true) {
          //new window display time Remaining
          //text that says 'Correct'
          //display gifimage of correct answer
          correct++
          $(".questionpage1").toggle(false);
          $(".questionpage1true").toggle(true);
          stopC1()
          setTimeout(sevenSeconds1, 7000);
        }
    })
  }
function questionpage2() {
      resetp2();
      startp2();
      countp2();
      //need to start timer, get timeout setup
      $("#q2p1false,#q2p2false,#q2p3false").off().on("click", function() {
          q2false = true
          console.log('q2false',q2false)
          if (q2false === true) {
            //new window display time Remaining
            //text that says 'Incorrect'
            //tell the correct answer was: 'X'
            incorrect++
            $(".questionpage2").toggle(false);
            $(".questionpage2false").toggle(true);
            stopI2()
            setTimeout(sevenSeconds2, 7000);
          }
      })
      $("#q2true").off().on("click", function() {
          q2true = true
          console.log('q2true',q2true)
          if (q2true === true) {
            //new window display time Remaining
            //text that says 'Correct'
            //display gifimage of correct answer
            correct++
            $(".questionpage2").toggle(false);
            $(".questionpage2true").toggle(true);
            stopC2()
            setTimeout(sevenSeconds2, 7000);
          }
      })
    }
function questionpage3() {
        resetp3();
        startp3();
        countp3();
        //need to start timer, get timeout setup
        $("#q3p1false,#q3p2false,#q3p3false").off().on("click", function() {
            q3false = true
            console.log('q3false',q3false)
            if (q3false === true) {
              //new window display time Remaining
              //text that says 'Incorrect'
              //tell the correct answer was: 'X'
              incorrect++
              $(".questionpage3").toggle(false);
              $(".questionpage3false").toggle(true);
              stopI3()
              setTimeout(sevenSeconds3, 7000);
            }
        })
        $("#q3true").off().on("click", function() {
            q3true = true
            console.log('q3true',q3true)
            if (q3true === true) {
              //new window display time Remaining
              //text that says 'Correct'
              //display gifimage of correct answer
              correct++
              $(".questionpage3").toggle(false);
              $(".questionpage3true").toggle(true);
              stopC3()
              setTimeout(sevenSeconds3, 7000);
            }
        })
      }
function questionpage4() {
          resetp4();
          startp4();
          countp4();
          //need to start timer, get timeout setup
          $("#q4p1false,#q4p2false,#q4p3false").off().on("click", function() {
              q4false = true
              console.log('q4false',q4false)
              if (q4false === true) {
                //new window display time Remaining
                //text that says 'Incorrect'
                //tell the correct answer was: 'X'
                incorrect++
                $(".questionpage4").toggle(false);
                $(".questionpage4false").toggle(true);
                stopI4()
                setTimeout(sevenSeconds4, 7000);
              }
          })
          $("#q4true").off().on("click", function() {
              q4true = true
              console.log('q4true',q4true)
              if (q4true === true) {
                //new window display time Remaining
                //text that says 'Correct'
                //display gifimage of correct answer
                correct++
                $(".questionpage4").toggle(false);
                $(".questionpage4true").toggle(true);
                stopC4()
                setTimeout(sevenSeconds4, 7000);
              }
          })
}
function questionpage5() {
            resetp5();
            startp5();
            countp5();
            //need to start timer, get timeout setup
            $("#q5p1false,#q5p2false,#q5p3false").off().on("click", function() {
                q5false = true
                console.log('q5false',q5false)
                if (q5false === true) {
                  //new window display time Remaining
                  //text that says 'Incorrect'
                  //tell the correct answer was: 'X'
                  incorrect++
                  $(".questionpage5").toggle(false);
                  $(".questionpage5false").toggle(true);
                  stopI5()
                  setTimeout(sevenSeconds5, 7000);
                }
            })
            $("#q5true").off().on("click", function() {
                q5true = true
                console.log('q5true',q5true)
                if (q5true === true) {
                  //new window display time Remaining
                  //text that says 'Correct'
                  //display gifimage of correct answer
                  correct++
                  $(".questionpage5").toggle();
                  $(".questionpage5true").toggle();
                  stopC5()
                  setTimeout(sevenSeconds5, 7000);
                }
            })
}
function conclusionpage() {
              $("#correct").text(correct)
              $("#incorrect").text(incorrect)
              //need to start timer, get timeout setup
              $("#end").off().on("click", function() {
                  conclusion = true
                  console.log('conclusion',conclusion)
                  if (conclusion === true) {
                    //new window display time Remaining
                    //text that says 'Incorrect'
                    //tell the correct answer was: 'X'
                    $(".conclusionpage6").toggle(false);
                    $(".start").toggle(true);
                    resetGame();
                  }
              })
            }

clickstart();

})
