const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

<<<<<<< HEAD
  test('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
=======
  test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  test.skip('works with numbers and punctuation', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  test.skip('works with blank strings', () => {
    expect(reverseString('')).toEqual('');
  });
>>>>>>> upstream/main
});
