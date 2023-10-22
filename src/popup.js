let SELECTOR = "#movie_player > div.html5-video-container.with-vertical-center > video";
let fixButton = document.getElementById('fix-button');

fixButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // does nothing :P
  });
});
