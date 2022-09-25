//Animation only

await Sequencer.Preloader.preloadForClients(
    ["jb2a.rapier.melee.01.orange.4",
        "jb2a.static_electricity.01.orange",
        "jb2a.impact.011.orange"
    ], false)

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = Array.from(game.user.targets)[0];
let hit = args[0].hitTargets.length === 1;
let nothit = args[0].hitTargets.length === 0;

new Sequence()

.effect()
    .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
    .atLocation(casterToken)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .waitUntilFinished(-1200)
   

.effect()
    .file("jb2a.rapier.melee.01.orange.4")
    .atLocation(casterToken)
    .stretchTo(target)
    .waitUntilFinished(-500)
    .size(canvas.grid.size * 2)
    .playIf(hit)

    
.effect()
.file("jb2a.rapier.melee.01.orange.4")
.atLocation(casterToken)
.stretchTo(target)
.waitUntilFinished(-500)
.missed()

.size(canvas.grid.size * 2)
.playIf(nothit)

.effect()
    .file("jb2a.impact.011.orange")
    .atLocation(target)
    .scaleToObject(1.5)
    .waitUntilFinished(-500)
    .playIf(hit)

.effect()
    .file("jb2a.static_electricity.01.orange")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .persist()
    .scaleToObject(1.2)
    .name(`booming-blade-${target.id}`)
    .playIf(hit)

.play()