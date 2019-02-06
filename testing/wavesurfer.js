// Local testing requires this plugin:
// https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

// Create Tracks
var leadSurfer = WaveSurfer.create({
    container: '#lead-form',
    waveColor: 'blue',
    progressColor: 'green',
});

var rhythmSurfer = WaveSurfer.create({
    container: '#rhythm-form',
    waveColor: 'blue',
    progressColor: 'green',
});

var drumSurfer = WaveSurfer.create({
    container: '#drum-form',
    waveColor: 'blue',
    progressColor: 'green',
});

var leadSurferTwo = WaveSurfer.create({
    container: '#lead-form2',
    waveColor: 'blue',
    progressColor: 'green',
});

var rhythmSurferTwo = WaveSurfer.create({
    container: '#rhythm-form2',
    waveColor: 'blue',
    progressColor: 'green',
});

var drumSurferTwo = WaveSurfer.create({
    container: '#drum-form2',
    waveColor: 'blue',
    progressColor: 'green',
});


// Load mp3's
$("#lead").on("click", function() {
    leadSurfer.load("gs://mf-test-bafa6.appspot.com/mf-lead-test.mp3")
})

$("#rhythm").on("click", function() {
    rhythmSurfer.load("gs://mf-test-bafa6.appspot.com/mf-rhythm-test.mp3")
})

$("#drums").on("click", function() {
    drumSurfer.load("gs://mf-test-bafa6.appspot.com/mf-drum-test.mp3")
})

$("#poppunklead1").on("click", function() {
    leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead1.mp3?alt=media&token=385fd824-7b23-4651-8d15-71ce0755480f")
})

$("#poppunklead2").on("click", function() {
    leadSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
})

$("#poppunkrhythm1").on("click", function() {
    rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm1.mp3?alt=media&token=483800bd-3538-4288-be7b-0809da9548af")
})

$("#poppunkrhythm2").on("click", function() {
    rhythmSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
})

$("#poppunkdrums1").on("click", function() {
    drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums1.mp3?alt=media&token=0b1ed9a1-d29e-45aa-bb5b-7e05914b2a2c")
})

$("#poppunkdrums2").on("click", function() {
    drumSurfer.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
})


// Load Second Waveforms
$("#leadsurfer2").on("click", function() {
    leadSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62")
})

$("#rhythmsurfer2").on("click", function() {
    rhythmSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkrhythm2.mp3?alt=media&token=602561d6-ff66-440c-b05c-0c768f7fdc10")
})

$("#drumsurfer2").on("click", function() {
    drumSurferTwo.load("https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunkdrums2.mp3?alt=media&token=3b2041d2-1ab7-4208-821e-8f323d9b3e31")
})


// Track Functions
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
    leadSurferTwo.setVolume(newVolume)
    rhythmSurfer.setVolume(newVolume)
    rhythmSurferTwo.setVolume(newVolume)
    drumSurfer.setVolume(newVolume)
    drumSurferTwo.setVolume(newVolume)
})


// Loop?
leadSurfer.on("finish", function() {
    leadSurferTwo.play()
})

rhythmSurfer.on("finish", function() {
    rhythmSurferTwo.play()
})

drumSurfer.on("finish", function() {
    drumSurferTwo.play()
})

leadSurferTwo.on("finish", function() {
    leadSurfer.play()
})

rhythmSurferTwo.on("finish", function() {
    rhythmSurfer.play()
})

drumSurferTwo.on("finish", function() {
    drumSurfer.play()
})


// Build Song?


// wavesurfer.on('ready', function () {
//     wavesurfer.play();
// });