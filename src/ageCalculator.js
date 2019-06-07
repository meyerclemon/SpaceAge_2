export class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
    this.age = new Date().getFullYear() - this.birthdate.getFullYear();
    this.lifeExpectancy = 71.5;
  }
