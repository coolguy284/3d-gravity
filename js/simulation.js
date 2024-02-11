function resetScenario() {
  particles = copyScenario(SCENARIOS[scenarioNum]);
}

function simulate(timeStep) {
  // apply velocity
  
  for (let particle of particles) {
    particle[3] += particle[6] * timeStep;
    particle[4] += particle[7] * timeStep;
    particle[5] += particle[8] * timeStep;
  }
}
