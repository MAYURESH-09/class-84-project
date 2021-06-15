canvas = document.getElementById("myCanvas")  ;
ctx= canvas.getContext("2d")  ;

car_height = 90 ;
car_width = 100 ;

car_x = 150 ;
car_y = 180 ;

background_image = "racing.jpg" ;
rover_image = "car1.png" ;

 function add() 
 {
     background_image_tag = new Image();
     background_image_tag.onload = show_image ;
     background_image_tag.src = background_image ; 

     background_car_tag = new Image();
     background_car_tag.onload = show_image_rover ;
     background_car_tag.src = rover_image ; 
 }

 function show_image ()
 {
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height) ;
 }

 function show_image_rover ()
 {
    ctx.drawImage(background_car_tag,car_x,car_y,car_width,car_height) ;
 }

window.addEventListener("keydown",my_key_down) ;

function my_key_down (e)
{
     keyPressed=e.keyCode ;
     console.log(keyPressed)

     if ( keyPressed =="38" )
     {
         console.log("up key is pressed") ;
         up_rover()
     }
     if ( keyPressed =="40" )
     {
         console.log("down key is pressed") ;
         down_rover()
     }
     if ( keyPressed =="37" )
     {
         console.log("left key is pressed") ;
         left_rover()
     }
     if ( keyPressed =="39" )
     {
         console.log("right key is pressed") ;
         right_rover()
     }
}