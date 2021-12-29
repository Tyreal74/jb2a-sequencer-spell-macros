const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()

    .effect()
        .file("jb2a.extras.tmfx.runes.circle.inpulse.conjuration")
        .atLocation(casterToken)
        .duration(4000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.3)
        .filter("Glow", { color: 0xffffff })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.energy_strands.overlay.blue.01")
        .atLocation(casterToken)
        .duration(4000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.3)
    .effect()
        .file("jb2a.moonbeam.01.intro.blue")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
        .duration(1200)
    .effect()
        .file("jb2a.explosion.07.bluewhite")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-500)
    .play();