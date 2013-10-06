
$(function(){


    $(".home_b").click(function() {
      document.getElementById('tile1').scrollIntoView();
    });
    $(".intro_b").click(function() {
      document.getElementById('tile2').scrollIntoView();
    });
    $(".mission_b").click(function() {
      document.getElementById('tile3').scrollIntoView();
    });
    $(".core_b").click(function() {
      document.getElementById('tile4').scrollIntoView();
    });
    $(".contacts_b").click(function() {
      document.getElementById('tile5').scrollIntoView();
    });



    $(".start_down_arrow").click(function() {
      document.getElementById('tile2').scrollIntoView();
    });
    $(".intro_down_arrow").click(function() {
      document.getElementById('tile3').scrollIntoView();
    });
    $(".mission_down_arrow").click(function() {
      document.getElementById('tile4').scrollIntoView();
    });
    $(".feature_down_arrow").click(function() {
      document.getElementById('tile5').scrollIntoView();
    });

    var blue = true;

    setInterval(function(){fade(blue)},4000);

    function fade(color){
      console.log(color);
      if(color){
        $('#blueset').fadeTo(1000, 0); //turn pink
        blue = false
      }
      else{
        $('#blueset').fadeTo(1000, 1); //turn blue
        blue = true;
      }    }

});