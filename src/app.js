const button = document.getElementById("audio-button"),
  audioPlayer = document.querySelector("audio-player"),
  files = [
    {
      title: "Trapped",
      link:
        "https://cdn.discordapp.com/attachments/425064525339951106/578429587059638303/Trapped.mp3"
    },
    {
      title: "French Song",
      link:
        "https://cdn.discordapp.com/attachments/425064525339951106/578568765839638528/2WDi_1.mp3"
    },
    {
      title: "Minnie The Moocher",
      link:
        "https://cdn.discordapp.com/attachments/425064525339951106/576939116625657877/Brothers_Moving_Minnie_The_Moocher.mp3"
    },
    {
      title: "Major Fractures",
      link:
        "https://cdn.discordapp.com/attachments/442875463141163009/497635037466853386/fractures.wav"
    }
  ];

// button.addEventListener("click", () => {
//   const file = files[Math.floor(Math.random() * files.length)];
//   console.log(file);
//   audioPlayer.title = file.title;
//   audioPlayer.setAttribute("file", file.link);
// });
