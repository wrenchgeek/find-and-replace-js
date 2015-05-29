describe('findAndReplace', function() {
  it('finds a particular string of words in a larger string and replaces it with an alternate substring', function() {
    var testString = "my mother and I were sitting on the porch."
    expect(findAndReplace(testString, "mother", "father")).to.eql("my father and I were sitting on the porch.");
  });
});
