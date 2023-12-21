<!DOCTYPE html>
<html lang="en">
<head>
  <title>VICTOR MULINGE MUENDO</title>
  <link rel="icon" type="image/jpg" href="victor.jpg">
  <style>
    body {
      background-color: whitesmoke;
    }
    video {
      width: 200px;
      height: 200px;
    }
    button {
      background-color: blue;
      color: #ffffff;
      height: 30px;
      width: 100px;
      align-content: center;
      float: right;
      margin-right: 8px;
      border: 2px;
      border-radius: 10px;
    }
    img {
      width: 200px;
      height: 100px;
    }
    nav {
      height: 70px;
      background-color: cyan;
    }
    #game-container {
      width: 100%;
      height: 400px;
      background-color: #a0a0a0;
      position: relative;
      overflow: hidden;
    }
    #car {
      width: 50px;
      height: 30px;
      background-color: red;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  </style>
</head>
<body>
  <nav>
    <br>
    <button id="imgButton">img</button>
    <button id="videoButton">video</button>
    <button id="homeButton">home</button>
  </nav>
  <section id="video" style="display:none">
    <br>
    <video controls="mute audio volume camera share ">
      <source src="MV/COSTLY.mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/THIS_SHOCKING_EPIC_MOVIE.mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/Tears_Of_Betrayal.mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/SISTERS_IN_MARRIAGE_-_Ken_Erics__Chizzy_Alichi__Oge_Okoye__New_Nigerian_Nollywood_Movie_2019(360p).MP4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/DECEITFUL_ROMANCE_(NEW_MAJID_MICHEL_LATEST_BEST_2021_ROMANTIC_LOVE_MOVIE)_-2021_FULL_NIGERIAN_MOVIES(720p).mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/FLIP_OF_ROMANCE(_LATEST_MOVIE_OF_BOLAJI_OGUMOLA)_2021_NIGERIA_NOLLYWOOD_LOVE_MOVIES(360p).mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/Hii_Sio_Ndoto_Yangu__William_Yilima(Tz)_ministering_at_Bahati_Church(360p).mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/LOVE_CAN_ONLY_HEAL_(NEW)RAY_EMODI_2021_LATEST_NIGERIAN_MOVIE-2021_NIGERIAN_MOVIE(360p).mp4"> 
    </video>
    <video controls="mute audio volume camera share ">
      <source src="MV/NOT_ALL_THAT_GLITTERS__NEW_NINO_BOLANLE_ROMANTIC_AFFAIR__2021_LATEST_NIGERIAN_MOVIE(360p).mp4"> 
    </video>
  </section>
  <div id="game-container" style="display:none">
    <div id="car"></div>
  </div>
  <img src="money.jpg">
  <script>
    function showSection(sectionId) {
      // Hide all sections
      var sections = document.querySelectorAll('section, #game-container');
      sections.forEach(function(section) {
        section.style.display = 'none';
      });

      // Show the selected section
      document.getElementById(sectionId).style.display = 'block';
    }

    document.getElementById("videoButton").addEventListener("click", function () {
      showSection("video");
    });

    document.getElementById("homeButton").addEventListener("click", function () {
      showSection("game-container");
    });

    function fetchData() {
      const data = null;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      xhr.open('GET', 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc');
      xhr.setRequestHeader('X-RapidAPI-Key', '1de777a983msh00fb1a452845745p13c048jsn952d30d7705f');
      xhr.setRequestHeader('X-RapidAPI-Host', 'free-to-play-games-database.p.rapidapi.com');

      xhr.send(data);
    }

    // Call the fetchData function when the page loads
    window.addEventListener('load', fetchData);
  </script>
</body>
</html>
