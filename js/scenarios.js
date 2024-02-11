function copyScenario(scenario) {
  return scenario.map(x => Array.from(x));
}

SCENARIOS.push([
  [1, 'rgba(255, 255, 255, 0.4)', 10, 0, 0, 0, 0, 0, 0],
  [1, 'rgba(255, 0, 0, 0.4)', 10, 1, 0, 0, 0, 0, 0],
  [1, 'rgba(0, 255, 0, 0.4)', 10, 0, 1, 0, 0, 0, 0],
  [1, 'rgba(0, 0, 255, 0.4)', 10, 0, 0, 1, 0, 0, 0],
]);

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([100, 'blue', 10, 0, 0, 0, 0, -3, 0]);
  
  for (let i = 0; i < 300; i++) {
    let random = normals();
    particles.push([1, 'yellow', 10, random[0] * 5, 4, random[1] * 5, 0, 1, 0]);
  }
  
  return particles;
})());

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([100, 'blue', 10, 0, 0, 0, 0, -3, 0]);
  
  for (let i = 0; i < 300; i++) {
    let random = normals();
    particles.push([-1, 'yellow', 10, random[0] * 5, 4, random[1] * 5, 0, 1, 0]);
  }
  
  return particles;
})());

SCENARIOS.push((() => {
  let particles = [];
  
  let bigMass = 100;
  let littleCount = 500;
  let littleTotalMass = 10;
  let littleIndividMass = littleTotalMass / littleCount;
  let totMass = bigMass + littleTotalMass;
  
  let littleMinDist = 4;
  let littleDistSpan = 4;
  let littleDistThick = 0.1;
  
  particles.push([bigMass, 'blue', 10, 0, 0, 0, 0, 0, 0]);
  
  for (let i = 0; i < littleCount; i++) {
    let random = normals();
    let x = random[0] * littleDistSpan;
    let z = random[1] * littleDistSpan;
    let dist = Math.hypot(x, z);
    let ang = Math.atan2(x, z);
    dist += littleMinDist;
    // https://en.wikipedia.org/wiki/Orbital_speed
    // sqrt(G * M / dist)
    let speed = Math.sqrt(GRAV_STRENGTH * totMass / dist);
    let tangentAng = ang + Math.PI / 2;
    [ x, z ] = [
      Math.cos(ang) * dist,
      Math.sin(ang) * dist,
    ];
    let vx = Math.cos(tangentAng) * speed;
    let vz = Math.sin(tangentAng) * speed;
    
    let y = (rng() - 0.5) * littleDistThick;
    
    particles.push([littleIndividMass, 'yellow', 10, x, y, z, vx, 0, vz]);
  }
  
  return particles;
})());
