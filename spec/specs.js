describe('findAndReplace', function() {
  it('finds a particular string of words in a larger string and replaces it with an alternate substring', function() {
    var testString = "my mother and I were sitting on the porch.";
    expect(findAndReplace(testString, "mother", "father")).to.eql("my father and I were sitting on the porch.");
  });
});

describe('cut', function() {
  it('will search through a string and cut out a substring', function() {
    var testString = "my mother and I were sitting on the porch.";
    expect(cut(testString, "mother")).to.equal("my  and I were sitting on the porch.");
  });
});
