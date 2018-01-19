

var bg;
var curChar;
var fumo,cta,arrow,nametext,subtext, occhio1,occhio2,occhio3;
    // game.state.add("Menu",menu);

    /*DECLARE GAME STATE -> INIT -> TO LOAD ALL RESOURCES AND LOADING GIF*/
    var lose = function(game){}  
    lose.prototype = {

    	preload:function(){

    		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    		//game.scale.setScreenSize(true);
            
        },
        create:function(){

            attesa = game.sound.play('attesa');
            attesa.loopFull();
            attesa.volume=1;

            // diesound = game.sound.play('diesound');
            // diesound.volume=0.5;
        

        	containerPadding=100;
        	bg = game.add.sprite(game.width/2,game.height/2,  'bglost'); 
        	 bg.scale.setTo(0.7);
        	bg.anchor.x = 0.5;
        	bg.anchor.y = 0.5;

        	fumo = game.add.sprite(game.width/2-165,game.height/2-10,"fumo");
        	bg.anchor.x = 0.5;
        	bg.anchor.y = 0.5;
           	

			fumo.animations.add("fumo");
			fumo.animations.play("fumo", 30,true);

			occhio3 = game.add.sprite(game.width/2-250,game.height/2+180,"occhio3");
		
			occhio2 = game.add.sprite(game.width/2+5,game.height/2+230,"occhio2");

			occhio1 = game.add.sprite(game.width/2+160,game.height/2+130,"occhio1");
			occhio1.anchor.x = 0.5;
        	occhio1.anchor.y = 0.5;
        	occhio2.anchor.x = 0.5;
        	occhio2.anchor.y = 0.5;
        	occhio3.anchor.x = 0.5;
        	occhio3.anchor.y = 0.5;

            ctaretry=game.add.sprite(game.width/2+170,game.height/2+50,"cta-lost");
            ctaretry.anchor.x = 0.5;
            ctaretry.inputEnabled = true;
            ctaretry.input.useHandCursor = true;
            ctaretry.events.onInputDown.add(ctaretryfuction, this);


            ctarecontact=game.add.sprite(game.width/2+150,game.height-50,"contact-us");
            //ctarecontact.anchor.x = 0.5;
            ctarecontact.inputEnabled = true;
            ctarecontact.input.useHandCursor = true;
            ctarecontact.events.onInputDown.add(ctarecontactFunction, this);


            game.time.events.loop(Phaser.Timer.SECOND*3.1, function(){
            	
            	occhio1.alpha = 0;
            	game.time.events.add(Phaser.Timer.SECOND*0.5 , function(){
				occhio1.alpha = 1;
			
				}, this);
            }, game);  

            game.time.events.loop(Phaser.Timer.SECOND*4.2, function(){
            	occhio2.alpha = 0;
            	game.time.events.add(Phaser.Timer.SECOND*0.6 , function(){
				occhio2.alpha = 1;
			
				}, this);
            }, game);  

            game.time.events.loop(Phaser.Timer.SECOND*2.5, function(){
        		occhio3.alpha = 0;
            	game.time.events.add(Phaser.Timer.SECOND*0.4 , function(){
				occhio3.alpha = 1;
			
				}, this);
            }, game);  

            if(mobile){

                fumo.x=game.width/2-315;
                fumo.y=game.height/2-45;

                ctaretry.x=game.width/2+170
                ctaretry.y=game.height/2+100

                ctarecontact.x=game.width/2+70
                ctarecontact.y=game.height/2+250

                occhio3.x=game.width/2-399
                occhio3.y=game.height/2+150
                occhio2.x=game.width/2-127
                occhio2.y=game.height/2+205
                occhio1.x=game.width/2+35
                occhio1.y=game.height/2+95


            }

            function ctaretryfuction(){
                game.state.add("menu",menu);
                game.state.start("menu");    
            }

             function ctarecontactFunction(){
                 if(mobile){
                    location.href="http://www.playground.it/comingsoon/#4";
                 }else{
                    manualMoveTo(4);
                 }
            }
            

        }, 
        render:function(){



	      }


	  
	
}


