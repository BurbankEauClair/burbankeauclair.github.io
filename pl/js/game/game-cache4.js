	fpsStay=55;
	fpsJump=65;
     //STATE PLAY -> THE REAL GAME LOGIC
     var play = function(game){}     

     play.prototype = {

     	preload:function(){
     		if (typeof attesa !== 'undefined'){
     			attesa.stop();

     		}
     		
     		if(avatarselected==1){
                //game.load.spritesheet("ninja", "images/new/developer-fermo-salto-win-planata.png", 200, 200);
                // game.load.atlas('ninja', 'images/new/character/devAtlasJson-compressed.png', 'images/new/character/devAtlasJson.json');      
                game.load.atlas('ninja', 'images/new/character/dev.png', 'images/new/character/dev.json');
                if(mobile){
                	game.load.image("quit-bg", "images/new/quit/quit-game-dev-mob.png");
                }else{
                	game.load.image("quit-bg", "images/new/quit/quit-game-dev.png");
                }
            }
            if(avatarselected==2){

                 //game.load.spritesheet("ninja", "images/new/grafico-fermo-salto-win-planata.png", 200, 200);
                 game.load.atlas('ninja', 'images/new/character/gra.png', 'images/new/character/gra.json');  
                 if(mobile){
                 	game.load.image("quit-bg", "images/new/quit/quit-game-gra-mob.png"); 
                 }else{
                 	game.load.image("quit-bg", "images/new/quit/quit-game-gra.png"); 
                 }
             }
             if(avatarselected==3){
               //game.load.spritesheet("ninja", "images/new/Pm-ferma-salto-win-planata.png", 200, 200);
               game.load.atlas('ninja', 'images/new/character/pm.png', 'images/new/character/pm.json');      
               if(mobile){
               	game.load.image("quit-bg", "images/new/quit/quit-game-pm-mob.png");    
               }else{
               	game.load.image("quit-bg", "images/new/quit/quit-game-pm.png");    
               }
               
           }
           if(avatarselected==4){
                //game.load.spritesheet("ninja", "images/new/copy-ferma-salto-win-planata.png", 200, 200);
                game.load.atlas('ninja', 'images/new/character/copy.png', 'images/new/character/copy.json');   
                if(mobile){
                	game.load.image("quit-bg", "images/new/quit/quit-game-cop-mob.png");
                }else{
                	game.load.image("quit-bg", "images/new/quit/quit-game-cop.png");	
                }
                
            }




            stop=0;
            error=0;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
           // game.scale.setScreenSize(true);
       },

       create:function(){

 			//init variabiles
 			ninjaJumping = false;
 			ninjaFallingDown = false;
 			score = 0;
 			placedPoles = 0;
 			landed=false;
 			emitterStart=false;


 			createUI();
 			

 			game.input.onDown.add(genericClick, self);
 			poleGroup = game.add.group();
 			
 			game.physics.startSystem(Phaser.Physics.ARCADE);	
 			generateAnimations();
 			ninja.is_flying=false;	
 			ninja.anchor.set(0.5);	
 			ninja.lastPole = 1;
 			ninja.enableBody = true;
 			ninja.body.gravity.y = ninjaGravity;


 			if(mobile){
 				jump_bt = game.add.button(game.width-100,game.height-60,"bt-jump"); 	
 				jump_bt.scale.setTo(1.5);
 				jump_bt.anchor.set(1);
 			}else{
 				jump_bt = game.add.button(game.world.centerX,550,"bt-jump");	
 				jump_bt.anchor.set(0.5);
 			}
 			
 			jump_bt.input.useHandCursor = true;
 			jump_bt.frame=0;

 			jump_bt.inputEnabled = true;

			//game.input.onDown.add(prepareToJump, this);
			jump_bt.events.onInputDown.add(prepareToJump, this);		
			game.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			game.escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);

			game.spaceKey.onDown.add(prepareToJump, this);
			game.escKey.onDown.add(escFullScreen, this);


			jump_bt.events.onInputDown.add(ninja_is_flying, this);
			jump_bt.events.onInputUp.add(ninja_is_not_flying, this);

			game.spaceKey.onDown.add(ninja_is_flying, this);
			game.spaceKey.onUp.add(ninja_is_not_flying, this);


			addPole(180);	

			//game.time.events.loop(Phaser.Timer.SECOND*10, generateEnemy, this);	
			enemyTimer = this.game.time.create(false);

			music = game.sound.play('music');
			music.volume=1;

			generateEnemy();

			if(!mobile){
				
				fullscreenContainer=game.add.sprite(game.world.width,game.world.height,"fullscreenContainer");	
				fullscreenContainer.width=fullscreenContainer.width/(header.prewidth/header.width)	;
				fullscreenContainer.height=fullscreenContainer.height/(header.prewidth/header.width);	
				fullscreenContainer.anchor.setTo(1);


				resize = game.add.button(game.world.width-70,game.world.height-70,"fullscreen");		
				resize.input.useHandCursor = true;		
				resize.inputEnabled = true;	
				resize.events.onInputDown.add(toggleFullScreen, this);
			}
			
			generateModals();

			/*
			if(firstTry){
				
				info_modal();

			}else{*/
				if(game.sound.mute){
					toggleVolume.loadTexture("mute");
					isMuted=true;
				}
				start();

			//}

		},

		update:function(){
			game.physics.arcade.overlap(ninja, missile, onCollision);
			game.physics.arcade.overlap(ninja, plustime, plustimeCollide);
			//sole.angle += 0.5;
			
			game.physics.arcade.collide(ninja, poleGroup, checkLanding);

			y_new=(window.innerHeight*(ninja.y-300))/game.height;

			
			if(y_new>200){

				die();

			}


			

		}, render:function(){


 			//poleGroup.forEachAlive(renderGroup, this);

	        //game.debug.bodyInfo(missile, 32, 32);
	      	//game.debug.body(ninja);
	        //game.debug.body(missile);

	         // game.debug.soundInfo(music, 32, 32);

	         // if (music.isDecoding)
	         // {
	         // 	game.debug.text("Decoding MP3 ...", 32, 200);
	         // }
	     }

	 }     

	 function renderGroup(member) {  game.debug.body(member);}

	 function start(){
	 	//console.log("start");
	 	stop=true;

	 	die_overlay = game.add.tileSprite(0, 0, game.width, game.height, 'die_overlay');		
	 	die_overlay.alpha = 0.5;


	 	ready = game.add.sprite(game.width/2,game.height/2,"ready");
	 	set = game.add.sprite(game.width/2,game.height/2,"set");
	 	go =  game.add.sprite(game.width/2,game.height/2,"go");



	 	ready.anchor.setTo(0.5);
	 	set.anchor.setTo(0.5);
	 	go.anchor.setTo(0.5);

	 	ready.scale.setTo(0);
	 	set.scale.setTo(0);
	 	go.scale.setTo(0);

	 	tweenA = game.add.tween(ready.scale).to( { x: 1,y: 1 }, 800,Phaser.Easing.Quadratic.Out);
	 	tweenB = game.add.tween(set.scale).to( { x: 1,y: 1 }, 800,Phaser.Easing.Quadratic.Out);
	 	tweenC = game.add.tween(go.scale).to( { x: 1,y: 1 }, 800, Phaser.Easing.Quadratic.Out);

	 	tweenA.chain(tweenB);
	 	tweenB.chain(tweenC);
	 	tweenA.start();
	 	tweenA.onComplete.add(function(){
	 		ready.alpha = 0;
	 		bonus = game.sound.play('bonus');
	 		bonus.volume=0.4;


	 	}, this);
	 	tweenB.onComplete.add(function(){
	 		set.alpha = 0;
	 		bonus = game.sound.play('bonus');
	 		bonus.volume=0.4;
	 		

	 	}, this);
	 	tweenC.onComplete.add(function(){
	 		go.alpha = 0;
	 		die_overlay.alpha = 0;
	 		stop=false;
	 		selected = game.sound.play('selected');
	 		selected.volume=0.4;

	 	}, this);



	 }


	 function generateAnimations(){
	 	

	 	ninja = game.add.sprite(200,0,"ninja");
	 	game.physics.arcade.enable(ninja);



	 	if(avatarselected==1){
	 		frameplanataninja=259;



	 		animationstay=[];
	 		j=0;
	 		for (i = 0; i <= 130; i++) { 
	 			animationstay[j]=i;
	 			j++;
	 		}

	 		animationjump=[];
	 		j=0;
	 		for (i = 139; i <= 178; i++) {				
	 			animationjump[j]=i;
	 			j++;
	 		}

	 		animationlading=[];
	 		j=0;
	 		for (i = 179; i <= 197; i++) {				
	 			animationlading[j]=i;
	 			j++;
	 		}

	 		animationwin=[];
	 		j=0;
	 		for (i = 198; i <= 258; i++) {				
	 			animationwin[j]=i;
	 			j++;
	 		}

	 		ninja.body.setSize(45, 160, 70, 20);   
	 	}


	 	if(avatarselected==2){
	 		frameplanataninja=110;
	 		fpsStay=30;
	 		fpsJump=90;

	 		animationstay=[];
	 		j=0;
	 		for (i = 0; i < 19; i++) { 
	 			animationstay[j]=i;
	 			j++;
	 		}

	 		animationjump=[];
	 		j=0;
	 		for (i = 20; i <= 52; i++) {				
	 			animationjump[j]=i;
	 			j++;
	 		}

	 		animationlading=[];
	 		j=0;
	 		for (i = 53; i <= 79; i++) {				
	 			animationlading[j]=i;
	 			j++;
	 		}

	 		animationwin=[];
	 		j=0;
	 		for (i = 80; i <= 109; i++) {				
	 			animationwin[j]=i;
	 			j++;
	 		}
	 		ninja.body.setSize(45, 125, 40, 10);   

	 	}

	 	if(avatarselected==3){
	 		frameplanataninja=195;


	 		animationstay=[];
	 		j=0;
	 		for (i = 0; i < 49; i++) { 
	 			animationstay[j]=i;
	 			j++;
	 		}

	 		animationjump=[];
	 		j=0;
	 		for (i = 50; i <= 98; i++) {				
	 			animationjump[j]=i;
	 			j++;
	 		}

	 		animationlading=[];
	 		j=0;
	 		for (i = 99; i <= 119; i++) {				
	 			animationlading[j]=i;
	 			j++;
	 		}

	 		animationwin=[];
	 		j=0;
	 		for (i = 120; i <= 194; i++) {				
	 			animationwin[j]=i;
	 			j++;
	 		}
	 		ninja.body.setSize(45, 140, 50, 20);   



	 	}

	 	if(avatarselected==4){
	 		fpsStay=30;
	 		fpsJump=60;

	 		frameplanataninja=145;


	 		animationstay=[];
	 		j=0;
	 		for (i = 0; i < 19; i++) { 
	 			animationstay[j]=i;
	 			j++;
	 		}

	 		animationjump=[];
	 		j=0;
	 		for (i = 20; i <= 60; i++) {				
	 			animationjump[j]=i;
	 			j++;
	 		}

	 		animationlading=[];
	 		j=0;
	 		for (i = 61; i <= 84; i++) {				
	 			animationlading[j]=i;
	 			j++;
	 		}

	 		animationwin=[];
	 		j=0;
	 		for (i = 85; i <= 144; i++) {				
	 			animationwin[j]=i;
	 			j++;
	 		}
	 		ninja.body.setSize(45, 140, 50, 20);   

	 	}

	 	ninja.animations.add("stay",animationstay);
	 	ninja.animations.add("jump",animationjump);
	 	ninja.animations.add("landing",animationlading);
	 	ninja.animations.add("win",animationwin);
	 	ninja.animations.play("stay", fpsStay,true);
	 }

	 function generateEnemy(){

			// if( game.rnd.integerInRange(0, 1)){
				enemyTimer.add(Phaser.Timer.SECOND * 15,generateEnemy);
				enemyTimer.start();

				if(!stop){
					//console.log("generateEnemy");
					
					animationmissile =[];
					j=0;
					if( game.rnd.integerInRange(0, 1)){
						missile = game.add.sprite(game.width,0,"missile");
						for (i = 0; i <= 19; i++) {				
							animationmissile[j]=i;
							j++;
						}
					}else{
						missile = game.add.sprite(game.width,0,"piccione");
						j=0;
						for (i = 0; i <= 19; i++) {				
							animationmissile[j]=i;
							j++;
						}
					}

					missile.animations.add("run",animationmissile);
					missile.animations.play("run", 35,true);

					missile.x=game.world.width;
					game.physics.arcade.enable(missile);
					missile.enableBody = true;


					missile.y=ninja.y;
					missile.body.velocity.x=missileVelocity;
					missile.outOfBoundsKill = true;
					
				}



			}

			function onCollision(player,missile){
				if(!stop){
					malus = game.sound.play('malus');
					malus.volume=0.4;
					//console.log("on collision");

					missile.kill();
					timerCounter=timerCounter-5;
					timertext.setText(timerCounter);

				}


			}
			function plustimeCollide(player,timesprite){
				timesprite.kill();
				timerCounter=timerCounter+5;
				timertext.setText(timerCounter);
				bonus = game.sound.play('bonus');
				bonus.volume=0.4;

			}   


			function unpause(){
		//close all modals and defreeze game
				//console.log("pause:"+game.paused);
				if(game.paused){

					game.paused = false;
				}else{

					game.paused = true;
				}

			}

			function createUI(){
		//console.log("createUI");
		game.stage.backgroundColor = "#000000";

		
		bg1 = game.add.tileSprite(0, 0, game.width, game.cache.getImage('bg1').height, 'bg1');	
		sole = game.add.sprite(game.width-80,100,"sole");
		bg2 = game.add.tileSprite(0, 90, game.width, game.cache.getImage('bg2').height, 'bg2');
		sole.scale.setTo(0.4);
		nuvole = game.add.tileSprite(0, 100, game.width, game.cache.getImage('nuvole').height, 'nuvole');
		bg3 = game.add.tileSprite(0, 200, game.width, game.cache.getImage('bg3').height, 'bg3');
		bg4 = game.add.tileSprite(0, 240, game.width, game.cache.getImage('bg4').height, 'bg4');
		bg5 = game.add.tileSprite(0, 290, game.width, game.cache.getImage('bg5').height, 'bg5');
		bg6 = game.add.tileSprite(0, 310, game.width, game.cache.getImage('bg6').height, 'bg6');


		//logo = game.add.sprite(10,10,"splashtitle");

		//logo.scale.setTo(0.5);
		if(!mobile){
			header= game.add.sprite(0,0,"header");
			header.prewidth=header.width;
			header.width = game.width;
			header.height=header.height/(header.prewidth/header.width);	

			toggleVolume = game.add.button(game.width-150,26,"volume");
			bt_info = game.add.button(game.width-103,24,"bt-info");	
			exitBtn = game.add.button(game.width-48,28,"exit");				

		}else{
			header= game.add.sprite(0,0,"header-mob-1");
			header2= game.add.sprite(game.width,0,"header-mob-2");
			header2.anchor.x=1;

			orologio= game.add.sprite(game.width/2,0,"orologio");
			orologio.anchor.x=0.5;
			toggleVolume = game.add.button(game.width-295,36,"volume");
			bt_info = game.add.button(game.width-190,34,"bt-info");	
			exitBtn = game.add.button(game.width-76,40,"exit");	

			toggleVolume.scale.setTo(1.5);
			bt_info.scale.setTo(1.5);
			exitBtn.scale.setTo(1.5);
			
		}
		

		toggleVolume.input.useHandCursor = true;		
		toggleVolume.inputEnabled = true;	
		toggleVolume.events.onInputDown.add(toggleMute, this);
		
		bt_info.input.useHandCursor = true;		
		bt_info.inputEnabled = true;	
		bt_info.events.onInputDown.add(info_modal, this);

		exitBtn.input.useHandCursor = true;		
		exitBtn.inputEnabled = true;	
		exitBtn.events.onInputDown.add(exitGame, this);
		


		//bt_exit.events.onInputDown.add(exit_modal, this);
		timerCounter=timer;
		timertext=game.add.text(game.width/2+5,timerCounter,timer, {font: '700 40px Montserrat, Arial', fill: "#00458a", align: "center" ,boundsAlignH: "center",boundsAlignV:"center"});       
		timertext.anchor.set(0.5,0);

		if(mobile){
			timertext.y=70;
			timertext.x=game.width/2+10;
		}
		timerObj=game.time.events.loop(Phaser.Timer.SECOND, function(){
			refresh_timer();
		}, game);  

	}

	function toggleFullScreen(){
		console.log("toggleFullScreen")
		if(gameFullscreen){
			resize.loadTexture("fullscreen");
			returnFromFullscreen();
		}else{
			resize.loadTexture("resize");
			
			gameToFullscreen();
		}
		
	}


	function escFullScreen(){
		if(gameFullscreen){
			resize.loadTexture("fullscreen");
			returnFromFullscreen();
		}
	}

	function toggleMute(){
		console.log("toggleMute")
		if(game.sound.mute){
			toggleVolume.loadTexture("volume");
			isMuted=false;
			game.sound.mute = false;

		}else{
			toggleVolume.loadTexture("mute");
			isMuted=true;
			game.sound.mute = true;

		}
	}


	function exitGame(){
		modal.flow=3;
		modal.showModal("modal_quit");
		stop=true;
		unpause();

	}

	function goTo(sprite, pointer){
		//console.log("goTo:"+sprite.location);
		location.href='index.php?cdUser='+user_id+'&canale='+canale+'&ingame=true&replay='+sprite.location;
	}

	function info_modal(){
		stop=true;
		unpause();
		modal.flow=0;
		modal.showModal("modal_rules");
	}
	// Add a input listener that can help us return from being paused


	function refresh_timer(){
		if(!stop){
			timerCounter--;
			timertext.setText(timerCounter);

			if(timerCounter<=0 ){
				
				die();
			}
		}
	}

	function genericClick(){
		//console.log(game.paused);
		//console.log(modal.flow);
		if (game.paused && modal.flow==0) {
		   	//console.log("caso 1");

		   	modal.hideModal("modal_rules");    
		   	modal.showModal("modal_come_si_gioca");    
		   	modal.flow=1;

		   	return;   

		   }
		   if (game.paused && modal.flow==1) {
			//console.log("caso 2");
			game.paused = false;     
			modal.hideModal("modal_come_si_gioca");   
			modal.flow=0; 

			stop=false;		

		}

		if (game.paused && modal.flow==3) {

			//console.log("flow==3");
		}
	}


	function prepareToJump(){
		if(!stop){
			//console.log("stop:"+stop);
			jump_bt.frame=1;

			if(!ninjaJumping){

				quantityPlanata=quantityPlanataConstant;

				powerbarcontainer=game.add.tileSprite(ninja.x-5,ninja.y-160,130,78,"powerbarcontainer");
				powerBar = game.add.tileSprite(ninja.x-5,ninja.y-160,130,78,"powerbar");


				powerBar.width = 0;

				powerTween = game.add.tween(powerBar).to({

					width:129

				}, 1000, "Linear",true); 


				jump_bt.events.onInputDown.remove(prepareToJump, this);
				jump_bt.events.onInputUp.add(jump, this);


				game.spaceKey.onDown.remove(prepareToJump, this);
				game.spaceKey.onUp.add(jump, this);

			}        	
		}
	}     

	function jump(){

		landed=false;
		ninjaFallingDown = true;
		ninjaJumping = true;
		// console.log(ninjaFallingDown);
		// console.log(ninjaJumping);
		jump_bt.frame=0;
		ninjaJumpPower= -powerBar.width*2.6

		powerBar.destroy();
		powerbarcontainer.destroy();
		game.tweens.removeAll();

		ninja.body.velocity.y = ninjaJumpPower*2;	

		ninja.animations.stop();

		ninja.animations.play("jump", fpsJump,false);
		

		jumpsound = game.sound.play('jump');
		jumpsound.volume=0.7;

		powerTween.stop();

		//game.input.onUp.remove(jump, this);
		jump_bt.events.onInputUp.remove(jump, this);
		game.spaceKey.onUp.remove(jump, this);




	}     


	function ninja_is_flying(){
		// console.log("ninja_is_flying");
		
		if(ninjaJumping && !flyblock){

			ninja.is_flying=true;
			
			ninja.animations.stop();
			ninja.frame = frameplanataninja; 
			jump_bt.frame=1;


			
			
		}
		
	}

	function ninja_is_not_flying(){
		// console.log("ninja_is_not_flying");
		ninja.frame=animationjump[animationjump.length - 1];
		ninja.is_flying=false;
		jump_bt.frame=0;
	}

	function addNewPoles(){

		var maxPoleX = 0;

		poleGroup.forEach(function(item) {

			maxPoleX = Math.max(item.x,maxPoleX)			

		});

		var nextPolePosition = maxPoleX + game.rnd.between(minPoleGap,maxPoleGap);

		addPole(nextPolePosition);			

	}

	function addPole(poleX){
		if(placedPoles<finalPole){
			if(poleX<game.width*2){

				placedPoles++;

				var pole = new Pole(game,poleX,game.rnd.between(280,340));

				game.add.existing(pole);

				pole.anchor.set(0.5,0);

				poleGroup.add(pole);

				var nextPolePosition = poleX + game.rnd.between(minPoleGap,maxPoleGap);

				addPole(nextPolePosition);

			}
		}

	}	
	function gamewin(){
		//console.log("gamewin");
		jump_bt.kill();
		stop=true;
		game.time.events.add(Phaser.Timer.SECOND*2 , function(){
			
			game.state.add("win",win);
			game.state.start("win");
			
			//modal.showModal("modal_continue");
		}, this);
	}
	function die(){

		if(!stop){
			die_overlay = game.add.tileSprite(0, 0, game.width, game.height, 'die_overlay');		
			die_overlay.alpha = 0.5;
			stop=true;
			music.stop();

			game.spaceKey.onDown.remove(prepareToJump, this);
			jump_bt.kill();
			if(game.sound.mute){
				dieSoundFinish();
			}else{
				die_sound = game.sound.play('die');
				die_sound.volume=1;
				die_sound.onStop.add(dieSoundFinish, this);
			}
			
		}

	}

	function dieSoundFinish(){
		game.state.add("lose",lose);
		game.state.start("lose");
	}

	function emiiterExplode(x,y,name){
		firework=game.add.sprite(x,y,name);
		//animationstay=[];
 		// j=0;
 		// for (i = 0; i <= 130; i++) { 
 		// 	animationstay[j]=i;
 		// 	j++;
 		// }
 		firework.animations.add("explode");
 		firework.animations.play("explode", 60,false);
		//emitter = game.add.emitter(x, y-200, 200);
			//  Here we're passing an array of image keys. It will pick one at random when emitting a new particle.
			// emitter.makeParticles(['star']);
			// //emitter.gravity = 0;
			// emitter.gravity = 300;
			// emitter.setXSpeed(-400, 400);
			// emitter.setYSpeed(-300, 300);
			// //emitter.start(true, 2000, 10, 60);
			//  //  This will emit a single particle every 100ms. Each particle will live for 2000ms.
			// //  The 100 means it will emit 100 particles in total and then stop.
			// //PARAMETERS: life time of signle particles //every ms time //emit n particels per cicle //total of particle will emit in total (-1 infinite)
		  //   	emitter.flow(1000, 2000, 50, -1);
		  emitterStart=true;
				// emitter.autoAlpha = true;


			}

			function checkLanding(n,p){
				flyblock=false;
				if(!landed){
					var poleDiff = p.poleNumber-n.lastPole;

					ninja.animations.stop();


					ninja.animations.play("landing", fpsJump,false);
					ninja.animations.currentAnim.onComplete.add(function () {	

						ninja.animations.play("stay", fpsStay,true);
					}, this);
					landed=true;


				}


				hdiff = n.y-p.y;
		//console.log(hdiff);
		if(p.winpole && hdiff<200){
			//console.log("winpole");
			if(!emitterStart){
				music.stop();
				winsound = game.sound.play('win');
				winsound.volume=1;
				//console.log("emitterStart");
				emiiterExplode(p.x,p.y-150,"firework-2");
				game.time.events.add(Phaser.Timer.SECOND/2 , function(){
					emiiterExplode(p.x+100,p.y-250,"firework-1");

				}, this);
				game.time.events.add(Phaser.Timer.SECOND , function(){
					emiiterExplode(p.x+250,p.y-150,"firework-3");
				}, this);

				ninja.animations.currentAnim.onComplete.add(function () {	
					ninja.animations.play("win", 60,true);
				}, this);
				//console.log("pre win");
				gamewin();
			}

		}		


		var border = n.x-p.x
		


		if(poleDiff>0){

			ninjaFallingDown = false;
			ninja_is_not_flying();

			if(p.broken){
				p.body.velocity.y = 50;	
				addQuake(p);
			}

			n.lastPole= p.poleNumber;

		}

		if(ninjaJumping){

			ninjaJumping = false;              

			//game.input.onDown.add(prepareToJump, this);
			jump_bt.events.onInputDown.add(prepareToJump, this);
			game.spaceKey.onDown.add(prepareToJump, this);
		}





	}


	function addQuake(pole) {

  // define the camera offset for the quake
  var rumbleOffset = 5;
  
  // we need to move according to the camera's current position
  var properties = {
  	x: pole.x- rumbleOffset
  };
  
  // we make it a relly fast movement
  var duration = 50;
  // because it will repeat
  var repeat = 4;
  // we use bounce in-out to soften it a little bit
  var ease = Phaser.Easing.Bounce.InOut;
  var autoStart = false;
  // a little delay because we will run it indefinitely
  var delay = 800;
  // we want to go back to the original position
  var yoyo = true;
  
  var quake = game.add.tween(pole)
  .to(properties, duration, ease, autoStart, delay, 4, yoyo);
  
  // we're using this line for the example to run indefinitely
  quake.onComplete.addOnce(addQuake);
  
  // let the earthquake begins
  quake.start();
}

