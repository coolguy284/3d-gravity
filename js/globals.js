let width, height, aspect;

let ctx = canvas.getContext('2d');

let mouseIsDown = false;

let dist = 10;
let distExponent = 1;
let elev = 0;
let azim = 0;
let scenarioNum = 0;

let particles = copyScenario(SCENARIOS[0]);
let running = false;
