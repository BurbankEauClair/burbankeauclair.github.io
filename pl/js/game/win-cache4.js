var bg;
var curChar;
var char1,char2,char3,char4,cta,arrow,nametext,subtext;


var win = function(game){}  
win.prototype = {

	preload:function(){

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            

            if(avatarselected==1){

            	game.load.atlas('ninja', 'images/new/win/splash-dev-win.png', 'images/new/win/splash-dev-win.json');                  
                game.load.image("ctareplay", "images/new/win/cta-play-again-dev.png");
    
            }
            if(avatarselected==2){


            	game.load.atlas('ninja','images/new/win/splash-gra-win.png', 'images/new/win/splash-gra-win.json');   
                game.load.image("ctareplay", "images/new/win/cta-play-again-gra.png");
            }
            if(avatarselected==3){

            	game.load.atlas('ninja', 'images/new/win/splash-pm-win.png', 'images/new/win/splash-pm-win.json');    
                game.load.image("ctareplay", "images/new/win/cta-play-again-pm.png");      
            }
            if(avatarselected==4){

            	game.load.atlas('ninja', 'images/new/win/splash-cop-win.png', 'images/new/win/splash-cop-win.json'); 
                game.load.image("ctareplay", "images/new/win/cta-play-again-copy.png");  
            }


            
        },
        create:function(){

        	load_avatarwin(avatarselected);

        }, 
        render:function(){

        }


    }
    function load_avatarwin(avatar){
      

        	containerPadding=100;
            if(mobile){
                bg = game.add.sprite(game.width/2,game.height/2,  'bg-'+avatar+"-win-mob"); 
            }else{
                bg = game.add.sprite(game.width/2,game.height/2,  'bg-'+avatar+"-win");     
            }
        	
        	bg.anchor.x = 0.5;
        	bg.anchor.y = 0.5;

            bg.preHeight=bg.height;
            bg.height = game.height;
            bg.width=bg.width/(bg.preHeight/bg.height); 

    	/*italic=game.add.text(game.width/2,40,"CONGRATS!", {font: '700 50px Montserrat, Arial', fill: "#FFFFFF", align: "center" ,boundsAlignH: "center",boundsAlignV:"center"});       

    	bold=game.add.text(game.width/2,90,"YOU MADE IT", {font: '700 50px Montserrat, Arial', fill: "#FFFFFF", align: "center" ,boundsAlignH: "center",boundsAlignV:"center"});  */   
    	/*italic.anchor.x = 0.5;
    	bold.anchor.x = 0.5;*/
    	
    	if(avatarselected==4){

    		char1 = game.add.sprite(game.width/2,game.height-150,"ninja");
    	}
    	if(avatarselected==3){
    		char1 = game.add.sprite(game.width/2,game.height-130,"ninja");
    	}
    	if(avatarselected==2){
    	
    		char1 = game.add.sprite(game.width/2-20,game.height-130,"ninja");
    	
    	}
    	if(avatarselected==1){
    	
    		char1 = game.add.sprite(game.width/2-40,game.height-110,"ninja");
    	
    	}
    	char1.anchor.x = 0.5;
    	char1.anchor.y = 1;   

        char1.scale.setTo(0.85);                     

    	ctakeep=game.add.sprite(game.width/2+270,game.height-55,"cta-keep");
        if(mobile){
            ctakeep.y=game.height-50
        }
    	ctakeep.anchor.x = 0.5;
    	ctakeep.inputEnabled = true;
        ctakeep.input.useHandCursor = true;
        ctakeep.events.onInputDown.add(keepintouch, this);


        ctakeep=game.add.button(game.width/2,game.height-110,"ctareplay");
        ctakeep.anchor.x = 0.5;
    
        ctakeep.events.onInputDown.add(restartGame, this);

    	char1.animations.add("win");
    	char1.animations.play("win", 33,true);
        attesa = (function () { return; })();

        function restartGame(){
            game.state.add("menu",menu);
            game.state.start("menu");  
        }

    	function keepintouch(){
    		 if(mobile){
                    location.href="http://www.playground.it/comingsoon/#4";
                 }else{
                    manualMoveTo(4);
                 }
    	}


    }


