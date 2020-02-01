//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OrbitalPeriodInEarthYears = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

const secondsPerEarthYear = 31557600

export const age = (planet, ageInSeconds) => {
  let orbitalPeriodInSeconds = secondsPerEarthYear * OrbitalPeriodInEarthYears[planet];
  let earthYears = parseFloat((ageInSeconds / orbitalPeriodInSeconds).toFixed(2))
  return earthYears
};

