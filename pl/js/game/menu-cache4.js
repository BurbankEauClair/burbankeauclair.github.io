

var bg,die_overlay;
var curChar;
var char1,char2,char3,char4,cta,arrow,nametext,subtext;
    // game.state.add("Menu",menu);

    /*DECLARE GAME STATE -> INIT -> TO LOAD ALL RESOURCES AND LOADING GIF*/
    var menu = function(game){}  
    menu.prototype = {

    	preload:function(){    
    		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    		//game.scale.setScreenSize(true);
            //MENU ELEMENTS



            // game.load.spritesheet("character-2", "images/new/grafico-fermo-salto-win-planata.png", 200, 200);

            // game.load.spritesheet("character-3", "images/new/Pm-ferma-salto-win-planata.png", 200, 200);
            
            // game.load.spritesheet("character-4", "images/new/copy-ferma-salto-win-planata.png", 200, 200);
            
        },
        create:function(){


            if (typeof attesa !== 'undefined'){ // Any scope
              console.log(attesa);
          }else{

            attesa = game.sound.play('attesa');
            attesa.loopFull();
            attesa.volume=1;
        }



        load_avatar(1);






            // game.state.add("play",play);
            // game.state.start("play");

        }, 
        render:function(){


 		//poleGroup.forEachAlive(renderGroup, this);

	        //game.debug.bodyInfo(missile, 32, 32);
	      // game.debug.body(ninja);
	         // game.debug.body(missile);

	         // game.debug.soundInfo(jingleplay, 32, 32);

	         // if (jingleplay.isDecoding)
	         // {
	         // 	game.debug.text("Decoding MP3 ...", 32, 200);
	         // }
	          // game.debug.body(char1);
	          // game.debug.body(char2);
	          // game.debug.body(char3);
	          // game.debug.body(char4);
        }


    }
    function load_avatar(avatar){
     containerPadding=100;
     bg = game.add.tileSprite(0, 0, game.width, game.height, 'bg-'+avatar); 

     bg.alpha = 0;
     game.add.tween(bg).to( { alpha: 1 }, 500, "Linear", true);
	   // game.add.tween(bg).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None);
    if(mobile){
        game.add.text(containerPadding,30,"Select Your Favourite Character", {font: '400 40px  Arial', fill: "#FFFFFF", align: "center" ,boundsAlignH: "center",boundsAlignV:"center"});     
    }else{
        game.add.text(containerPadding,30,"Select Your", {font: '100 40px Montserrat, Arial', fill: "#FFFFFF", align: "center" ,boundsAlignH: "center",boundsAlignV:"center"});       
        game.add.text(containerPadding,70,"Favourite Character", {font: '700 40px Montserrat, Arial', fill: "#FFFFFF", align: "center" ,boundsAlignH: "center",boundsAlignV:"center"});     
    }

            // bold.stroke = '#FFFFFF';
            // bold.strokeThickness = 6;
            
            //middle_col_4=(game.width/8)*1;
            col4=(game.width/4);
            col4=col4-(containerPadding/2)
            middle_col_4=col4/2
            char1 = game.add.sprite(containerPadding+middle_col_4-20,game.height-220,"character-1");
            char2 = game.add.sprite(containerPadding+middle_col_4-5+col4,game.height-220,"character-2");
            char3 = game.add.sprite(containerPadding+middle_col_4-5+col4*2,game.height-220,"character-3");
            char4 = game.add.sprite(containerPadding+middle_col_4-15+col4*3,game.height-220,"character-4");

            game.physics.startSystem(Phaser.Physics.ARCADE);	
            game.physics.arcade.enable(char1);
            game.physics.arcade.enable(char2);
            game.physics.arcade.enable(char3);
            game.physics.arcade.enable(char4);
             //char1.scale.setTo(2);
            // char2.scale.setTo(1.2);
            // char3.scale.setTo(1.2);
            // char4.scale.setTo(1.2);

            char1.type=1;
            char2.type=2;
            char3.type=3;
            char4.type=4;

            char1.anchor.x = 0.5;
            char1.anchor.y = 1;            
            char1.inputEnabled = true;
            char1.input.useHandCursor = true;
            char1.events.onInputDown.add(showcharacterinfo, this);

            char2.anchor.x = 0.5;
            char2.anchor.y = 1;
            char2.inputEnabled = true;
            char2.input.useHandCursor = true;
            char2.events.onInputDown.add(showcharacterinfo, this);

            char3.anchor.x = 0.5;
            char3.anchor.y = 1;
            char3.inputEnabled = true;
            char3.input.useHandCursor = true;
            char3.events.onInputDown.add(showcharacterinfo, this);

            char4.anchor.x = 0.5;
            char4.anchor.y = 1;
            char4.inputEnabled = true;
            char4.input.useHandCursor = true;
            char4.events.onInputDown.add(showcharacterinfo, this);

            if(avatar==1){
            	
            	curChar=char1;
            	animationstay=[];
            	j=0;
            	for (i = 0; i < 138; i++) {  
            		animationstay[j]=i;
            		j++;
            	}
            	fps=55;

            }
            if(avatar==2){

            	curChar=char2;
            	animationstay=[];
            	j=0;
            	for (i = 0; i < 19; i++) { 
            		animationstay[j]=i;
            		j++;
            	}
            	fps=30;
            }
            if(avatar==3){

            	curChar=char3;
            	animationstay=[];
            	j=0;
            	for (i = 0; i < 49; i++) { 
            		animationstay[j]=i;
            		j++;
            	}
            	fps=55;
            }
            if(avatar==4){
            	
            	curChar=char4;
            	animationstay=[];
            	j=0;
            	for (i = 0; i < 19; i++) { 
            		animationstay[j]=i;
            		j++;
            	}
            	fps=30;
            }

            curChar.animations.add("stay",animationstay);
            curChar.animations.play("stay", fps,true);
            
            if(mobile){
                game.add.tween(curChar.scale).to( { x: 1.5 ,y:  1.5 }, 250, "Linear", true);
            }else{

            }

            ctapos=avatar-1;
            cta = game.add.sprite(containerPadding+middle_col_4+col4*ctapos,(game.height/2+(270)/2)+80,"cta-"+avatar);
            cta.anchor.x = 0.5;
            cta.anchor.y = 0.5;
            cta.inputEnabled = true;
            cta.input.useHandCursor = true;
            cta.type=avatar;
            cta.events.onInputDown.add(choseAvatar, this);

            arrow=game.add.sprite(containerPadding+middle_col_4+col4*ctapos,game.height/2-(270)/2-10,"arrow-"+avatar);
            arrow.anchor.x = 0.5;
            arrow.anchor.y = 0.5;

            yoyo= game.add.tween(arrow).to( { y: "-20" }, 400,  Phaser.Easing.Sinusoidal.InOut, true, 0, -1);
            yoyo.yoyo(true, 0);

            if(mobile){
                nametext=game.add.text( containerPadding+middle_col_4+col4*ctapos , (game.height/2+110 ) ," ", {font: '700 24px  Arial', fill: "#FFFFFF", align: "center",boundsAlignH: "center",boundsAlignV:"center" }); 
            }else{
             nametext=game.add.text( containerPadding+middle_col_4+col4*ctapos , (game.height/2+(270)/2 ) ," ", {font: '700 16px Montserrat, Arial', fill: "#FFFFFF", align: "center",boundsAlignH: "center",boundsAlignV:"center" }); 
         }

         subtext=game.add.text( containerPadding+middle_col_4+col4*ctapos, (game.height/2+(270)/2 )+30," ", {font: '400 14px Montserrat, Arial', fill: "#FFFFFF", align: "center",boundsAlignH: "center",boundsAlignV:"center" }); 
         nametext.anchor.x = 0.5;
         nametext.anchor.y = 0.5;
         subtext.anchor.x = 0.5;
         subtext.anchor.y = 0.5;
         subtext.lineSpacing = -5;
         if(avatar==1){
             nametext.setText("CODY THE DEVELOPER");
             subtext.setText("The bug-fixing and \ntroubleshooting whiz.");
         }
         if(avatar==2){
             nametext.setText("SKETCH THE GRAPHIC DESIGNER");
             subtext.setText("The rockin' \nvisionary.");
         }
         if(avatar==3){
             nametext.setText("LEADY THE PM");
             subtext.setText("The leader \nof the pack.");
         }
         if(avatar==4){
             nametext.setText("GEANIE THE COPYWRITER");
             subtext.setText("The catchphrase and\n tagline nut");
         }

         if(mobile){
            subtext.kill();
            arrow.kill();
            char1.y=game.height/2+80;
            char1.anchor.y=1;


            char2.y=game.height/2+80;
            char2.anchor.y=1;


            char3.y=game.height/2+80;
            char3.anchor.y=1;


            char4.y=game.height/2+80;
            char4.anchor.y=1;

            cta.y=game.height/2+180;
            cta.scale.setTo(1.5)


        }

    }

    function showcharacterinfo(sprite){

     char1.kill();char2.kill();char3.kill();char4.kill();cta.kill();arrow.kill();nametext.kill();subtext.kill();
     load_avatar(sprite.type);
     bonus = game.sound.play('bonus');
     bonus.volume=0.5;

 }

 function choseAvatar(cta){
     avatarselected=cta.type;


       selected = game.sound.play('selected');
       selected.volume=0.5;
       selected.onStop.add(selectedFinish, this);
       if(firstTry){
        firstTry=false;
        game.state.add("howto",howto);
        game.state.start("howto");
    }else{
        game.state.add("play",play);
        game.state.start("play");
    }


}
function selectedFinish(){

}