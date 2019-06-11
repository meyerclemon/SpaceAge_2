import { AgeCalculator } from '../src/AgeCalculator.js';


describe('AgeCalculator', function() {
  var reusableAgeCalculator;

  beforeEach(function() {
      reusableAgeCalculator = new AgeCalculator('1980-11-10');
});

it('should calculate user age in Earth years', function() {
  let test = (39 + new Date().getFullYear() - 2019);
  let result = reusableAgeCalculator.getAgeOnPlanet('earth');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency on Earth', function() {
  let test = parseFloat((32.5 + new Date().getFullYear() - 2019).toFixed(2));
  let result = reusableAgeCalculator.getLifeExpectancy('earth');
  expect(result).toEqual(test);
});

it('should calculate user age in Mercury years', function() {
  let test = (parseFloat((162.5 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('mercury');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Mercury years', function() {
    let test = parseFloat((135.42 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('mercury');
    expect(result).toEqual(test);
});

it('should calculate user age in Venus years', function() {
  let test = (parseFloat((62.9 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('venus');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Venus years', function() {
    let test = parseFloat((52.42 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('venus');
    expect(result).toEqual(test);
});

it('should calculate user age in Mars years', function() {
  let test = (parseFloat((20.74 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('mars');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Mars years', function() {
    let test = parseFloat((17.29 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('mars');
    expect(result).toEqual(test);
});

it('should calculate user age in Jupiter years', function() {
  let test = (parseFloat((3.29 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('jupiter');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Jupiter years', function() {
    let test = parseFloat((2.74 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('jupiter');
    expect(result).toEqual(test);
});

it('should calculate user age in Saturn years', function() {
  let test = (parseFloat((1.32 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('saturn');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Saturn years', function() {
    let test = parseFloat((1.1 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('saturn');
    expect(result).toEqual(test);
});

it('should calculate user age in Uranus years', function() {
  let test = (parseFloat((0.46 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('uranus');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Uranus years', function() {
    let test = parseFloat((0.39 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('uranus');
    expect(result).toEqual(test);
});

it('should calculate user age in Neptune years', function() {
  let test = (parseFloat((0.24 + new Date().getFullYear() - 2019).toFixed(2)));
  let result = reusableAgeCalculator.getAgeOnPlanet('neptune');
  expect(result).toEqual(test);
});

it('should calculate remaining life expectency in Neptune years', function() {
    let test = parseFloat((0.2 + new Date().getFullYear() - 2019).toFixed(2));
    let result = reusableAgeCalculator.getLifeExpectancy('neptune');
    expect(result).toEqual(test);
});
});
