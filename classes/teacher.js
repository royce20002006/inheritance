const Person = require('./person');

// Your code here 
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience ) {
    super(firstName, lastName); 
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i].yearsOfExperience
    }
    return sum;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
