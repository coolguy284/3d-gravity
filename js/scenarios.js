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

function addGalaxy(
  particles,
  {
    x: centerX, y: centerY, z: centerZ,
    vx: centerVX, vy: centerVY, vz: centerVZ,
    
    bigMass,
    bigColor,
    
    littleColor,
    littleCount,
    littleTotalMass,
    littleMinDist,
    littleDistSpan,
    littleDistThick,
    galaxySpinMassFactor,
  }
) {
  let density = 10;
  
  let littleIndividMass = littleTotalMass / littleCount;
  let orbitMass = bigMass + littleTotalMass * galaxySpinMassFactor;
  
  particles.push([bigMass, bigColor, density, centerX, centerY, centerZ, centerVX, centerVY, centerVZ]);
  
  for (let i = 0; i < littleCount; i++) {
    let random = normals();
    let x = random[0] * littleDistSpan;
    let z = random[1] * littleDistSpan;
    let dist = Math.hypot(x, z);
    let ang = Math.atan2(x, z);
    dist += littleMinDist;
    // https://en.wikipedia.org/wiki/Orbital_speed
    // sqrt(G * M / dist)
    let speed = Math.sqrt(GRAV_STRENGTH * orbitMass / dist);
    let tangentAng = ang + Math.PI / 2;
    [ x, z ] = [
      Math.cos(ang) * dist,
      Math.sin(ang) * dist,
    ];
    let vx = Math.cos(tangentAng) * speed;
    let vz = Math.sin(tangentAng) * speed;
    
    let y = (rng() - 0.5) * littleDistThick;
    
    particles.push([littleIndividMass, littleColor, density, x + centerX, y + centerY, z + centerZ, vx + centerVX, centerVY, vz +  + centerVZ]);
  }
}

SCENARIOS.push((() => {
  let particles = [];
  
  addGalaxy(
    particles,
    {
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      bigMass: 100,
      bigColor: 'blue',
      littleColor: 'yellow',
      littleCount: 500,
      littleTotalMass: 10,
      littleMinDist: 2,
      littleDistSpan: 4,
      littleDistThick: 2,
      galaxySpinMassFactor: 0.3,
    }
  );
  
  return particles;
})());

SCENARIOS.push((() => {
  let particles = [];
  
  addGalaxy(
    particles,
    {
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: 0,
      bigMass: 100,
      bigColor: 'blue',
      littleColor: 'yellow',
      littleCount: 500,
      littleTotalMass: 100,
      littleMinDist: 2,
      littleDistSpan: 4,
      littleDistThick: 2,
      galaxySpinMassFactor: 0.3,
    }
  );
  
  addGalaxy(
    particles,
    {
      x: 100, y: 4, z: 0,
      vx: 0, vy: 0, vz: 0,
      bigMass: 100,
      bigColor: 'blue',
      littleColor: 'yellow',
      littleCount: 500,
      littleTotalMass: 100,
      littleMinDist: 2,
      littleDistSpan: 4,
      littleDistThick: 2,
      galaxySpinMassFactor: 0.3,
    }
  );
  
  return particles;
})());

SCENARIOS.push((() => {
  let particles = [];
  
  addGalaxy(
    particles,
    {
      x: 0, y: 0, z: 0,
      vx: 0, vy: 0, vz: -2,
      bigMass: 100,
      bigColor: 'blue',
      littleColor: 'yellow',
      littleCount: 500,
      littleTotalMass: 300,
      littleMinDist: 2,
      littleDistSpan: 4,
      littleDistThick: 2,
      galaxySpinMassFactor: 0.5,
    }
  );
  
  addGalaxy(
    particles,
    {
      x: 55, y: 0, z: 0,
      vx: 0, vy: 0, vz: 2,
      bigMass: 100,
      bigColor: 'blue',
      littleColor: 'yellow',
      littleCount: 500,
      littleTotalMass: 300,
      littleMinDist: 2,
      littleDistSpan: 4,
      littleDistThick: 2,
      galaxySpinMassFactor: 0.5,
    }
  );
  
  return particles;
})());
