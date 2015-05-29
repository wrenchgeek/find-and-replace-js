describe('findAndReplace', function {
  it('finds a particular string of words in a larger string and replaces it with an alternate substring', {
    var testString = "my mother and I were sitting on the porch."
    expect(findAndReplace("mother", "father")).to.equal("my father and I wre sitting on the porch");
  });
});
