var leadSurfer = WaveSurfer.create({
    container: '#lead-form',
    waveColor: 'blue',
    progressColor: 'green',
    plugins: [
        WaveSurfer.cursor.create({}),
        WaveSurfer.regions.create({
            regions: [{
                start: 1,
                end: 3,
                drag: true,
                loop: false,
                color: 'hsl(0,0%,50%,0.5)'
            }],
        })
    ]
});


var rhythmSurfer = WaveSurfer.create({
    container: '#rhythm-form',
    waveColor: 'blue',
    progressColor: 'green',
    plugins: [
        WaveSurfer.cursor.create({}),
        WaveSurfer.regions.create({
            regions: [{
                start: 1,
                end: 3,
                drag: true,
                loop: false,
                color: 'hsl(0,0%,50%,0.5)'
            }],
        })
    ]
});

var drumSurfer = WaveSurfer.create({
    container: '#drum-form',
    waveColor: 'blue',
    progressColor: 'green',
    plugins: [
        WaveSurfer.cursor.create({}),
        WaveSurfer.regions.create({
            regions: [{
                start: 1,
                end: 3,
                drag: true,
                loop: false,
                color: 'hsl(0,0%,50%,0.5)'
            }],
        })
    ]
});


// Pizzicato
var lead = new Pizzicato.Sound("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-lead-test.mp3?alt=media&token=1b02b256-1bc7-47e9-bdea-178613b88414")
var rhythm = new Pizzicato.Sound("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-rhythm-test.mp3?alt=media&token=7681224a-a321-46e6-8ef8-e32e9983cb33")
var drums = new Pizzicato.Sound("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-drum-test.mp3?alt=media&token=fc4f0132-a734-41ac-899e-18cf8859cc81")

var group = new Pizzicato.Group([])

$("#lead").on("click", function() {
    group.addSound(lead)
    leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-lead-test.mp3?alt=media&token=1b02b256-1bc7-47e9-bdea-178613b88414")
    console.log(group)
})

$("#rhythm").on("click", function() {
    group.addSound(rhythm)
    rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-rhythm-test.mp3?alt=media&token=7681224a-a321-46e6-8ef8-e32e9983cb33")
    console.log(group)
})

$("#drums").on("click", function() {
    group.addSound(drums)
    drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-drum-test.mp3?alt=media&token=fc4f0132-a734-41ac-899e-18cf8859cc81")
    console.log(group)
})

$("#loop").on("click", function() {
    leadSurfer.regions.params.regions[0].loop = true
    rhythmSurfer.regions.params.regions[0].loop = true
    drumSurfer.regions.params.regions[0].loop = true
    // console.log(leadSurfer.regions.params.regions[0].loop)
})

// Delay test
var delay = new Pizzicato.Effects.Delay({
    feedback: 0.6,
    time: 0.4,
    mix: 0.5
})

$("#add-delay").on("click", function() {
    leadSurfer.addEffect(delay)
})

// Wavesurfer
// wavesurfer.load(group);

$("#play").on("click", function() {
    leadSurfer.play()
    rhythmSurfer.play()
    drumSurfer.play()
    // group.play()
})

$("#pause").on("click", function() {
    leadSurfer.pause()
    rhythmSurfer.pause()
    drumSurfer.pause()
})

$("#rewind").on("click", function() {
    leadSurfer.skipBackward()
    rhythmSurfer.skipBackward()
    drumSurfer.skipBackward()
})

$("#forward").on("click", function() {
    leadSurfer.skipForward()
    rhythmSurfer.skipForward()
    drumSurfer.skipForward()
})

// wavesurfer.on('ready', function () {
//     wavesurfer.play();
// });