import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoSoursPlayer = document.querySelector('#vimeo-player');

const player = new Player(videoSoursPlayer);

const time = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (time) {
  player.setCurrentTime(time);
}

player.on('timeupdate', throttle(saveTimeInStorage, 1000));

function saveTimeInStorage(event) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(event.seconds)
  );
}
