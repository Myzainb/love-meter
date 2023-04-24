input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Love = randint(0, 100)
    basic.showNumber(Love)
    if (Love > 50) {
        music.playMelody("B C5 B C5 B A B C5 ", 120)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    }
})
let Love = 0
basic.showString("Love meter")
basic.showIcon(IconNames.Heart)
music.playMelody("C F A G A B G C5 ", 120)
basic.forever(function () {
	
})
