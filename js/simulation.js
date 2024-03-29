function resetScenario() {
  setScenarioToVar();
  time = 0;
}

function simulate(timeStep) {
  switch (mode) {
    case '2d':
      // apply gravity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          // calculate double-sided interaction simultaneously for both particles
          let particle1 = particles[i];
          let particle2 = particles[j];
          
          let dist = Math.hypot(
            particle2[3] - particle1[3],
            particle2[4] - particle1[4]
          );
          
          let forceStrength = gravStrength * particle1[0] * particle2[0];
          
          if (dist == 0) {
            forceStrength /= gravDistLowerLimit * gravDistLowerLimit;
          } else if (dist < gravDistLowerLimit) {
            forceStrength /= gravDistLowerLimit * gravDistLowerLimit;
          } else {
            forceStrength /= dist * dist;
          }
          
          let forceNormX, forceNormY;
          
          if (dist == 0) {
            let angle = 2 * Math.PI * rng_0to1();
            
            forceNormX = Math.cos(angle);
            forceNormY = Math.sin(angle);
          } else {
            forceNormX = (particle2[3] - particle1[3]) / dist;
            forceNormY = (particle2[4] - particle1[4]) / dist;
          }
          
          let forceX = forceNormX * forceStrength;
          let forceY = forceNormY * forceStrength;
          
          let accel1X = forceX / particle1[0];
          let accel1Y = forceY / particle1[0];
          
          let accel2X = -forceX / particle2[0];
          let accel2Y = -forceY / particle2[0];
          
          particle1[5] += accel1X * timeStep;
          particle1[6] += accel1Y * timeStep;
          
          particle2[5] += accel2X * timeStep;
          particle2[6] += accel2Y * timeStep;
        }
      }
      
      // apply velocity
      for (let particle of particles) {
        particle[3] += particle[5] * timeStep;
        particle[4] += particle[6] * timeStep;
      }
      break;
    
    case '3d':
      // apply gravity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          // calculate double-sided interaction simultaneously for both particles
          let particle1 = particles[i];
          let particle2 = particles[j];
          
          let dist = Math.hypot(
            particle2[3] - particle1[3],
            particle2[4] - particle1[4],
            particle2[5] - particle1[5]
          );
          
          let forceStrength = gravStrength * particle1[0] * particle2[0];
          
          if (dist == 0) {
            forceStrength /= gravDistLowerLimit * gravDistLowerLimit;
          } else if (dist < gravDistLowerLimit) {
            forceStrength /= gravDistLowerLimit * gravDistLowerLimit;
          } else {
            forceStrength /= dist * dist;
          }
          
          let forceNormX, forceNormY, forceNormZ;
          
          if (dist == 0) {
            // pick random direction to apply force in
            let [ norm1, norm2 ] = normals_nonzero();
            let [ norm3, _ ] = normals_nonzero();
            
            forceNormX = norm1;
            forceNormY = norm2;
            forceNormZ = norm3;
            
            let mag = Math.hypot(forceNormX, forceNormY, forceNormZ);
            
            forceNormX /= mag;
            forceNormY /= mag;
            forceNormZ /= mag;
          } else {
            forceNormX = (particle2[3] - particle1[3]) / dist;
            forceNormY = (particle2[4] - particle1[4]) / dist;
            forceNormZ = (particle2[5] - particle1[5]) / dist;
          }
          
          let forceX = forceNormX * forceStrength;
          let forceY = forceNormY * forceStrength;
          let forceZ = forceNormZ * forceStrength;
          
          let accel1X = forceX / particle1[0];
          let accel1Y = forceY / particle1[0];
          let accel1Z = forceZ / particle1[0];
          
          let accel2X = -forceX / particle2[0];
          let accel2Y = -forceY / particle2[0];
          let accel2Z = -forceZ / particle2[0];
          
          particle1[6] += accel1X * timeStep;
          particle1[7] += accel1Y * timeStep;
          particle1[8] += accel1Z * timeStep;
          
          particle2[6] += accel2X * timeStep;
          particle2[7] += accel2Y * timeStep;
          particle2[8] += accel2Z * timeStep;
        }
      }
      
      // apply velocity
      for (let particle of particles) {
        particle[3] += particle[6] * timeStep;
        particle[4] += particle[7] * timeStep;
        particle[5] += particle[8] * timeStep;
      }
      break;
  }
  
  // increment time
  time += timeStep;
}
