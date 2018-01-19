var bg;

var howto = function(game) {}
howto.prototype = {

    preload: function() {

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;





    },
    create: function() {

        j = 0;
        animationhowjump = [];
        animationhowhowglide = [];
        for (i = 0; i <= 80; i++) {
            animationhowjump[j] = i;
            j++;
        }
        j = 0;
        for (i = 80; i <= 115; i++) {
            animationhowhowglide[j] = i;
            j++;
        }



        if (mobile) {



            bg = game.add.sprite(game.width / 2, game.height / 2, "howto");
            bg.anchor.x = 0.5;
            bg.anchor.y = 0.5;
            bg.preheight = bg.height;
            bg.height = game.height;
            bg.width = bg.width / (bg.preheight / bg.height);
            bg.inputEnabled = true;
            bg.input.useHandCursor = true;
            bg.events.onInputDown.add(showMobileAnimation, this);


        } else {




            bg = game.add.sprite(0, 0, 'howto');
            bg.prewidth = bg.width;
            bg.width = game.width;
            bg.height = bg.height / (bg.prewidth / bg.width);

            howtojump = game.add.sprite(0, game.height / 2, "hotojump");
            howtojump.prewidth = howtojump.width;
            howtojump.width = game.width;
            howtojump.height = howtojump.height / (howtojump.prewidth / howtojump.width);
            howtojump.animations.add("hotojump", animationhowjump);
            howtojump.animations.add("hotoglide", animationhowhowglide);

            howtoTitle = game.add.text(game.width / 2 + 50, game.height - 130, "JUMP", {
                font: '800 30px Montserrat, Arial',
                fill: "#f8fe33",
                align: "center",
                boundsAlignH: "center",
                boundsAlignV: "center"
            });
            howtoTitle.anchor.x = 0.5;

            game.time.events.add(Phaser.Timer.SECOND, function() {
                howtojump.animations.play("hotojump", 30, false);
                howtojump.animations.currentAnim.onComplete.add(function() {

                    howtoTitle.setText("GLIDE");
                    game.time.events.add(Phaser.Timer.SECOND * 2, function() {

                        howtojump.animations.play("hotoglide", 30, false);
                        howtojump.animations.currentAnim.onComplete.add(function() {

                            game.time.events.add(Phaser.Timer.SECOND * 2, function() {

                                howtoTitle.setText("JUMP");
                                howtojump.animations.play("hotojump", 30, false);
                            })

                        })

                    }, this);

                }, this);
            })


            ctaplay = game.add.button(game.width / 2 + 50, game.height + 20, 'ctaplayhowto');
            ctaplay.events.onInputDown.add(ctaexithowtofuction, this);
            ctaplay.anchor.x = 0.5;
            ctaplay.anchor.y = 1;



        }


    },
    render: function() {

    }

}

function ctaexithowtofuction() {
    attesa.stop();
attesa.volume=0;
    console.log("!!!!!!!!!!!!!!!!ATTESA STOP!!!!!!!!!!")
    game.state.add("play", play);
    game.state.start("play");
}

function showMobileAnimation() {
    bg.kill();
    // ctacontinue.kill();

    bgmobile = game.add.sprite(game.width / 2, game.height / 2, "bg-mobile");
    bgmobile.anchor.x = 0.5;
    bgmobile.anchor.y = 0.5;
    bgmobile.preheight = bgmobile.height;
    bgmobile.height = game.height;
    bgmobile.width = bgmobile.width / (bgmobile.preheight / bgmobile.height);
    bgmobile.inputEnabled = true;
    bgmobile.input.useHandCursor = true;
    bgmobile.events.onInputDown.add(ctaexithowtofuction, this);



    bgmobile2 = game.add.sprite(game.width / 2, game.height / 2, "how_to_rules");
    bgmobile2.anchor.x = 0.5;
    bgmobile2.anchor.y = 0.5;
    bgmobile2.preheight = bgmobile2.height;
    bgmobile2.height = game.height;
    bgmobile2.width = bgmobile2.width / (bgmobile2.preheight / bgmobile2.height);
    bgmobile2.inputEnabled = true;
    bgmobile2.input.useHandCursor = true;

    bgmobile2.events.onInputDown.add(function(){
        bgmobile2.kill();
    }, this);



}