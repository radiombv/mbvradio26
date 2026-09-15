
const updateText = (qs, text) => {
  if ($(qs).text() !== text) $(qs).text(text);
};

let cachedSong;

// Define the audio element
const aud = $('.js-stream')[0];

// Check if the audio element exists before accessing it
if (aud) {
  // Volume slider change event handler
  const vol = document.getElementById('vol');
  vol.addEventListener('change', function () {
    aud.volume = vol.value / 100;
  });
  
  // Volume button click event handler
  $('.js-volume-button').on('click', function () {
    // Toggle mute/unmute
    aud.muted = !aud.muted;

    // Update volume button icon based on mute state
    if (aud.muted) {
      // Set muted icon
      $(this).removeClass('fa-volume-up').addClass('fa-volume-mute');
    } else {
      // Set unmuted icon
      $(this).removeClass('fa-volume-mute').addClass('fa-volume-up');
    }
  });

  // Space bar keypress event handler
  $(document).keydown(function (e) {
    // Check if the pressed key is the space bar (keyCode 32)
    if (e.keyCode == 32) {
      // Prevent the default action of the space bar (e.g., scrolling the page)
      e.preventDefault();

      // Toggle play/pause of the audio player
      if (aud.paused) {
        aud.play();
        $('.js-play-button').removeClass('fa-play').addClass('fa-pause');
        $('.js-player-image').addClass('spin');
      } else {
        aud.pause();
        $('.js-play-button').removeClass('fa-pause').addClass('fa-play');
        $('.js-player-image').removeClass('spin');
      }
    }
  });
} else {
  console.error('Audio element with class "js-stream" not found.');
}

const updateStats = () => {
  $.get(`https://a5.asurahosting.com/api/nowplaying/103`)
    .done((res) => {
      const { now_playing: { song, playlist } } = res;

      if (song.text !== (cachedSong ? cachedSong.text : '')) {
        $('.js-like-button, .js-dislike-button').removeClass('liked');
        try {
          const likedSongs = JSON.parse(localStorage.getItem('liked_songs') || []);
          if (likedSongs.includes(song.text)) $('.js-like-button').addClass('liked');

          const dislikedSongs = JSON.parse(localStorage.getItem('disliked_songs') || []);
          if (dislikedSongs.includes(song.text)) $('.js-dislike-button').addClass('liked');
        } catch (_e) {}
      }

      cachedSong = song;
      updateText('.js-song', song.title);
      updateText('.js-artist', song.artist);
      updateText('.js-show', res.now_playing.playlist + ' â€¢');

      if ($('.js-song-image').attr('src') !== song.art) $('.js-song-image').attr('src', song.art);
    })
    .fail((err) => {
      console.error('Error fetching stats:', err);
    });
};

updateStats();
setInterval(updateStats, 5000);

const togglePlayback = async () => {
  if (aud.paused) {
    await aud.play();
    $('.js-play-button').removeClass('fa-play').addClass('fa-pause');
    $('.js-player-image').addClass('spin');
  } else {
    aud.pause();
    $('.js-play-button').removeClass('fa-pause').addClass('fa-play');
    $('.js-player-image').removeClass('spin');
  }
};

$('.js-play-button').on('click', togglePlayback);

const toggleLiked = (e) => {
  const $el = $(e.currentTarget);
  if ($el.hasClass('liked')) {
    if (cachedSong && cachedSong.text) {
      const likedSongs = JSON.parse(localStorage.getItem('liked_songs') || []).filter(text => text !== cachedSong.text);
      localStorage.setItem('liked_songs', JSON.stringify(likedSongs));

      const dislikedSongs = JSON.parse(localStorage.getItem('disliked_songs') || []).filter(text => text !== cachedSong.text);
      localStorage.setItem('disliked_songs', JSON.stringify(dislikedSongs));
    }
    $el.removeClass('liked');
  } else {
    $('.js-like-button, .js-dislike-button').removeClass('liked');
    try {
      localStorage.setItem('liked_songs', JSON.stringify([...new Set(JSON.parse(localStorage.getItem('liked_songs') || []))]));
      localStorage.setItem('disliked_songs', JSON.stringify([...new Set(JSON.parse(localStorage.getItem('disliked_songs') || []))]));
    } catch (_e) {}

    if (cachedSong && cachedSong.text) {
      if ($el.hasClass('js-like-button')) {
        const likedSongs = JSON.parse(localStorage.getItem('liked_songs') || []);
        likedSongs.push(cachedSong.text);
        localStorage.setItem('liked_songs', JSON.stringify([...new Set(likedSongs)]));
      }

      if ($el.hasClass('js-dislike-button')) {
        const dislikedSongs = JSON.parse(localStorage.getItem('disliked_songs') || []);
        dislikedSongs.push(cachedSong.text);
        localStorage.setItem('disliked_songs', JSON.stringify([...new Set(dislikedSongs)]));
      }
    }
    $el.addClass('liked');
  }
};

$('.js-like-button, .js-dislike-button').on('click', toggleLiked);

$('.js-request-button').on('click', () => {
  $('.js-request-modal').toggleClass('open');
});

$('.modal--close-button').on('click', (e) => {
  $(e.currentTarget).closest('.modal').toggleClass('open');
});

$('.js-request-modal--submit-button').on('click', () => {
  const name = $('.js-request-modal--name').val().trim();
  const song = $('.js-request-modal--song').val().trim();
  if (!name || !song) return alert('Please fill in all the fields!');
  $.post(`api/v1/requests.php`, { name, song, csrf })
    .done(() => {
      $('.js-request-modal').toggleClass('open');
      $('.js-request-modal--name').val('');
      $('.js-request-modal--song').val('');
      alert('Request sent.');
    })
    .fail((...errorData) => {
      console.error('Error sending request:', ...errorData);
      alert('Something went wrong.');
    });
});
