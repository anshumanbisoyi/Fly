//Fly me to my destination - second task
function minimumPlanes(array) {
  const n = array.length;
  let currentPlaneFuel = array[0];
  let currentPosition = 0;
  let planesRequired = 0;

  // While we haven't reached the last airport:
  while (currentPosition < n - 1) {
    // Find the farthest airport we can reach with the current plane fuel:
    let farthestReachable = currentPosition;
    for (let i = currentPosition + 1; i <= Math.min(currentPosition + currentPlaneFuel, n - 1); i++) {
      if (i === n - 1) {
        // We can reach the last airport with the current fuel, so return the number of planes required:
        return planesRequired + 1;
      }
      if (i + array[i] > farthestReachable + array[farthestReachable]) {
        farthestReachable = i;
      }
    }

    // If we can't reach any farther airport with the current fuel, return -1:
    if (farthestReachable === currentPosition) {
      return -1;
    }

    // Move to the farthest reachable airport and update the number of planes required:
    currentPosition = farthestReachable;
    currentPlaneFuel = array[currentPosition];
    planesRequired++;
  }

  // We've reached the last airport, so return the number of planes required:
  return planesRequired;
}
