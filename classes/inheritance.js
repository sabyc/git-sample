"use strict";

class HospitalEmployee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }

  get salary() {
    return this._salary;
  }

  calculateMonthlySalary() {
    return this.salary / 12;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, salary, certifications) {
    super(name, salary);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertifications(newCertification) {
    this._certifications.push(newCertification);
  }
}

const nurseSabina = new Nurse("Sabina", 75000, ["Traum", "First Aid"]);
console.log(
  "Salary of " + nurseSabina.name + " is: ",
  nurseSabina.calculateMonthlySalary()
);

const nurseAdis = new Nurse("Adis", 35000, ["Genetics", "First Aid"]);
console.log(
  "Salary of " + nurseAdis.name + " is: ",
  nurseAdis.calculateMonthlySalary()
);

// class Doctor extends HospitalEmployee {}
