canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;

rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add( ) {
    background_photo = new Image();
    background_photo.onload = load_background;
    background_photo.src = background_image;

    rover_photo = new Image();
    rover_photo.onload = load_rover;
    rover_photo.src = rover_image;
}
function load_background( ) {
    ctx.drawImage(background_photo,0, 0,canvas.width,canvas.height);
}
function load_rover( ) {
    ctx.drawImage(rover_photo,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
   keyPressed= e.keyCode;
   console.log(keyPressed);

   if(keyPressed == "38"); {
    up ();
    console.log ("flecha_arriba");
   }
   if(keyPressed == "39"); {
    down ();
    console.log ("flecha_abajo");
   }
   if(keyPressed == "39"); {
    left ();
    console.log ("flecha_derecha");
   }
   if(keyPressed == "37"); {
    right ();
    console.log ("flecha_izquierda");
   }
}
function up ( ) {
    if (rover_y >=0) {
        rover_y = rover_y-10;
        console.log ("cuando la flecha arriba es precionada, x ="+ rover_x + " y =" + rover_y);
        load_background();
        load_rover();
    }

}

function down ( ) {
    if (rover_y <=600) {
        rover_y = rover_y+10;
        console.log ("cuando la flecha abajo es precionada, x ="+ rover_x + " y =" + rover_y);
        load_background();
        load_rover();
    }
    
}

function left ( ) {
    if (rover_x >=0) {
        rover_x = rover_x-10;
        console.log ("cuando la flecha derecha es precionada, x ="+ rover_x + " y =" + rover_y);
        load_background();
        load_rover();
    }
    
}

function right ( ) {
    if (rover_x <=800) {
        rover_x = rover_x+10;
        console.log ("cuando la flecha izquierda es precionada, x ="+ rover_x + " y =" + rover_y);
        load_background();
        load_rover();
    }
    
}