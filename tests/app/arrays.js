describe('arrays', () => {
  let a;

  beforeEach(() => {
    a = [1, 2, 3, 4];
  });

  it('you should be able to determine the location of an item in an array', () => {
    expect(arraysAnswers.indexOf(a, 3)).to.eql(2);
    expect(arraysAnswers.indexOf(a, 5)).to.eql(-1);
  });

  it('you should be able to sum the items of an array', () => {
    expect(arraysAnswers.sum(a)).to.eql(10);
  });

  it('you should be able to remove all instances of a value from an array', () => {
    a.push(2); // Make sure the value appears more than one time
    a.push(2); // Make sure the value appears more than one time in a row
    const result = arraysAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('you should be able to remove all instances of a value from an array, returning the original array', () => {
    // a.splice(1, 0, 2);
    // a.push(2);
    // a.push(2);

    const result = arraysAnswers.removeWithoutCopy(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');

    // make sure that you return the same array instance
    expect(result).equal(a);
  });

  it('you should be able to add an item to the end of an array', () => {
    const result = arraysAnswers.append(a, 10);

    expect(result).to.have.length(5);
    expect(result[result.length - 1]).to.eql(10);
  });

  it('you should be able to remove the last item of an array', () => {
    const result = arraysAnswers.truncate(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 2 3');
  });

  it('you should be able to add an item to the beginning of an array', () => {
    const result = arraysAnswers.prepend(a, 10);

    expect(result).to.have.length(5);
    expect(result[0]).to.eql(10);
  });

  it('you should be able to remove the first item of an array', () => {
    const result = arraysAnswers.curtail(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('2 3 4');
  });

  it('you should be able to join together two arrays', () => {
    const c = ['a', 'b', 'c', 1];
    const result = arraysAnswers.concat(a, c);

    expect(result).to.have.length(8);
    expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
  });

  it('you should be able to add an item anywhere in an array', () => {
    const result = arraysAnswers.insert(a, 'z', 2);

    expect(result).to.have.length(5);
    expect(result.join(' ')).to.eql('1 2 z 3 4');
  });

  it('you should be able to count the occurences of an item in an array', () => {
    const result = arraysAnswers.count([1, 2, 4, 4, 3, 4, 3], 4);

    expect(result).to.eql(3);
  });

  it('you should be able to find duplicates in an array', () => {
    const result = arraysAnswers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

    expect(result.sort()).to.eql([1, 3, 4]);
  });

  it('you should be able to square each number in an array', () => {
    const result = arraysAnswers.square(a);

    expect(result).to.have.length(4);
    expect(result.join(' ')).to.eql('1 4 9 16');
  });

  it('you should be able to find all occurrences of an item in an array', () => {
    const result = arraysAnswers.findAllOccurrences([1, 2, 3, 4, 5, 6, 1, 7], 1);

    expect(result.sort().join(' ')).to.eql('0 6');
  });
});