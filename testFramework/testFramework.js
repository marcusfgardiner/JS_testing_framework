// var expect = {
//   isTrue: function(expectationToCheck) {
//     if (!expectationToCheck) {
//       throw new Error("The expectation evaluated to "+ expectationToCheck + ". Obviously, this is not true");
//     }
//   }
// };

var expect = function(expectationToCheck) {
  this.isTrue = function() {
    if (!expectationToCheck) {
      throw new Error("The expectation evaluated to " + expectationToCheck + ". Obviously, this is not true");
    }
  };
  return expectationToCheck
}

// expect.isTrue = function() {
//   if (!expectationToCheck) {
//     throw new Error("The expectation evaluated to " + expectationToCheck + ". Obviously, this is not true");
//   }
// };

//   isTrue: function() {
//     if (!expectationToCheck) {
//       throw new Error("The expectation evaluated to " + expectationToCheck + ". Obviously, this is not true");
//     }
//   }
// };
