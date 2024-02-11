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
          x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
          orbit: true,
          main: {
            mass: 100000,
            color: 'orange',
          },
        },
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
    },
    {
      x: 0, y: 50000, z: 0, vx: 0, vy: 0, vz: 0,
      orbit: false,
      main: {
        mass: 1000000000,
        color: 'blue',
      },
      subsystems: [
        {
          x: 1000, y: 0, z: 0, vx: 0, vy: 0, vz: 0,
          orbit: true,
          main: {
            mass: 100000,
            color: 'orange',
          },
        },
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
  
  return particles;
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
  
  return particles;
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
  
  return particles;
})());
