$("#test").on("click", function() {
    new Audio("./music/mf-rhythm-test.mp3").play()
})

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

$("#music").on("click", function() {
    new Audio("./music/mf-rhythm-test.mp3").play()
    new Audio("./music/mf-lead-test.mp3").play()
})

let song = []
let song2 = ["./music/mf-rhythm-test.mp3", "./music/mf-lead-test.mp3"]

$(".track1").on("drop", function() {
    song.push($(".track1").data("path"))
    console.log(song)
})

$(".track2").on("drop", function() {
    song.push($(".track2").data("path"))
    console.log(song)
})

$(".track1").on("click", function() {
    song.push($(".track1").data("path"))
    console.log(song)
})

$(".track2").on("click", function() {
    song.push($(".track2").data("path"))
    console.log(song)
})

$("#play").on("click",function() {
    for (var i = 0; i < song.length; i ++) {
        new Audio(song[i]).play()
    } 
})

