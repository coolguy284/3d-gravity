SCENARIOS.push({
  name: '2 Particles',
  mode: '2d',
  GRAV_STRENGTH: 0.01,
  GRAV_DIST_LOWER_LIMIT: 4e-1,
  particles: [
    // [mass, color, density, x, y, vx, vy]
    [1, 'red', 1e5, -0.3, 0, 0, 1.0],
    [1, 'blue', 1e5, 0.3, 0, 0, -1.0],
  ],
});

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([100, 'blue', 1e5, 0, 0, 0, 0]);
  
  for (let i = 0; i < 1000; i++) {
    particles.push([0.03, 'yellow', 1e5, 1, 0, 0, 0]);
  }
  
  return {
    name: 'Tiny Particles in One Place',
    mode: '2d',
    GRAV_STRENGTH: 0.01,
    GRAV_DIST_LOWER_LIMIT: 4e-1,
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([30, 'blue', 1e5, 1, 0, 0, 0]);
      
  particles.push([30, 'green', 1e5, -1, 0, 0, 0]);
  
  for (let i = 0; i < 500; i++) {
    particles.push([-0.06, 'yellow', 1e5, 1, 0, 0, 0]);
    
    particles.push([-0.055, 'red', 1e5, -1, 0, 0, 0]);
  }
  
  return {
    name: 'Galaxies With Negative Mass Stars',
    mode: '2d',
    GRAV_STRENGTH: 0.01,
    GRAV_DIST_LOWER_LIMIT: 4e-1,
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([30, 'blue', 1e5, 1, 0, 0, 0]);
      
  particles.push([100, 'green', 1e5, -1, 0, 0, 0]);
  
  for (let i = 0; i < 500; i++) {
    particles.push([0.06, 'yellow', 1e5, 1, 0, 0, 0]);
    
    particles.push([0.055, 'red', 1e5, -1, 0, 0, 0]);
  }
  
  return {
    name: 'Galaxies With Stars',
    mode: '2d',
    GRAV_STRENGTH: 0.01,
    GRAV_DIST_LOWER_LIMIT: 4e-1,
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([30, 'blue', 1e5, 1, 0, 0.4, 0]);
  
  particles.push([100, 'green', 1e5, -1, 0, -0.4, 0]);
  
  let copies = 500;
  
  for (let i = 0; i < copies; i++) {
    let angle = 2 * Math.PI * rng_0to1();
    let dist = 0.5 * rng_0to1();
    
    let angle2 = angle + Math.PI / 2;
    let speed = 1 / dist ** 0.5 * 0.007;
    
    particles.push([
      0.06,
      'yellow',
      1e5,
      1 + Math.cos(angle) * dist,
      0 + Math.sin(angle) * dist,
      0.4 + Math.cos(angle2) * speed * (30 + 0.06 * copies),
      0 + Math.sin(angle2) * speed * (30 + 0.06 * copies),
    ]);
    
    particles.push([
      0.055,
      'red',
      1e5,
      -1 + Math.cos(angle) * dist,
      0 + Math.sin(angle) * dist,
      -0.4 + Math.cos(angle2) * speed * (100 + 0.055 * copies),
      0 + Math.sin(angle2) * speed * (100 + 0.055 * copies),
    ]);
  }
  
  return {
    name: 'Moving Galaxies With Stars',
    mode: '2d',
    GRAV_STRENGTH: 0.01,
    GRAV_DIST_LOWER_LIMIT: 4e-1,
    particles,
  };
})());

