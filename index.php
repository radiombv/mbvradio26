<!DOCTYPE html>
<html lang="en">

<head>
    <title>MBV | Classic Jungle Radio</title>

    <!-- Icons -->
    <link rel="shortcut icon" href="http://mbvradio.com/images/color/MBV_GREENc.png">
    <link rel="shortcut icon" type="image/png" sizes="32x32" href="http://mbvradio.com/images/color/MBV_GREENc.png">
    <link rel="shortcut icon" type="image/png" sizes="16x16" href="http://mbvradio.com/images/color/MBV_GREENc.png">

    <!-- Meta Tags -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="title" content="MBV | Classic Jungle Radio">
    <meta name="description" content="Your Go-To for getting High-Octane Beats of Classic Drum N Bass!">
    <meta property="og:image" content="http://mbvradio.com/images/MBVART.png">
    <meta name="keywords" content="MBV, radio station, radio, station, listen, music, live music, online radio, online radio station, hiphop, underground sounds, acid, beat, fm, trap, MBV, gromit, vaxla, josiah, drum n bass, dnb, rap">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#006600">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="http://mbvradio.com/assets/dist/main.css">
    <link rel="stylesheet" href="http://mbvradio.com/assets/dist/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap" rel="stylesheet">

    <!-- VOLUME SLIDER -->
    <style>
      .slider {
        -webkit-appearance: none;
        height: 10px;
        border-radius: 5px;
        background: #d3d3d3;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
      }

      .slider:hover {
        opacity: 1;
      }

      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: black;
        cursor: pointer;
      }

      .slider::-moz-range-thumb {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: black;
        cursor: pointer;
      }

      .button {
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
      }

      .button1 {
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
      }

      .button1:hover {
        background-color: #0000;
        color: white;
      }

      .button2 {
        background-color: white;
        color: black;
        border: 2px solid #008CBA;
      }

      .button2:hover {
        background-color: #008CBA;
        color: white;
      }
    </style>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.7.1.js" crossorigin="anonymous"></script>
    <script src="http://mbvradio.com/assets/main.js" defer></script>

</head>

<body>

    <!-- LOGO -->
    <img class="logo" alt="MBV | Classic Jungle Radio" src="http://mbvradio.com/images/color/MBV_GREENc.png">

    <!--REQUEST BOX-->
    <div class="black-screen"></div>
    <div class="modal js-request-modal">
      <div class="modal--content">
        <div class="modal--title"><i class="fas fa-gopuram"></i> Request / Message </div>
        <i class="fa fa-fw fa-times modal--close-button"></i>
        <div class="input-group">
          <p>Name</p>
          <input type="text" class="js-request-modal--name">
        </div>
        <div class="input-group">
          <p>Message</p>
          <input type="text" class="js-request-modal--song">
        </div>
        <button class="js-request-modal--submit-button"> Send </button>
      </div>
    </div>

    <!--PLAYER-->
    <div class="main-box">
      <div class="player">
        <div class="player-image__container">
          <div class="player-image__dot"></div>
          <img class="player__image js-player-image js-song-image" src="http://mbvradio.com/images/dookie.png" alt="em-bee-vee" draggable="false">
        </div>

        <!--PLAYER STATS-->
        <div class="player-stats">
          <p class="player-stats__text--secondary js-artist"></p>
          <p class="player-stats__text--primary js-song"></p>
          <div class="player-stats__marquee">
            <p class="player-stats__marquee-text--1 js-show"></p>
            <p class="player-stats__marquee-text--2 js-show"></p>
          </div>

        <!--PLAYER CONTROLS-->
          <div class="player-controls">
            <i class="fa fa-play player-controls__icon js-play-button"></i>
            <i class="fa fa-bullhorn player-controls__icon js-request-button"></i>
            <i class="fa fa-volume-up player-controls__icon js-volume-button"></i>
            <input type="range" min="1" max="100" value="100" class="slider" id="vol" onchange="aud.volume = vol.value/100">
          </div>
        </div>
      </div>
    </div>

    <!--FOOTER-->
    <div class="footer">
        <p>alright@mbvradio.com</p>
        <a href="http://www.internet-radio.com/" title="Internet Radio" target="_blank"><img src="http://www.internet-radio.com/images/internet-radio-badge.gif" alt="MBV @ Internet Radio"></a>
    </div>

</body>

</html>
