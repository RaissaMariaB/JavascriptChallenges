//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  let ageNumbers;
  let planetYearInSeconds;
  const calculateAgeNumberRounded = (yearInSeconds) =>  Math.round((seconds/yearInSeconds)*100)/100
  switch (planet) {
    case "earth":
      ageNumbers = calculateAgeNumberRounded(31557600)
      break;
    case "mercury":
      planetYearInSeconds = 0.2408467 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds);
      break;
    case "venus":
      planetYearInSeconds = 0.61519726 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds);
      break;
    case "mars":
      planetYearInSeconds = 1.8808158 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds);
      break;
    case "jupiter":
      planetYearInSeconds = 11.862615 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds)
      break;
    case "saturn":
      planetYearInSeconds = 29.447498 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds)
      break;
    case "uranus":
      planetYearInSeconds = 84.016846 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds)
      break;
    case "neptune":
      planetYearInSeconds = 164.79132 * 31557600;
      ageNumbers = calculateAgeNumberRounded(planetYearInSeconds)
      break;
  }

  return ageNumbers ;
};
