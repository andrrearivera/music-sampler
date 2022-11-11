let album = document.querySelectorAll('.album');
let soundTrack = document.querySelectorAll('.soundTrack');

function hideAll() {
  soundTrack.forEach(function(el) {
    el.style.display = 'none';
  });
}
hideAll();

album.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();

//declare variable
let players = document.querySelectorAll('audio');

    switch (e.target.getAttribute('id')) {
          case 'loneliestCover':
            document.querySelector('#loneliestMusic')
            	.style.display = 'block';
              players.forEach(function(el) {
              el.pause();
              el.currentTime = 0;
              });
            break;
          case 'teatroCover':
            document.querySelector('#teatroMusic')
            	.style.display = 'block';
              players.forEach(function(el) {
              el.pause();
              el.currentTime = 0;
              });
            break;
          case 'balloCover':
            document.querySelector('#balloMusic')
            .style.display = 'block';
            players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
            });
            break;
          case 'chosenCover':
            document.querySelector('#chosenMusic')
            .style.display = 'block';
            players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
            });
            break;
        }
      }
    });
