let tokenD = canvas.tokens.get(args[0].tokenId);
new Sequence()
.effect()
        .file("jb2a.butterflies.many.purple")
        .scale(0.4)
        .atLocation(tokenD)
        .duration(3500)
        .fadeIn(100)
        .fadeOut(100)   
.effect()
        .file("jb2a.magic_signs.rune.necromancy.intro.purple")
        .scale(0.3)
        .atLocation(tokenD)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.necromancy.outro.purple")
        .scale(0.3)
        .atLocation(tokenD)
    .play()