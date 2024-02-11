let width, height, aspect;

let ctx = canvas.getContext('2d');

let mouseIsDown = false;

let distExponent = 1.5;
let dist = 10 ** distExponent;
let elev = Math.PI / 4;
let azim = 0;
let scenarioNum = 1;

let particles = copyScenario(SCENARIOS[scenarioNum]);
let running = false;
let rng;
