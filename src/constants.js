const CANVAS_SIZE = [500, 500];
const SNAKE_START = [
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3];
const SCALE = 10;
const SPEED = 200;
const DIRECTIONS = {
  38: [0, -1],
  40: [0, 1],
  37: [-1, 0],
  39: [1, 0]
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
}