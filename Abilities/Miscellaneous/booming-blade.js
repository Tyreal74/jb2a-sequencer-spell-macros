//Animation only

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = Array.from(game.user.targets)[0];

new Sequence()

.effect()
    .file("jb2a.rapier.melee.01.orange.4")
    .atLocation(casterToken)
    .stretchTo(target)
    .waitUntilFinished(-500)
    .size(canvas.grid.size * 2)

.effect()
    .file("jb2a.impact.011.orange")
    .atLocation(target)
    .scaleToObject(1.5)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.static_electricity.01.orange")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .persist()
    .scaleToObject(1.2)
    .playIf(args[0].hitTargets.length === 1)

.play()