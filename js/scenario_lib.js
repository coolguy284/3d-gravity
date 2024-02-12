function copyParticles(particles) {
  return particles.map(x => Array.from(x));
}

function setScenarioToVar() {
  let scenario = SCENARIOS[scenarioNum];
  
  particles = copyParticles(scenario.particles);
}

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
    
    if (system.orbit != 0) {
      let dist = Math.hypot(system.x, system.z);
      let ang = Math.atan2(system.z, system.x);
      
      let transverseAng = ang + Math.PI / 2;
      let speed = Math.sqrt(GRAV_STRENGTH * parentInfo.mass / dist) * system.orbit;
      
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
