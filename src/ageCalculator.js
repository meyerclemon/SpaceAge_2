export const yearOnPlanet = new Object ();
    yearOnPlanet.mercury= 0.24;
    yearOnPlanet.earth= 1
    yearOnPlanet.venus= 0.62;
    yearOnPlanet.mars= 1.88;
    yearOnPlanet.jupiter= 11.86;
    yearOnPlanet.saturn= 29.46;
    yearOnPlanet.uranus= 84.01;
    yearOnPlanet.neptune= 164.79;
    yearOnPlanet.pluto= 248.59;

export class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
  }

//planetAge: (age/planet year).toFixed;
  getAgeOnPlanet(planet) {

    let ageCalculator = (new Date().getFullYear() - this.birthdate.getFullYear())/yearOnPlanet[planet];
    return (parseFloat(ageCalculator.toFixed(2)));
  }

  getLifeExpectancy(planet) {
    const lifeExpectancy = 71.5;
    let countDown = (lifeExpectancy - (new Date().getFullYear() - this.birthdate.getFullYear())) /yearOnPlanet[planet];
    return (parseFloat(countDown.toFixed(2)));
  }


  }
