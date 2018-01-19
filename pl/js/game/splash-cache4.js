/*GAME VAR*/
var game=false;
var modal;

/*GAME RATION VARIABILES -> FULL SCREEN REASON*/
if(mobile){
    var innerWidth = window.innerWidth;
    var innerHeight = window.innerHeight;
}else{
    var innerWidth = 1047;
    var innerHeight = 785;
}

var gameRatio = innerWidth/innerHeight; 
var portrait;
if(gameRatio>1){
    portrait=false;
}else{
    portrait=true;
}
var firstRunPortrait;


/*GAME OBJS*/
var ninja;  
var enemyTimer   
var gingle, die_sound, bonus, malus,attesa;
var ninjaJumping;
var ninjaFallingDown;
var ninjaJumpPower;
var scoreText;
var topScore;
var powerBar;
var powerTween;
var placedPoles;
var poleGroup; 
var touchingUi;
var missile;
var emitter;
var emitterStart;
var quantityPlanata;
var timerObj;
var timerCounter=0;
var timesprite;
var plustime;
/*sounds*/
var music;
var diesound;
var change,selected;
var winsound;

/*ui variabile*/
var logo,livello_1,livello_2,livello_3,jump_bt;
var resize,isMuted;

/*STATE VARIABILE*/
var stop=0;
var error=0;  
var score=0;
var firstTry=true;

/*GAME PARAMETERS*/
var ninjaGravity = 800;
var minPoleGap = 350;
var maxPoleGap = 700;  
var finalPole=10;
var missileVelocity=-250;
var landed=false;
var flyblock=false;
var avatarselected=0;
var frameplanataninja;
var xOffset=0;
var yOffset=0;
var quantityPlanataConstant=100;
var timer=38;

var userAgent = navigator.userAgent || navigator.vendor || window.opera;

