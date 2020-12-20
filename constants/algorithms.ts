import _cubeImg from "../images/cube.png";
import _snakeImg from "../images/snake.png";
import _2048Img from "../images/2048.png";
import _sortImg from "../images/sort.png";
import _asciiImg from "../images/ascii.png";
import _searchImg from "../images/search.jpg";

import CardInterface from "../interface/CardInterface";

const Cards: CardInterface[] = [
  {
    title: "Pathfinding Snake Game Visualizer",
    img: _snakeImg,
    visit: "https://github.com/smitbarmase/pathfinding-snake-game-visualizer",
    live: "https://smitbarmase.github.io/pathfinding-snake-game-visualizer/",
    createdAt: "Jan 18, 2020",
    info: "Snake uses A* path-finding algorithm to find the food in a grid.",
    tags: ["p5js", "a-star-path-finding-algorithm"],
  },
  {
    title: "Rubik's Cube AI Solver",
    img: _cubeImg,
    visit: "https://github.com/smitbarmase/rubiks-cube-solver",
    live: "https://smitbarmase.github.io/rubiks-cube-solver/",
    createdAt: "March 15, 2020",
    info:
      "It uses decision based algorithm and layer-by-layer technique to solve rubik's cube.",
    tags: ["p5js", "pattern-detection-algorithm"],
  },
  {
    title: "2048 AI Solver",
    img: _2048Img,
    visit: "https://github.com/smitbarmase/2048-ai",
    live: "https://smitbarmase.github.io/2048-ai/",
    createdAt: "March 29, 2020",
    info:
      "Solves 2048 by traversing possible states in decision tree and choose promising match via certain criteria.",
    tags: ["p5js", "decision-search-tree"],
  },
  {
    title: "Sorting Algorithm Visualizer",
    img: _sortImg,
    visit: "https://github.com/smitbarmase/sorting-algorithm-visualizer",
    live: "https://smitbarmase.github.io/sorting-algorithm-visualizer/",
    createdAt: "April 12, 2020",
    info:
      "The visualization of bubble sort, merge sort and quick sort and time taken for each sort.",
    tags: ["p5js", "bubble-sort", "merge-sort", "quick-sort"],
  },
  {
    title: "Video To ASCII Characters Converter",
    img: _asciiImg,
    visit: "https://github.com/smitbarmase/Video-To-ASCII-Manipulation",
    createdAt: "Jun 6, 2020",
    info:
      "The algorithm that converts any video or image to ASCII characters art. :)",
    tags: ["javascript", "video-canvas"],
  },
  {
    title: "Search Algorithm Visualizer",
    img: _searchImg,
    visit: "https://github.com/smitbarmase/react-search-algorithm-visualizer",
    createdAt: "June 12, 2020",
    info:
      "The visualization of breadth-first search, depth-first search, A* search and many more.",
    tags: ["reactjs", "bfs", "dfs", "a-star-search"],
  },
];

export default Cards;
