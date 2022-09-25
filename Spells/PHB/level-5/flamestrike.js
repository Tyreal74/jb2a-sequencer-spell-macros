await Sequencer.Preloader.preloadForClients(
    ["jb2a.disintegrate.orangepink",
    "jb2a.flames.01.orange"], false)


const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

//get the template id from the canvas and its positions.
let Flamestrike = canvas.templates.get(args[0].templateId);
let templatePosition = Flamestrike.position;
//get an array of the targets within the tempalte area.
const targetLocations = Array.from(game.user.targets);

await Flamestrike.document.delete();


let sequence = new Sequence()


new Sequence()


sequence.effect()
.file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
.atLocation(casterToken)
.duration(2000)
.fadeIn(500)
.fadeOut(500)
.scale(0.5)
.filter("Glow", { color: 0xFFA500 })
.waitUntilFinished(-500)

for (let targetLoc of targetLocations) {
    
sequence.effect()
.file("jb2a.disintegrate.orangepink")
.atLocation({ x: targetLoc.center.x, y: targetLoc.center.y - (canvas.grid.size * 4) })
.stretchTo(targetLoc, {randomOffset: true})
.waitUntilFinished(-500)
.repeats(5,15,30)
.randomOffset()

}


sequence.play()