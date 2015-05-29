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

describe('insert', function() {
  it('will insert a string into another string at a given position', function() {
    var testString = "my  and I were sitting on the porch.";
    expect(insert(testString, "mother", 3)).to.equal("my mother and I were sitting on the porch.");
  });
});

describe('findAndReplaceHardMode', function() {
  it('will find and replace a section of a string the hard way', function() {
    var testString = "my mother and I were sitting on the porch.";
    expect(findAndReplaceHardMode(testString, "mother", "father")).to.eql("my father and I were sitting on the porch.");
  });
});

// =================WORK IN PROGRESS===============================================================
//
// describe('findAndReplaceNightmareMode', function() {
//   it('will find and replace every instance of a substring from a parent string', function() {
//     var testString = "hey baby baby";
//     expect(findAndReplaceNightmareMode(testString, "baby", "honey")).to.equal("hey honey honey");
//   });
// });
