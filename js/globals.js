let width, height, aspect;

let ctx = canvas.getContext('2d');

let mouseIsDown = false;

let dist = 1;
let distExponent = 0;
let elev = 0;
let azim = 0;
let scenarioNum = 0;

let scenario = copyScenario(SCENARIOS[0]);
let running = false;
