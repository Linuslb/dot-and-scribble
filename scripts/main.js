var userInput = 16;
var randomColor = false;

var standard_color= "white";

$(document).ready(function(){
  standard_color =  $("input:radio[name=colorSelected]:checked").val();
  $(document).on('click','button',function(){
    handelButton(this); //Handles all the button pressed
  });

  $("input:radio[name=colorSelected]").click(function() { //Change color of mouse
      var value = $(this).val();
      standard_color = value;
  });

  createGrid(userInput); //Creates the grid for the user
});



var handelButton = function(buttonName){
  switch(buttonName.name){
    case "randomColorActive":
      randomColor = !randomColor;
      $('button[name=randomColorActive]').toggleClass('active');
      break;
    case "resetGridButton":
      resetGrid();
      break;
    case "clearButton":
      clearColorFromGrid();
      break;
    default:
      console.log("Something went wrong!");
      break;
  }
};

var createGrid = function(squares){
  for(var i = 0; i < squares; i++){
    if(i > 0){
  $('#container').append('<div style="clear: both"></div>');
    };
      for(var j = 0; j < squares; j++){
        var newDiv = '<div class="square"></div>';
        $('#container').append(newDiv);
      };
    };
      setGridSize(squares);
      $('.square').hover(function(){
          var color = whatColor();
          $(this).css("background-color",color);
      });
};

var setGridSize = function(squares){
  var containerSize = $('#container').height();
  containerSize = (containerSize / squares)- $('.square').css("border-left-width").replace(/[^-\d\.]/g, '')*2;
  $('.square').height(containerSize).width(containerSize);
};

var clearGrid = function(){
  $('.square').remove();
};

var resetGrid = function(){
  var userAnswer = prompt("Number of squares per side! Max 99","16");
  if(!isNaN(userAnswer) && userAnswer < 100){
      clearGrid();
      createGrid(userAnswer);
  } else {
      userAnswer = resetGrid();
  };
};

var whatColor = function(){
  if(randomColor){
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  } else {
    return standard_color;
  };
};

var clearColorFromGrid = function(){
  $('.square').css("background-color","#E0E4CC");
};

//Change color when pressed and random color//
/*var randomColorActive = function(){
  randomColor = !randomColor;
  $('#activeRandom').css("background-color","white");
};*/
