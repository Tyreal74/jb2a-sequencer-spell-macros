//Preloading the Files to make sure they play a bit nicer when animatiing.
await Sequencer.Preloader.preloadForClients(
    ["jb2a.extras.tmfx.runes.circle.outpulse.illusion",
        "jb2a.energy_strands.complete.orange.01",
        "jb2a.icon.fear.orange",
        "jb2a.markers.fear.orange.02"
    ], false)

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
//get the template id from the canvas and its positions.
let FearTemplate = canvas.templates.get(args[0].templateId);
let templatePosition = FearTemplate.position;
//get an array of the targets within the tempalte area.
const targetLocations = Array.from(game.user.targets);

await FearTemplate.document.delete();


let sequence = new Sequence()


sequence.effect()
.file("jb2a.extras.tmfx.runes.circle.outpulse.illusion")
    .atLocation(casterToken)
    .filter("Glow", { color: 0xFFC300 })
    .duration(2000)
    .scaleToObject(1.5)
    .waitUntilFinished(-500)

    sequence.effect()
    .file("jb2a.energy_strands.complete.orange.01")
    .atLocation(casterToken)
    .duration(2500)
    .fadeIn(500)
    .fadeOut(300)
    .scaleToObject(1.5)
    .waitUntilFinished(-500)

    sequence.effect()
    .file("jb2a.icon.fear.orange")
    .atLocation(casterToken)
    .duration(2500)
    .fadeIn(500)
    .fadeOut(300)
    .scaleOut(1.5, 750, {ease: "easeOutCubic", delay: -100})
    .waitUntilFinished(-500)



for (let targetLoc of targetLocations) {
    sequence.effect()
    .file("jb2a.markers.fear.orange.02")
    .fadeIn(500)
    .fadeOut(500)
    .scaleToObject(1.5)
    .atLocation(targetLoc)
    .name(`fear-${targetLoc.id}`)
    .persist()

}



sequence.play()