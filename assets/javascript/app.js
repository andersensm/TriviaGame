$(document).ready(function() {

//each question is going to be a different container in the HTML file

//clean code
var begin = false
var p1false;
var p1true;
var p2false;
var p2true;
var p3false;
var p3true;
var p4false;
var p4true;
var p5false;
var p5true;

var p1falsefunction =  $("#p1false").on("click", function() {
      p1false = true
      console.log('p1false',p1false)
    })

var p1truefunction = $("#p1true").on("click", function() {
      p1true = true
      console.log('p1true',p1true)
    })

if (begin === false) {
  $(".start").toggle(true);
  $(".questionpage1").toggle(false);
  $(".questionpage1true").toggle(false);
  $(".questionpage1false").toggle(false);
  $(".questionpage2").toggle(false);
  $(".questionpage3").toggle(false);
  $(".questionpage4").toggle(false);
  $(".questionpage5").toggle(false);
  $(".dontusefornow").toggle(false);
}

//cleancode
function clickstart() {
  $("#begin").on("click", function() {
    begin = true
    if (begin === true) {
      $(".start").toggle(false);
      $(".questionpage1").toggle(true);
      questionpage1()

    }
  })
}

//questionpage1

function questionpage1() {
    //need to start timer, get timeout setup
    $("#p1false").on("click", function() {
        p1false = true
        console.log('p1false',p1false)
        if (p1false === true) {
          //new window display time Remaining
          //text that says 'Incorrect'
          //tell the correct answer was: 'X'
          $(".questionpage1").toggle(false);
          $(".questionpage1false").toggle(true);
        }
    })

    $("#p1true").on("click", function() {
        p1true = true
        console.log('p1true',p1true)
        if (p1true === true) {
          //new window display time Remaining
          //text that says 'Correct'
          //display gifimage of correct answer
          $(".questionpage1").toggle(false);
          $(".questionpage1true").toggle(true);
        }
    })
  }

























clickstart();




})
