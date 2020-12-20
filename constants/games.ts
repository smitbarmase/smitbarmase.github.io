import CardInterface from "../interface/CardInterface";

const PlayStoreCards: CardInterface[] = [
  {
    title: "Iron Wheel",
    img: "/images/game-projects/ironwheel.png",
    visit:
      "https://play.google.com/store/apps/details?id=com.twelfish.ironwheel",
    createdAt: "Jan 17, 2016",
    info:
      "2D drag-and-drop physics game integrated with Google Play Games. Over 1k downloads on play store.",
    tags: ["unity-game-engine", "c#", "google-play-leaderboard"],
  },
  {
    title: "Real Cube",
    img: "/images/game-projects/realcube.png",
    visit:
      "https://play.google.com/store/apps/details?id=com.twelfish.realcube",
    createdAt: "Jan 17, 2016",
    info: "3D adventure game integrated with Facebook Friends Leaderboard. ^_^",
    tags: ["unity-game-engine", "c#", "facebook-sdk"],
  },
  {
    title: "Ponkey Birds",
    img: "/images/game-projects/ponkey.png",
    visit:
      "https://play.google.com/store/apps/details?id=com.twelfish.ponkeybirds",
    createdAt: "June 5, 2016",
    info: "A 2D addictive game built in 5 days for a game jam.",
    tags: ["unity-game-engine", "c#", "game-jam"],
  },
  {
    title: "2048 Magic",
    img: "/images/game-projects/magic2048.jpg",
    visit:
      "https://play.google.com/store/apps/details?id=com.twelfish.magic2048",
    createdAt: "March 9, 2020",
    info:
      "The appealing 2048 game comes with diffrent size from 2X2 to 8X8. Google Play Games integrated.",
    tags: ["unity-game-engine", "c#", "google-play-leaderboard"],
  },
  {
    title: "Tic-Tac-Toe Magic",
    img: "/images/game-projects/magictictactoe.jpg",
    visit:
      "https://play.google.com/store/apps/details?id=com.twelfish.magictictactoe",
    createdAt: "March 24, 2020",
    info:
      "Uses min-max algorithm with alpha-beta pruning for AI. You can choose between diffrent mode of difficulty.",
    tags: ["unity-game-engine", "c#", "min-max-algorithm", "ai"],
  },
];

export default PlayStoreCards;
