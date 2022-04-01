
// Typewiter animation
const txtAnim = document.querySelector("#text");

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 33
})
.changeDelay(100)
.typeString('Hi, <br>I\'m Billy Iea,<br>a junior codeurz.')
.pauseFor(1500)
.deleteChars(8)
.pauseFor(300)
.typeString('<span style="text-decoration:underline">web developer.</span>')
.pauseFor(60000)
.start()