SCENARIOS.push({
  name: 'Debug 3-Axes',
  mode: '3d',
  particles: [
    [1, 'rgba(255, 255, 255, 0.4)', 10, 0, 0, 0, 0, 0, 0],
    [1, 'rgba(255, 0, 0, 0.4)', 10, 1, 0, 0, 0, 0, 0],
    [1, 'rgba(0, 255, 0, 0.4)', 10, 0, 1, 0, 0, 0, 0],
    [1, 'rgba(0, 0, 255, 0.4)', 10, 0, 0, 1, 0, 0, 0],
  ],
});

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([100, 'blue', 10, 0, 0, 0, 0, -3, 0]);
  
  for (let i = 0; i < 300; i++) {
    let random = normals();
    particles.push([1, 'yellow', 10, random[0] * 5, 4, random[1] * 5, 0, 1, 0]);
  }
  
  return {
    name: 'Galaxy',
    mode: '3d',
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  particles.push([100, 'blue', 10, 0, 0, 0, 0, -3, 0]);
  
  for (let i = 0; i < 300; i++) {
    let random = normals();
    particles.push([-1, 'yellow', 10, random[0] * 5, 4, random[1] * 5, 0, 1, 0]);
  }
  
  return {
    name: 'Galaxy With Negative Mass Stars',
    mode: '3d',
    particles,
  };
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
      littleTotalMass: 10,
      littleMinDist: 2,
      littleDistSpan: 4,
      littleDistThick: 2,
      galaxySpinMassFactor: 0.3,
    }
  );
  
  return {
    name: 'Better Galaxy',
    mode: '3d',
    particles,
  };
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
  
  return {
    name: 'Galaxy Collision',
    mode: '3d',
    particles,
  };
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
  
  return {
    name: 'Galaxy Collision With Motion',
    mode: '3d',
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  let density = 10;
  
  let systems = [
    {
      x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e9, color: 'blue' },
      subsystems: [
        {
          x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 100, color: 'yellow' },
          subsystems: [
            { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
            { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
          ],
        },
        {
          x: 30030, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
          subsystems: [
            { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
            { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
          ],
        },
      ],
    }
  ];
  
  addSystems(particles, systems, density);
  
  return {
    name: 'Half-Orbiting System',
    mode: '3d',
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  let density = 10;
  
  let systems = [
    {
      x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e9, color: 'blue' },
      subsystems: [
        { x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100000, color: 'orange' } },
        {
          x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 100, color: 'yellow' },
          subsystems: [
            { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
            { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
          ],
        },
        {
          x: 30030, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
          subsystems: [
            { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
            { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
          ],
        },
      ],
    },
    {
      x: 0, y: 50000, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e9, color: 'blue' },
      subsystems: [
        { x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100000, color: 'orange' },
        },
        {
          x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 100, color: 'yellow' },
          subsystems: [
            { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
            { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
          ],
        },
        {
          x: 30030, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
          subsystems: [
            { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
            { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
          ],
        },
      ],
    }
  ];
  
  addSystems(particles, systems, density);
  
  return {
    name: '2 Half-Orbiting Systems Crashing Into Each Other',
    mode: '3d',
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  let density = 10;
  
  let systems = [
    {
      x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e15, color: 'white'  },
      subsystems: [
        {
          x: 0, y: 0, z: -1e7, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e9, color: 'blue' },
          subsystems: [
            { x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1e5, color: 'orange' } },
            {
              x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'yellow' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
                {
                  x: 0, y: 0, z: 30, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 4, color: 'yellow' },
                  subsystems: [
                    { x: 1, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 0.1, color: 'green' } },
                  ],
                },
              ],
            },
            {
              x: 30300, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  addSystems(particles, systems, density);
  
  return {
    name: 'Extended Falling System',
    mode: '3d',
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  let density = 10;
  
  let systems = [
    {
      x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e15, color: 'white'  },
      subsystems: [
        {
          x: 0, y: 0, z: -1e7, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1e9, color: 'blue' },
          subsystems: [
            { x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1e5, color: 'orange' } },
            {
              x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'yellow' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
                {
                  x: 0, y: 0, z: 30, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 4, color: 'yellow' },
                  subsystems: [
                    { x: 1, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 0.1, color: 'green' } },
                  ],
                },
              ],
            },
            {
              x: 30300, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
              ],
            },
            /*{
              x: 0, y: 0, z: 30000, vx: 0, vy: 0, vz: 0, orbit: -1, main: { mass: 100, color: 'yellow' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
                {
                  x: 0, y: 0, z: 30, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 4, color: 'yellow' },
                  subsystems: [
                    { x: 1, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 0.1, color: 'green' } },
                  ],
                },
              ],
            },*/
          ],
        },
      ],
    },
  ];
  
  addSystems(particles, systems, density);
  
  return {
    name: 'Extended Orbiting System',
    mode: '3d',
    particles,
  };
})());

SCENARIOS.push((() => {
  let particles = [];
  
  let density = 10;
  
  let systems = [
    {
      x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e15, color: 'white'  },
      subsystems: [
        {
          x: 0, y: 0, z: -1e7, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e9, color: 'blue' },
          subsystems: [
            { x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1e5, color: 'orange' } },
            {
              x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'yellow' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
                {
                  x: 0, y: 0, z: 30, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 4, color: 'yellow' },
                  subsystems: [
                    { x: 1, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 0.1, color: 'green' } },
                  ],
                },
              ],
            },
            {
              x: 30300, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
              ],
            },
          ],
        },
        {
          x: 0, y: 0, z: -1e7, vx: 0, vy: 0, vz: 0, orbit: false, main: { mass: 1e9, color: 'blue' },
          subsystems: [
            { x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1e5, color: 'orange' } },
            {
              x: 30000, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'yellow' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
                {
                  x: 0, y: 0, z: 30, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 4, color: 'yellow' },
                  subsystems: [
                    { x: 1, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 0.1, color: 'green' } },
                  ],
                },
              ],
            },
            {
              x: 30300, y: 0, z: 0, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 100, color: 'white' },
              subsystems: [
                { x: 0, y: 0, z: 6, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'green' } },
                { x: 0, y: 0, z: 10, vx: 0, vy: 0, vz: 0, orbit: true, main: { mass: 1, color: 'red' } },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  addSystems(particles, systems, density);
  
  return {
    name: 'Extended Orbiting System Duplicated In-Place',
    mode: '3d',
    particles,
  };
})());
