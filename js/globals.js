let width, height, aspect;

let ctx = canvas.getContext('2d');

let mouseIsDown = false;
let currentKeys = new Set();

let centerX = 0;
let centerY = 0;
let centerZ = 0;
let distExponent = 1.5;
let dist = 10 ** distExponent;
let elev = Math.PI / 4;
let azim = 0;
let scenarioNum = 9;
let trackObj = 3;
let currentlyTracking = true;

let particles = copyScenario(SCENARIOS[scenarioNum]);
let running = false;
let time = 0;
