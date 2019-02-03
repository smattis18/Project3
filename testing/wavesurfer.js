// Create Tracks
var leadSurfer = WaveSurfer.create({
    container: '#lead-form',
    waveColor: 'blue',
    progressColor: 'green',
    // plugins: [
    //     WaveSurfer.regions.create({
    //         regions: [{
    //             start: 0,
    //             end: 3.8,
    //             drag: true,
    //             loop: true,
    //             color: 'hsl(0,0%,50%,0.5)'
    //         }],
    //     })
    // ]
});


var rhythmSurfer = WaveSurfer.create({
    container: '#rhythm-form',
    waveColor: 'blue',
    progressColor: 'green',
    // plugins: [
    //     WaveSurfer.regions.create({
    //         regions: [{
    //             start: 1,
    //             end: 3,
    //             drag: true,
    //             loop: false,
    //             color: 'hsl(0,0%,50%,0.5)'
    //         }],
    //     })
    // ]
});

var drumSurfer = WaveSurfer.create({
    container: '#drum-form',
    waveColor: 'blue',
    progressColor: 'green',
    // plugins: [
    //     WaveSurfer.regions.create({
    //         regions: [{
    //             start: 1,
    //             end: 3,
    //             drag: true,
    //             loop: false,
    //             color: 'hsl(0,0%,50%,0.5)'
    //         }],
    //     })
    // ]
});

// Track Functions
$("#lead").on("click", function() {
    leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-lead-test.mp3?alt=media&token=1b02b256-1bc7-47e9-bdea-178613b88414")
})

$("#rhythm").on("click", function() {
    rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-rhythm-test.mp3?alt=media&token=7681224a-a321-46e6-8ef8-e32e9983cb33")
})

$("#drums").on("click", function() {
    drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/mf-drum-test.mp3?alt=media&token=fc4f0132-a734-41ac-899e-18cf8859cc81")
})

$("#loop").on("click", function() {
    leadSurfer.regions.params.regions[0].loop = true
    rhythmSurfer.regions.params.regions[0].loop = true
    drumSurfer.regions.params.regions[0].loop = true
    // console.log(leadSurfer.regions.params.regions[0].loop)
})

$("#delete").on("click", function() {
    leadSurfer.empty() 
    rhythmSurfer.empty()
    drumSurfer.empty()
})

$("#play").on("click", function() {
    leadSurfer.play()
    rhythmSurfer.play()
    drumSurfer.play()
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

$("#mute-all").on("click", function() {
    leadSurfer.toggleMute()
    rhythmSurfer.toggleMute()
    drumSurfer.toggleMute()
})

$("#mute-lead").on("click", function() {
    leadSurfer.toggleMute()
})

$("#mute-rhythm").on("click", function() {
    rhythmSurfer.toggleMute()
})

$("#mute-drums").on("click", function() {
    drumSurfer.toggleMute()
})


$("#choose-color").on("click", function() {
    var waveColor = $("#wave-color").val()
    console.log(waveColor)
    leadSurfer.setWaveColor(waveColor)
    rhythmSurfer.setWaveColor(waveColor)
    drumSurfer.setWaveColor(waveColor)
})

// Set track volume
$("#master-volume").on("change", function() {
    var rangeValue = $("#master-volume").val()
    newVolume = rangeValue/100
    leadSurfer.setVolume(newVolume)
    rhythmSurfer.setVolume(newVolume)
    drumSurfer.setVolume(newVolume)
})

// wavesurfer.on('ready', function () {
//     wavesurfer.play();
// });