renderingType=Phaser.WebGL;
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
     renderingType=Phaser.CANVAS;
       //alert("canvas");
   }

   if (/android/i.test(userAgent)) {
      renderingType=Phaser.CANVAS;
        //  alert("canvas");
    }


    function preload(){
        
        game.state.add("Init",init);
        game.state.start("Init");
    }



    game = new Phaser.Game(Math.floor(645*gameRatio), 645, Phaser.CANVAS,"game-container", { preload: preload });     


    // game.state.add("Menu",menu);

    /*DECLARE GAME STATE -> INIT -> TO LOAD ALL RESOURCES AND LOADING GIF*/
    var init = function(game){}  
    init.prototype = {

     preload:function(){

            game.stage.backgroundColor = "#00a7e3";
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');     		
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

       if(mobile){
            game.scale.forceOrientation(true, false);
            game.scale.enterIncorrectOrientation.add(handleIncorrect);
            game.scale.leaveIncorrectOrientation.add(handleCorrect);
        }

        firstRunPortrait = game.scale.isGamePortrait;
       // game.scale.setScreenSize(true);
       
       game.load.audio('music',"sounds/game-music.mp3");
       game.load.audio('die',"sounds/game-over.mp3");
       game.load.audio('malus',"sounds/malus.mp3");
       game.load.audio('bonus',"sounds/bonus.mp3");
       game.load.audio('attesa',"sounds/attesa.mp3");        
       game.load.audio('selected',"sounds/selected.mp3");
       game.load.audio('jump',"sounds/jump.mp3");

       game.load.audio('win',"sounds/win.mp3");


        /*IMAGE LOADING SECTION*/

        //GAME IMAGES
    

        
        //GAME ELEMENTS
        game.load.image("palazzo1", "images/new/palazzo3-v2.png");
        game.load.image("palazzo2", "images/new/palazzo2.png");
        game.load.image("palazzo3", "images/new/palazzo3.png");
        game.load.image("palazzo4", "images/new/palazzo4-v2.png");
        game.load.image("palazzo5", "images/new/palazzo5.png");
        game.load.image("palazzo6", "images/new/palazzo6-rotto-v2.png");
        game.load.image("palazzoFinale", "images/new/palazzofinale-v2.png");
        game.load.image("die_overlay", "images/new/die_overlay.jpg");

        game.load.image('sole', 'images/new/sole.png');
        game.load.image('bg1', 'images/new/bg.png');
        game.load.image('bg2', 'images/new/montagne2.png');
        game.load.image('bg3', 'images/new/montagne1.png');
        game.load.image('bg4', 'images/new/Palazzi-lontani.png');
        game.load.image('bg5', 'images/new/Palazzi-lontani-2.png');
        game.load.image('bg6', 'images/new/Palazzi-lontani-3.png');       
        
        game.load.image('nuvole', 'images/new/nuvole.png');
        //GAME
        if(mobile){
            game.load.image("how_to_info", "images/new/how_to/splash-how-to-glide-mob.jpg");
            game.load.image("how_to_rules", "images/new/how_to/splash-how-to-jump-mob.jpg");
        }else{
            game.load.image("how_to_info", "images/new/how_to/splash-how-to-glide.jpg");
            game.load.image("how_to_rules", "images/new/how_to/splash-how-to-jump.jpg");
        }
        


        game.load.image("resize", "images/new/resize-ico.png");
        game.load.image("fullscreen", "images/new/fullscreen-ico.png");

        game.load.image("fullscreenContainer", "images/new/buttom-full-screen.png");

        game.load.image("volume", "images/new/buttom-music-on.png");
        game.load.image("mute", "images/new/buttom-music-off.png");

        game.load.image("exit", "images/new/buttom-quit-game.png");

        // game.load.image("how_to_continue", "images/new/how_to/Cta-Continue.png");
        game.load.image("how_to_play", "images/new/how_to/Cta-Play.png");

        game.load.spritesheet("firework-1", "images/new/fuochi-dartificio.png", 200, 200);
        game.load.spritesheet("firework-2", "images/new/fuochi-dartificio2.png", 200, 200);
        game.load.spritesheet("firework-3", "images/new/fuochi-dartificio3.png", 200, 200);

        game.load.image("go", "images/new/go.png");
        game.load.image("ready", "images/new/ready.png");
        game.load.image("set", "images/new/set.png");
        game.load.image("header", "images/new/header-game.png");

        game.load.image("header-mob-1", "images/new/header-mob-1.png");
        game.load.image("header-mob-2", "images/new/header-mob-2.png");
        game.load.image("orologio", "images/new/orologio-mob.png");

        game.load.image("cta-yes", "images/new/quit/cta-yes.png");
        game.load.image("cta-no", "images/new/quit/cta-no.png");

    

        //UI

        game.load.spritesheet('bt-jump', 'images/new/up-button.png',120,120);

        
        game.load.image('bt-info', 'images/new/buttom-info.png');
        game.load.image("powerbar", "images/new/Power-Bar-colors.png");
        game.load.image("powerbarcontainer", "images/new/Power-Bar-outline.png");
        // game.load.image('star', 'images/new/star_particle.png');

        game.load.spritesheet("missile", "images/new/Missile-delay-v2.png", 150, 50);
        game.load.spritesheet("piccione", "images/new/colombi-2.png", 150, 80);
        game.load.spritesheet("extratime", "images/new/extra-time.png", 150, 180);  

        /*SPLASH IMAGES */
        game.load.image('bgsplash', 'images/new/splash/splash-bg-game.png');
        game.load.image('clouds', 'images/new/splash/splash-clouds-game.png');
        game.load.image('buildings', 'images/new/splash/splash-buildings-game.png');
        game.load.image('splashtitle', 'images/new/splash/splash-name-game.png');
        game.load.image('splashpmcopy', 'images/new/splash/splash-pm-cop-game.png');
        game.load.image('splashgra', 'images/new/splash/splash-gra-game.png');
        game.load.image('splashdev', 'images/new/splash/splash-dev-game.png');
        game.load.image('ctasplash', 'images/new/splash/splash-cta-game.png');
            
        //MENU
        game.load.image("bg-1", "images/new/Select-Character-Dev.jpg");
        game.load.image("bg-2", "images/new/Select-Character-Gra.jpg");
        game.load.image("bg-3", "images/new/Select-Character-Pm.jpg");
        game.load.image("bg-4", "images/new/Select-Character-Copy.jpg");

        game.load.image("cta-1", "images/new/CTA-Dev.png");
        game.load.image("cta-2", "images/new/CTA-Gra.png");
        game.load.image("cta-3", "images/new/CTA-Pm.png");
        game.load.image("cta-4", "images/new/CTA-Copy.png");

        game.load.image("arrow-1", "images/new/Freccia-Dev.png");
        game.load.image("arrow-2", "images/new/Freccia-Gra.png");
        game.load.image("arrow-3", "images/new/Freccia-Pm.png");
        game.load.image("arrow-4", "images/new/Freccia-Cop.png");


        //HOW TO

        if (mobile) {
            game.load.image("howto", "images/new/how_to/splash-how-to-play-mobile.jpg");
        } else {
            game.load.image("howto", "images/new/how_to/splash-how-to-play.jpg");
        }
        game.load.image("bg-mobile", "images/new/how_to/splash-how-to-glide-mob.jpg");

        game.load.spritesheet('hotojump', 'images/new/how_to/how-to-glide.png', 1048, 395);

        game.load.image("ctaplay", "images/new/how_to/Cta-Play.png");
        game.load.image("ctaplayhowto", "images/new/how_to/cta-lets-play-red-desk.png");

        // game.load.image("ctacontinue", "images/new/how_to/Cta-Continue.png");



          //  game.load.spritesheet("character-1", "images/new/character/developer-fermo-salto-win-planata.png", 200, 200);

          game.load.atlas('character-1', 'images/new/character/dev.png', 'images/new/character/dev.json');    
          game.load.atlas('character-2', 'images/new/character/gra.png', 'images/new/character/gra.json');   
          game.load.atlas('character-3', 'images/new/character/pm.png', 'images/new/character/pm.json');          
          game.load.atlas('character-4', 'images/new/character/copy.png', 'images/new/character/copy.json');   
            
        //LOSE
        if(mobile){
            game.load.image("bglost", "images/new/lose/you-lost-boss-is-waiting-mob.jpg");
        }else{
            game.load.image("bglost", "images/new/lose/you-lost-boss-is-waiting.jpg");    
        }
        
        game.load.image("occhio1", "images/new/lose/occhi-cane-destra.png");
        game.load.image("occhio2", "images/new/lose/occhi-cane-mezzo.png");
        game.load.image("occhio3", "images/new/lose/occhi-cane-sinistra.png");

        game.load.image("contact-us", "images/new/lose/cta-contact-us.png");
        

        
        game.load.image("cta-lost", "images/new/lose/cta-try-again.png");         
        game.load.spritesheet("fumo", "images/new/lose/fumo.png", 58, 123);  
        


        //win
        game.load.image("bg-1-win", "images/new/win/splash-dev-win.jpg");
        game.load.image("bg-2-win", "images/new/win/splash-gra-win.jpg");
        game.load.image("bg-3-win", "images/new/win/splash-pm-win.jpg");
        game.load.image("bg-4-win", "images/new/win/splash-cop-win.jpg");

        game.load.image("bg-1-win-mob", "images/new/win/splash-dev-win-mob.jpg");
        game.load.image("bg-2-win-mob", "images/new/win/splash-gra-win-mob.jpg");
        game.load.image("bg-3-win-mob", "images/new/win/splash-pm-win-mob.jpg");
        game.load.image("bg-4-win-mob", "images/new/win/splash-cop-win-mob.jpg");

        game.load.image("cta-keep", "images/new/win/cta-contact-us.png");  


        
        
    },
    create:function(){
        $(".placeholder-game-img").hide();
        if(music){
            music.stop();
        }


        bg = game.add.tileSprite(0, 0, game.width, game.height, 'bgsplash'); 
        bg.inputEnabled = true; 
        bg.input.useHandCursor = true;      

        bg.events.onInputDown.add(startplay, this);
        clouds = game.add.sprite(game.width/2, 70,"clouds"); 
        clouds.anchor.x = 0.5;
        clouds.scale.setTo(0.8);

        clouds.ox=clouds.x;
        clouds.oy=clouds.y;
        clouds.omultiplier=1;

        buildings = game.add.sprite(game.width/2-100,200,"buildings");
        buildings.anchor.x = 0.5;
        buildings.anchor.y =  0;
        buildings.scale.setTo(0.8);
        buildings.ox=buildings.x;
        buildings.oy=buildings.y;
        buildings.omultiplier=5;

        splashtitle = game.add.sprite(game.width/2, 30,"splashtitle");
        splashtitle.anchor.x = 0.5;
        splashtitle.anchor.y = 0;
        splashtitle.scale.setTo(1.2);
        splashtitle.ox=splashtitle.x;
        splashtitle.oy=splashtitle.y;
        splashtitle.omultiplier=3;


        cta = game.add.sprite(game.width/2, game.height/2,"ctasplash");
        cta.anchor.x = 0.5;
        cta.anchor.y = 0.5;
        cta.inputEnabled = true;
        cta.input.useHandCursor = true;
        cta.events.onInputDown.add(startplay, this);
        if(mobile){
            yoyo2= game.add.tween(cta.scale).to( { x: 1.3,y: 1.3 }, 700,  Phaser.Easing.Sinusoidal.InOut, true, 0, -1);
            yoyo2.yoyo(true, 0);
        }else{
            yoyo2= game.add.tween(cta.scale).to( { x: 1.1,y: 1.1 }, 1000,  Phaser.Easing.Sinusoidal.InOut, true, 0, -1);
            yoyo2.yoyo(true, 0);
            
        }
        
        cta.ox=cta.x;
        cta.oy=cta.y;
        cta.omultiplier=3;


        splashpmcopy = game.add.sprite(270,  game.height-70,"splashpmcopy");                
        splashpmcopy.anchor.x = 0.5;
        splashpmcopy.anchor.y = 0.5;
        splashpmcopy.ox=splashpmcopy.x;
        splashpmcopy.oy=splashpmcopy.y;
        splashpmcopy.omultiplier=10;

        splashgra = game.add.sprite(300,  game.height-50,"splashgra");                
        splashgra.anchor.x = 0.5;
        splashgra.anchor.y = 0.5;
        splashgra.ox=splashgra.x;
        splashgra.oy=splashgra.y;
        splashgra.omultiplier=15;

        splashdev = game.add.sprite(game.width-100,  game.height-150,"splashdev");                
        splashdev.anchor.x = 0.5;
        splashdev.anchor.y = 0.5;
        splashdev.ox=splashdev.x;
        splashdev.oy=splashdev.y;
        splashdev.omultiplier=15;


        splashpmcopy.scale.setTo(0.8);
        splashgra.scale.setTo(0.8);
        splashdev.scale.setTo(0.8);


        if(mobile){
                // setting gyroscope update frequency
                gyro.frequency = 10;
                // start gyroscope detection
                gyro.startTracking(function(o) {
                       // updating player velocity
                       if(o.beta/5<15  && o.beta/5>-5  ){
                        xOffset= -o.beta/3;
                    }
                    if( ((o.gamma/5)+10)<15  && ((o.gamma/5)+10)>-5  ){
                     yOffset= (o.gamma/5)+10;                                            
                 }   
                 

                 
                 
             });  
             $(".loader").hide();
               
            }


        },
        update:function(){
            
            if(!mobile){
               


                
                xOffset=-((currentMousePos.x/game.width)-1)*10;
                
                yOffset=-((currentMousePos.y/game.height)-0.5)*6;
                if(yOffset<-5 ){
                    yOffset=-5;
                }  
                if(yOffset>5 ){
                    yOffset=5;
                }    
                if(game.input.mousePointer.x==-1){
                    xOffset=0;
                    yOffset=0;
                }
            }
            

            clouds.x=clouds.ox+(xOffset*clouds.omultiplier);
            clouds.y=clouds.oy+(yOffset*clouds.omultiplier);

            splashtitle.x=splashtitle.ox+(xOffset*splashtitle.omultiplier);
            splashtitle.y=splashtitle.oy+(yOffset*splashtitle.omultiplier);


            cta.x=cta.ox+(xOffset*cta.omultiplier);
            cta.y=cta.oy+(yOffset*cta.omultiplier);

            
            buildings.x=buildings.ox+(xOffset*buildings.omultiplier);
            buildings.y=buildings.oy+(yOffset*buildings.omultiplier);

            splashpmcopy.x=splashpmcopy.ox+(xOffset*splashpmcopy.omultiplier);
            splashpmcopy.y=splashpmcopy.oy+(yOffset*splashpmcopy.omultiplier);

            splashgra.x=splashgra.ox+(xOffset*splashgra.omultiplier);
            splashgra.y=splashgra.oy+(yOffset*splashgra.omultiplier);


            splashdev.x=splashdev.ox+(xOffset*splashdev.omultiplier);
            splashdev.y=splashdev.oy+(yOffset*splashdev.omultiplier);


            // buildings.x+=10;
            // buildings.y+=10;

        }
    }

    /*web font config -> function called from init -> preload -> load script webfont*/

    WebFontConfig = {

    	    /*  'active' means all requested fonts have finished loading
    	      We set a 1 second delay before calling 'createText'.
    	      For some reason if we don't the browser cannot render the text the first time it's created.*/
              active: function() { game.time.events.add(Phaser.Timer.SECOND, webFontLoaded, game); },

              /*  The Google Fonts we want to load (specify as many as you like in the array)*/
              google: {
                  families: ['Montserrat:100,100i,400,400i,700,700i,900']
              }
          };

          /*when the fonts are loaded the game can start*/
          function webFontLoaded(){


         // game.state.add("menu",menu);
         // game.state.start("menu");


     }
     function startplay(){
       

      game.state.add("menu",menu);
      game.state.start("menu");


  }


  function handleIncorrect(){
    console.log("handleIncorrect");
    
    game.paused=true;
    document.getElementById("turn").style.display="block";


}

function handleCorrect(){
    console.log("firstRunPortrait");
    console.log(firstRunPortrait);
    if(firstRunPortrait){

        location.reload();             
    }else{
        console.log("handleCorrect");
        game.paused=false;
        document.getElementById("turn").style.display="none";
    }
}