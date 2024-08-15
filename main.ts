scene.onOverlapTile(SpriteKind.Player, assets.tile`wtf0`, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    music.stopAllSounds()
    game.gameOver(false)
})
game.setGameOverEffect(true, effects.dissolve)
game.setGameOverEffect(false, effects.dissolve)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 f f f f 1 . . . . . 
    . . . . . 1 f f f f 1 . . . . . 
    . . . . . 1 f f f f 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, assets.tile`wtf`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(120)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
