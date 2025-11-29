const audio = document.getElementById('player');
const playBtn = document.getElementById('playBtn');

// 从 HTML 中读取播放区间（data-* 属性）
const startTime = parseFloat(playBtn.dataset.start);
const endTime = parseFloat(playBtn.dataset.end);

let segmentHandler = null;

function playSegment(start, end) {
  audio.play().then(() => {
    audio.currentTime = start; // 播放后再跳时间
  });

  playBtn.textContent = '⏸ 暂停';

  segmentHandler = () => {
    if (audio.currentTime >= end) {
      audio.pause();
      playBtn.textContent = '▶ 播放';
      audio.removeEventListener('timeupdate', segmentHandler);
    }
  };

  audio.addEventListener('timeupdate', segmentHandler);
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSegment(startTime, endTime);
  } else {
    audio.pause();
    playBtn.textContent = '▶ 播放';

    if (segmentHandler) {
      audio.removeEventListener('timeupdate', segmentHandler);
    }
  }
});
