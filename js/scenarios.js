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
    //let orbitMass = bigMass + littleTotalMass * (dist - littleMinDist) / littleDistSpan / 4;
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

function _addSystem(particles, system, density, parentInfo) {
  let x = system.x;
  let y = system.y;
  let z = system.z;
  let vx = system.vx;
  let vy = system.vy;
  let vz = system.vz;
  
  if (parentInfo) {
    x += parentInfo.x;
    y += parentInfo.y;
    z += parentInfo.z;
    vx += parentInfo.vx;
    vy += parentInfo.vy;
    vz += parentInfo.vz;
    
    if (system.orbit) {
      let dist = Math.hypot(system.x, system.z);
      let ang = Math.atan2(system.z, system.x);
      
      let transverseAng = ang + Math.PI / 2;
      let speed = Math.sqrt(GRAV_STRENGTH * parentInfo.mass / dist);
      
      vx += Math.cos(transverseAng) * speed;
      vz += Math.sin(transverseAng) * speed;
    }
  }
  
  particles.push([system.main.mass, system.main.color, density, x, y, z, vx, vy, vz]);
  
  if (system.subsystems) {
    for (let subSystem of system.subsystems) {
      _addSystem(particles, subSystem, density, {
        mass: system.main.mass,
        x, y, z, vx, vy, vz,
      });
    }
  }
}

function addSystems(particles, systems, density) {
  for (let system of systems) {
    _addSystem(particles, system, density, null);
  }
}

SCENARIOS.push((() => {
  let particles = [];
  
  let density = 10;
  
  let systems = [
    {
      x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
      orbit: false,
      main: {
        mass: 1000000000,
        color: 'blue',
      },
      subsystems: [
        {
          x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
          orbit: false,
          main: {
            mass: 100,
            color: 'yellow',
          },
          subsystems: [
            {
              x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0,
              orbit: true,
              main: {
                mass: 1,
                color: 'green',
              }
            },
            {
              x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0,
              orbit: true,
              main: {
                mass: 1,
                color: 'red',
              }
            },
          ],
        },
        {
          x: 30030, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
          orbit: true,
          main: {
            mass: 100,
            color: 'white',
          },
          subsystems: [
            {
              x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0,
              orbit: true,
              main: {
                mass: 1,
                color: 'green',
              }
            },
            {
              x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0,
              orbit: true,
              main: {
                mass: 1,
                color: 'red',
              }
            },
          ],
        },
      ],
    }
  ];
  
  addSystems(particles, systems, density);
  
  return particles;
})());
