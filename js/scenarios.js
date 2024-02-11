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
