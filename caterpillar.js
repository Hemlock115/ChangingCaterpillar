// var $ = function(id) {
//     return document.getElementById(id);
// };

function changeToButterfly(){
    $('#myHeader').text("The Butterfly");  
    $('#p1').html("This is a <strong>butterfly</strong> in its natural habitat:");
    $('#picture').attr("src", "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png");
    $('#Wiki').attr("href", "https://en.wikipedia.org/wiki/Butterfly");
    $('#Wiki').text("Butterfly");
    $('#myHeader').css({"background-color": "orange", "font-size": "200%"});
    $( "p" ).add( "<span>Butterflies have a four-stage life cycle, as like most insects they undergo complete metamorphosis. Winged adults lay eggs on the food plant on which their larvae, known as caterpillars, will feed. The caterpillars grow, sometimes very rapidly, and when fully developed, pupate in a chrysalis. When metamorphosis is complete, the pupal skin splits, the adult insect climbs out, and after its wings have expanded and dried, it flies off. Some butterflies, especially in the tropics, have several generations in a year, while others have a single generation, and a few in cold locations may take several years to pass through their entire life cycle.</span>" ).appendTo( document.body );
   // alert("Butterfly");   
}
function changeToCaterpillar(){
    $('#myHeader').text("The Caterpillar");
    $('#p1').html("This is a <strong>caterpillar</strong> in its natural habitat:");
    $('#picture').attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Monarch_caterpillar_on_swan_plant_branchlet.jpg/640px-Monarch_caterpillar_on_swan_plant_branchlet.jpg");
    $('#Wiki').attr("href", "https://en.wikipedia.org/wiki/Catepillar");
    $('#Wiki').text("Caterpillar");
    $('#myHeader').css({"background-color": "white", "font-size": "200%"});
   // alert("Test");  
}
window.onload = function () {
    $("#transform").click(function(){
      //alert("Text: " + $("#test").text());
      metamorphose();
      changeToButterfly();
      
    });
    $("#restore").click(function(){
     // alert("HTML: " + $("#test").html());
      restore();
      changeToCaterpillar();
      location.reload(true);
    });
}
function metamorphose() {  
   // alert("Test");
    $('#transform').hide();
    $('#restore').show();
    $("#transform").on('click', function() {
    //alert("End");
    });
}

function restore() {
    $('#restore').hide();
    $('#transform').show();
    $("#restore").on('click', function() {

        location.reload(true); 
    }); 

}