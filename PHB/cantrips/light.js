let tokenD = canvas.tokens.get(args[0].tokenId);
new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.evocation.intro.yellow")
        .scale(0.3)
        .atLocation(tokenD)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.evocation.loop.yellow")
        .scale(0.3)
        .atLocation(tokenD)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-550)
        .duration(500)
    .effect()
        .file("jb2a.magic_signs.rune.evocation.outro.yellow")
        .scale(0.3)
        .atLocation(tokenD)
    .effect()
        .file("jb2a.extras.tmfx.border.circle.outpulse.01.normal")
        .atLocation(tokenD)
        .fadeIn(500)
        .fadeOut(500)
        .filter("Glow", { color: 0xfbd531 })
        .duration(1500)
        .randomRotation()
        .belowTokens()
        .opacity(0.5)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})    
    .play()