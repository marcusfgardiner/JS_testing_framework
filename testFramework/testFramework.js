var expect = {
  isTrue: function(expectationToCheck) {
    if (!expectationToCheck) {
      throw new Error("The expectation evaluated to "+ expectationToCheck + ". Obviously, this is not true");
    }
  }
};