Pole = function (game, x, y) {

	
	var r= game.rnd.integerInRange(2, 6);	
		//console.log("x"+x+"y"+y);
		// console.log("putpole");
		// console.log(placedPoles);
		if(placedPoles==finalPole){
			Phaser.Sprite.call(this, game, x, y, "palazzoFinale");
			game.physics.enable(this, Phaser.Physics.ARCADE);
			
			this.winpole=true;



		}else{

			if(placedPoles==1){
				Phaser.Sprite.call(this, game, x, y, "palazzo1");
			}else{
				if(placedPoles<finalPole){
					Phaser.Sprite.call(this, game, x, y, "palazzo"+r);
					if(placedPoles==7){
						plustime = game.add.sprite(0,0,"extratime");	
						plustime.scale.setTo(0.5);				
						plustime.anchor.x = 0.5;
						plustime.anchor.y = 1;		
						this.addChild(plustime);
						plustime.animations.add("bounce");
						plustime.animations.play("bounce", 30, true);
					}

					if(r==6){

						this.broken=1
					}
				}

			}

		}





		game.physics.enable(this, Phaser.Physics.ARCADE);
		this.body.immovable = true;
		this.body.checkCollision.left = false;
		this.body.checkCollision.right = false;
		this.body.checkCollision.down = false;
		// this.body.setSize(this.width, this.height, 0, 40);
		this.body.setSize(this.width, this.height, 0, 40);
		if(this.winpole){
			this.body.setSize(this.width-20, this.height, 0, 170)
		}

		this.poleNumber = placedPoles;

	};

	Pole.prototype = Object.create(Phaser.Sprite.prototype);

	Pole.prototype.constructor = Pole;

	Pole.prototype.update = function() {
		nuvole.tilePosition.x -= 0.10;

		if(ninjaJumping && !stop){
			nuvole.tilePosition.x -= 0.40;			
			 // bg1.tilePosition.x -= 0.10;	

			 bg2.tilePosition.x -= 0.10;			
			 bg3.tilePosition.x -= 0.30;		
			 bg4.tilePosition.x -= 0.40;		
			 bg5.tilePosition.x -= 0.50;
			 bg6.tilePosition.x -= 0.60;
			 
			 this.body.velocity.x = ninjaJumpPower;
			 if(typeof missile!== "undefined" && missile.body!=null){
			 	missile.body.velocity.x=missileVelocity+ninjaJumpPower;

			 }
			 

			}else{
			//ninja.frame = 0;  
			this.body.velocity.x = 0
			if(typeof missile!== "undefined"  && missile.body!=null){
				missile.body.velocity.x=missileVelocity;

			}
			



		}
		

		y_new=(window.innerHeight*(ninja.y+200))/game.height;		
		//	y_offset=window.innerHeight*200/game.height;
		// if(y_new>window.innerHeight){
		// 	//ninja.frame = 2; 
		// 	ninja.body.velocity.y=50

		// }

		if(ninja.is_flying && ninja.body.velocity.y>0){

			ninja.body.velocity.y = 1;
			if(quantityPlanata>0){
				quantityPlanata--;	

			}
			if(quantityPlanata==0){
				flyblock=true;
				ninja_is_not_flying();
				
			}
			
			

			
			//ninja.frame = 3; 
		}else{
			//console.log("fall");
		}

		if(this.x<-this.width){

			this.destroy();

			addNewPoles();

		}

	}	

	function externalmute(){
	
		if ( game.sound) {
			if(!isMuted){
				game.sound.mute = true;	
			}
		}


	}

	function externalunmute(){
		if(!isMuted){
			game.sound.mute = false;	
		}
		
		
	}


	var portait_modal_resize;

	function generateModals(){
		modal = new gameModal(game);
		modal.flow=0;
		if(mobile){
			portait_modal_resize=0.9;
			btnoffsetY=190;
			btnoffsetX=200;
			quitY=200;
		}else{
			portait_modal_resize=0.9;
			btnoffsetY=250;
			btnoffsetX=280;
			quitY=160;
		}



		modal.createModal({
			type:"modal_rules",
			includeBackground: true,
			modalCloseOnInput: false,
			itemsArr: [
			{
				type: "image",
				content: "how_to_rules",
				offsetY: 0,
				contentScale: portait_modal_resize,
			}
			

			]
		});

		modal.createModal({
			type:"modal_come_si_gioca",
			includeBackground: true,
			modalCloseOnInput: false,
			itemsArr: [
			{
				type: "image",
				content: "how_to_info",
				offsetY: 0,
				contentScale: portait_modal_resize,
			}
			

			]
		});

		modal.createModal({
			type:"modal_quit",
			includeBackground: true,
			modalCloseOnInput: false,
			itemsArr: [
			{
				type: "image",
				content: "quit-bg",
				offsetY: 0,
				contentScale: 1,
			}
			,    		
			{
				type: "image",
				content: "cta-yes",
				contentScale: 1,
				offsetY: quitY,
				offsetX: -100,
				callback: function () {


    				// goToNextLevel();

    				// console.log("!!!!!!!!!!RESTART INIT!!!!!!!!!!!!");
    				// goToNextLevel();
    				unpause();
    				game.state.add("init",init);
    				game.state.start("init");
    			}
    		},
    		{
    			type: "image",
    			content: "cta-no",
    			contentScale: 1,
    			offsetY: quitY,
    			offsetX: 100,
    			callback: function () {
    				// console.log("!!!!!!!!!!CLOSE!!!!!!!!!!!!");
    				modal.hideModal("modal_quit");    
    				stop=false;
    				unpause();

    			}
    		}

    		]
    	});		

	}

