<script> 
    console.log ("Hello!")
    var canvas=document.getElementById("gameboard");
    var ctx = canvas.getContext( '2d');
    
 // Player constructor and methods
    var xPlayerInit = 10;
    var yPlayerInit = 390;
    var widthPlayerInit = 60;
    var heightPlayerInit = 20;
    
  
     function Player (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        document.onkeydown = (e) => {
        switch (e.keyCode) {
          case 38:
            this.move(0,-3);
            break;
          case 40:
            this.move(0,3);
            break;
          case 37:
            this.move(-3,0);
            break;
          case 39:
            this.move(3,0);
            break;
         }
       }
     }
     
    Player.prototype.draw = function (x, y, width, height) {
        ctx.fillStyle ="gold";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    var myPlayer = new Player (xPlayerInit, yPlayerInit, widthPlayerInit, heightPlayerInit);
    //myPlayer.draw();

    Player.prototype.move = function (dx, dy) {
        this.x = this.x + dx;
        this.y = this.y + dy;
    }

    var result = xPlayerInit + (widthPlayerInit/2);
    console.log(result);
    
    // leelou constructor and methods
    var xLeelouInit = 40;
    var yLeelouInit = 10;
    var widthLeelouInit = 20;
    var heightLeelouInit = 20;
    
  
    function Leelou (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
     }
     
    Leelou.prototype.draw = function (x, y, width, height) {
        ctx.fillStyle ="gold";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    var myLeelou = new Leelou (xLeelouInit, yLeelouInit, widthLeelouInit, heightLeelouInit);
    //myLeelou.draw();

 
   Leelou.prototype.move = function () {
        this.x = this.x;
        this.y = this.y + 10;
    }


    // Leelou falling   
    setInterval (function () {
        ctx.clearRect(0, 0, 800,800);
        myPlayer.move(0,0);
        myPlayer.draw();
        myLeelou.move(0,0);
        myLeelou.draw();
        },500); 

        
    
 </script>   

