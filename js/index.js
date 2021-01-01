var text = document.getElementById('textchange');

var typewriter = new Typewriter(text, {
    loop: true
});

typewriter.typeString('Nishant.')

    .pauseFor(500)
    .deleteAll()

    .typeString('A web  developer.')
    .pauseFor(1000)
    .deleteAll()

    .typeString('A web  designer.')
    .pauseFor(1000)
    .start()

