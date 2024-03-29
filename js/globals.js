let width, height, aspect;

let ctx = canvas.getContext('2d');

let mouseIsDown = false;
let currentKeys = new Set();

let centerX = 0;
let centerY = 0;
let centerZ = 0;
let distExponent = 1.5;
let dist = 10 ** distExponent;
let elev = Math.PI / 2;
let azim = 0;
let scenarioNum = 3;
let trackObj = 0;
let currentlyTracking = false;
let timeRateIndex = 0;
let timeRate = 1;
let timeRateBackwards = false;
/**
 * 0 = 1x 
 * 1 = 3x
 * 2 = 10x
 * 3 = 30x
 * 4 = 100x
 * 5 = 300x
 * 6 = 1000x
 * 7 = 3000x
 */
let timeAccelIndex = 0;
let timeAccel = 1;
let fixedTimeStep = true;

let particles;
let mode;
let scenarioName;
let gravStrength;
let gravDistLowerLimit;
let time;
let running = false;
