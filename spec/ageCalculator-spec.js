import { AgeCalculator } from '../src/ageCalculator.js';

describe('AgeCalculator', function() {
  var reusableAgeCalculator;

  const dateAge = 38 + new Date().getFullYear() - 2019;
  const lifeExpectancy = 72;

  it('should instantiate GalacticAgeCalcultor with an age', function() {

  let galacticCalc = new GalacticAgeCalculator('1980-11-10');
  expect(galacticCalc.age).toEqual(dateAge);

});
