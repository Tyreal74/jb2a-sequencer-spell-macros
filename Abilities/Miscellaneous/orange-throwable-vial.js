await Sequencer.Preloader.preloadForClients(
    ["b2a.throwable.throw.flask.01.orange",
        "jb2a.explosion.side_fracture.flask.01",
        "jb2a.explosion.08.orange",
        "jb2a.flames.orange.03.1x1.1"
    ], false)

const casterToken = token //canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];

new Sequence() 
.effect()
    .file("jb2a.throwable.throw.flask.01.orange")
    .atLocation(casterToken)
    .stretchTo(target)
    .waitUntilFinished()

    .effect()
    .file("jb2a.explosion.side_fracture.flask.01")
    .atLocation(target)
    .offset({x:-100, y:0})
    .rotateTowards(casterToken) 
    .rotate(180)
  
    .effect()
    .file("jb2a.explosion.08.orange")
    .atLocation(target)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.flames.orange.03.1x1.1")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .belowTokens()
    



.play();