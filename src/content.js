chrome.runtime.sendMessage({todo: "showPageAction"});

console.log("TELEPARTY YOUTUBE FIX RUNNING.");

let SELECTOR = "#movie_player > div.html5-video-container.with-vertical-center > video";

var timerEvent = false;

document.onkeydown = function(e) {
  if (e.ctrlKey && e.shiftKey) {
    console.log("Attempting to fix the TP-YT full screen issue...");
    e.preventDefault();
    let videoElement = document.querySelector(SELECTOR);
    if(videoElement) {
      videoElement.style.cssText = "width: 100% !important";
    } else {
      console.log("VIDEO ELEMENT NOT FOUND");
    }
  } 
  if(e.ctrlKey && e.shiftKey && e.keyCode == 70) {
    console.log("Teleparty Youtube Autofixer Triggered");
    if(timerEvent) clearInterval(timerEvent);
    function doFix() {
      let videoElement = document.querySelector(SELECTOR);
      if(videoElement) {
        videoElement.style.cssText = "width: 100% !important";
      } else {
        console.log("Video element not found!");
      }
    }

    var counter = 0;
    timerEvent = setInterval(() => { 
        counter++;
        doFix();
        if (counter >= 7200) { // Run this for 2 hours
          clearInterval(timerEvent);
        }
    }, 1000);
  }
};
