const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

new Sequence()
    .effect()
        .file("jb2a.energy_strands.overlay.orange.01")
        .fadeIn(300)
        .fadeOut(500)
        .duration(1500)
        .scale(0.4)
        .atLocation(args[0].tokenId)
        .scaleIn(0, 500, {ease: "easeOutCubic"})    
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
        .atLocation(args[0].tokenId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .waitUntilFinished(-500)
        .filter("Glow", { color: 0xffa500 })
        .opacity(0.8)
    .effect()
        .file("jb2a.markers.light.intro.yellow")
        .atLocation(args[0].tokenId)
        .belowTokens()
        .fadeOut(500)
        .duration(1800)
        .fadeIn(500)
        .scale(0.7)
    .effect()
        .file("jb2a.extras.tmfx.outpulse.circle.02.normal")
        .atLocation(template.position)
        .filter("Glow", { color: 0xffa500 })
        .offset({ x: -140, y: -140 })
    .effect()
        .file("jb2a.impact.ground_crack.01.orange")
        .atLocation(template.position)
        .fadeIn(500)
        .fadeOut(500)
        .offset({ x: -140, y: -140 })
        .scale(0.8)
        .belowTokens()
    .effect()
        .file("jb2a.ground_cracks.01.orange")
        .atLocation(template.position)
        .fadeIn(1000)
        .fadeOut(500)
        .persist()
        .scale(0.8)
        .offset({ x: -140, y: -140 })
        .belowTokens()
.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);


